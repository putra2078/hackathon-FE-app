import {
  faEllipsis,
  faEye,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dropdown, Label } from "@heroui/react";
import { useRouter } from "next/navigation";

interface Props{
    id: string
}

export default function ActionProductButton({id}: Props) {
  const router = useRouter();
  return (
    <div className="flex items-center gap-2">
      <Button
        aria-label="edit-data"
        isIconOnly
        variant="outline"
        className={"rounded-md"}
        onPress={() => router.push(`/produk/edit/${id}`)}
      >
        <FontAwesomeIcon icon={faPencil} />
      </Button>
      <Dropdown>
        <Button
          aria-label="more-action"
          isIconOnly
          variant="outline"
          className={"rounded-md"}
        >
          <FontAwesomeIcon icon={faEllipsis} />
        </Button>
        <Dropdown.Popover className="rounded-md min-w-0 w-42">
          <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
            <Dropdown.Item
              id="view-product"
              textValue="Lihat produk"
              className="rounded"
            >
              <FontAwesomeIcon icon={faEye} />

              <Label>Lihat produk</Label>
            </Dropdown.Item>
            <Dropdown.Item
              id="delete-product"
              textValue="Hapus produk"
              variant="danger"
              className="rounded"
            >
              <FontAwesomeIcon icon={faTrash} className="text-danger" />
              <Label>Hapus produk</Label>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
}
