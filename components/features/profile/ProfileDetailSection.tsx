"use client";

import { faCamera, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Button,
} from "@heroui/react";
import EditAccountModal from "./EditAccountModal";
import ChangePasswordModal from "./ChangePasswordModal";

const DUMMY_USER = {
  name: "Arif Budianto",
  email: "arif.budianto@toko.com",
  role: "Pemilik",
  avatarUrl: "https://i.pravatar.cc/150?img=12",
};

export default function ProfileDetailSection() {
  return (
    <div className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow border">
      {/* Header: foto profil + nama + role */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <Avatar size="lg" className="w-20 h-20">
            <Avatar.Image src={DUMMY_USER.avatarUrl} alt={DUMMY_USER.name} />
            <Avatar.Fallback>AB</Avatar.Fallback>
          </Avatar>
          <button
            type="button"
            className="absolute bottom-0 right-0 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white border-2 border-surface shadow-sm hover:bg-primary-700 transition-colors"
            aria-label="Ganti foto profil"
          >
            <FontAwesomeIcon icon={faCamera}/>
          </button>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-xl font-semibold text-foreground">
            {DUMMY_USER.name}
          </p>
          <span className="w-fit text-sm font-medium px-2 py-0.5 rounded-full bg-primary-100 text-primary-700">
            {DUMMY_USER.role}
          </span>
        </div>
      </div>

      <hr />

      {/* Informasi Akun */}
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold text-muted">Informasi Akun</p>

        <InfoRow label="Nama" value={DUMMY_USER.name} >
          <EditAccountModal trigger={<FontAwesomeIcon icon={faPencil} />} />
        </InfoRow>

        <InfoRow label="Email" value={DUMMY_USER.email}>
          <EditAccountModal trigger={<FontAwesomeIcon icon={faPencil} />} />
        </InfoRow>
      </div>

      <hr />

      {/* Keamanan */}
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold text-muted">Keamanan</p>

        <InfoRow label="Kata Sandi" value="••••••••">
          <ChangePasswordModal
            trigger={
              <Button
                variant="tertiary"
                className="rounded-md shadow-sm border-0"
              >
                Ubah Kata Sandi
              </Button>
            }
          />
        </InfoRow>
      </div>
    </div>
  );
}

/* ---------- Helper components ---------- */

interface InfoRowProps {
  label: string;
  value: string;
  children: React.ReactNode;
}

function InfoRow({ label, value, children }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        <p className="text-sm text-muted">{label}</p>
        <p className="text-base font-medium text-foreground">{value}</p>
      </div>
      {children}
    </div>
  );
}

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      variant="tertiary"
      className="rounded-md shadow-sm border-0 w-9 h-9 p-0 flex items-center justify-center"
      aria-label="Edit"
    >
      {children}
    </Button>
  );
}


