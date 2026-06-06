"use client";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Banner() {
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formatdDate = now.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      const formatTime = now.toLocaleTimeString("id-ID", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZoneName: 'short'
      })

      setFormattedDate(formatdDate);
      setFormattedTime(formatTime)
    };
    updateDate();
  }, []);
  return (
    <div className="flex bg-linear-to-r from-primary via-primary-400 via-53% to-primary-500 to-89% rounded-2xl py-4 px-12 items-center justify-between text-white shadow">
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <h3 className="text-lg">Selamat Datang Kembali!</h3>
          <h2 className="text-3xl font-semibold">Toko Sejahtera</h2>
          <p className="text-lg">Kelola tokomu dengan mudah dan efesien</p>
        </div>
        <div className="flex gap-12 items-center text-lg">
          <div className="flex flex-col justify-center">
            <p className="text-slate-100">Tanggal</p>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </span>
          </div>
        <div className="w-px h-14 bg-gray-300">

        </div>
          <div className="flex flex-col justify-center ">
            <p className="text-slate-100">Waktu</p>
            <span className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faClock} />
              {formattedTime}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-64 shrink-0">
        <img src="banner-logo.png" alt=""  className="w-full h-full object-contain"/>
      </div>
    </div>
  );
}
