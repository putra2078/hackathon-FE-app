'use client'
import { tokenStorage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = tokenStorage.get();
    if (token) {
      router.push('/'); 
    } else {
      setTimeout(() => {
        setIsChecking(false);
      }, 0)
    }
  }, [router]);

  if (isChecking) return null;

  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="w-full max-w-md h-[90%] max-h-[650px] bg-surface shadow rounded-md flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
