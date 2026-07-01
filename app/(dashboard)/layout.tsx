"use client";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { tokenStorage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  useEffect(() => {
    const token = tokenStorage.get();
    if (!token) {
      router.push("/login");
      return;
    }

    const decoded = jwtDecode<JwtPayload>(token);

    if (Date.now() >= decoded.exp * 1000) {
      tokenStorage.remove();
      router.push("/login");
      return;
    }

    setTimeout(() => {
      setChecking(false);
    }, 0);
  }, [router]);

  if (checking) return null;
  return (
    <>
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden ">
        <main className="flex-1 p-6">{children}</main>
      </div>
    </>
  );
}
