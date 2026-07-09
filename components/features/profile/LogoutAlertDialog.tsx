import { useLogout } from "@/hooks/profile/useLogout";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

interface LogoutAlertDialogProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export default function LogoutAlertDialog({ isOpen, setIsOpen }: LogoutAlertDialogProps) {
  const { logout, isLoading } = useLogout();
  const router = useRouter();

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      setIsOpen(false);
      router.push("/login");
    }
  };

  return (
      <AlertDialog isOpen={isOpen} onOpenChange={setIsOpen}>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px] rounded-md">
              <AlertDialog.CloseTrigger />
              
              <AlertDialog.Header>

                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Keluar dari Akun?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                <p>Anda harus memasukkan email dan kata sandi kembali untuk masuk ke aplikasi.</p>
              </AlertDialog.Body>

              <AlertDialog.Footer>
                <Button
                  variant="tertiary"
                  className="rounded"
                  onPress={() => setIsOpen(false)}
                  isDisabled={isLoading}
                >
                  Batal
                </Button>
                <Button
                  variant="danger-soft"
                  className="rounded"
                  onPress={handleLogout}
                  isDisabled={isLoading}
                >
                  {isLoading ? "Mengeluarkan..." : "Ya, Keluar"}
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
  );
}