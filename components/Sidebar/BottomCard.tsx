import { userStorage } from "@/lib/storage";
import {
    faDoorOpen,
  faEllipsisVertical,
  faEye,
  faShop,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dropdown, Label } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BottomCard() {
  const userData = userStorage.get();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()

  return (
      <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button
          variant="primary"
          className={` text-black rounded-xl shadow-sm border-0 bg-primary-100 hover:bg-primary-200 px-4 py-8 flex gap-2 items-center w-full`}
          onPress={() => setIsOpen(true)}
        >
          <div>
            <FontAwesomeIcon icon={faShop} className="text-primary text-3xl" />
          </div>
          <div className="text-start">
            <h3 className="text-sm font-semibold">
              {userData?.name || "Anomali"}
            </h3>
            <p className="text-xs">Pemilik</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
          </div>
        </Button>
        <Dropdown.Popover className="rounded-xl min-w-0 w-[200px]" placement="left">
          <Dropdown.Menu >
            <Dropdown.Item
              id="view-product"
              textValue="Lihat Detail"
              className="rounded-md"
              onAction={() => router.push('/profil')}
            >
              <FontAwesomeIcon icon={faUser} />

              <Label>Lihat Profil</Label>
            </Dropdown.Item>
            <Dropdown.Item
              id="delete-product"
              textValue="Hapus Produk"
              variant="danger"
              className="rounded-md"
              // onAction={handleActionAlert}
            >
              <FontAwesomeIcon icon={faDoorOpen} className="text-danger" />
              <Label>Keluar (Logout)</Label>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
  );
}
