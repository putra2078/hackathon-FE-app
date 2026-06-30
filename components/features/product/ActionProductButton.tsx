"use client";
import {
  ErrorAlert,
  LoadingAlert,
  SuccessAlert,
} from "@/components/Shared/CustomAlert";
import { useDeleteProduct } from "@/hooks/product/useDeleteProduct";
import {
  faEllipsis,
  faEye,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlertDialog, Button, Dropdown, Label } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  id: string;
}

export default function ActionProductButton({ id }: Props) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const {
    clearError,
    clearSuccess,
    deleteProduct,
    error,
    isLoading,
    isSuccess,
  } = useDeleteProduct();

  const handleAction = () => {
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  };

  const handleDelete = async () => {
    await deleteProduct(id);

    if (isSuccess) {
      router.refresh();
    }

    setIsOpen(false);
  };
  return (
    <>
      {isLoading && <LoadingAlert title="Sedang menghapus produk..." />}
      {error && (
        <ErrorAlert
          desc={error}
          clearAlert={clearError}
          title="Gagal Menghapus Produk"
        />
      )}
      {isSuccess && (
        <SuccessAlert
          title="Berhasil Menghapus Produk"
          clearAlert={clearSuccess}
        />
      )}
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
            <Dropdown.Menu>
              <Dropdown.Item
                id="view-product"
                textValue="Lihat produk"
                className="rounded"
                onAction={() => alert("nice nice")}
              >
                <FontAwesomeIcon icon={faEye} />

                <Label>Lihat produk</Label>
              </Dropdown.Item>
              <Dropdown.Item
                id="delete-product"
                textValue="Hapus produk"
                variant="danger"
                className="rounded"
                onAction={handleAction}
              >
                <FontAwesomeIcon icon={faTrash} className="text-danger" />
                <Label>Hapus produk</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>

        <AlertDialog isOpen={isOpen} onOpenChange={setIsOpen}>
          <AlertDialog.Backdrop>
            <AlertDialog.Container>
              <AlertDialog.Dialog className="sm:max-w-[400px] rounded-md">
                <AlertDialog.CloseTrigger />
                <AlertDialog.Header>
                  <AlertDialog.Icon status="danger" />
                  <AlertDialog.Heading>
                    Apakah anda yakin ingin menghapus produk ini?
                  </AlertDialog.Heading>
                </AlertDialog.Header>
                <AlertDialog.Body>
                  <p>Produk ini akan terhapus permanen</p>
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button
                    variant="tertiary"
                    className="rounded"
                    onPress={() => setIsOpen(false)}
                  >
                    Batal
                  </Button>
                  <Button
                    variant="danger-soft"
                    className="rounded"
                    onPress={handleDelete}
                  >
                    Ya, Hapus Produk
                  </Button>
                </AlertDialog.Footer>
              </AlertDialog.Dialog>
            </AlertDialog.Container>
          </AlertDialog.Backdrop>
        </AlertDialog>
      </div>
    </>
  );
}
