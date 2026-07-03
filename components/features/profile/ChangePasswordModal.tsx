import { useUpdateProfile } from "@/hooks/profile/useUpdateProfile";
import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  TextField,
  useOverlayState,
} from "@heroui/react";
import { useEffect, useState } from "react";

export default function ChangePasswordModal({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  const state = useOverlayState();
  const { updateProfile, isLoading, error, clearError } = useUpdateProfile();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (state.isOpen) {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setFormError(null);
      clearError();
    }
  }, [state.isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (newPassword.length < 8) {
      setFormError("Kata sandi baru minimal 8 karakter");
      return;
    }
    if (newPassword !== confirmPassword) {
      setFormError("Konfirmasi kata sandi tidak cocok");
      return;
    }

    const success = await updateProfile({ password: newPassword });
    if (success) {
      state.close();
    }
  };

    return (
    <Modal state={state}>
      <Modal.Trigger>{trigger}</Modal.Trigger>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[420px] rounded-md">
            <Modal.CloseTrigger />
            <Form onSubmit={handleSubmit} className="flex flex-col">
              <Modal.Header>
                <Modal.Heading>Ubah Kata Sandi</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="flex flex-col gap-4">
                {(formError || error) && (
                  <p className="text-sm text-danger">{formError ?? error}</p>
                )}
                <TextField>
                  <Label>Kata Sandi Saat Ini</Label>
                  <Input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Masukkan kata sandi saat ini"
                  />
                </TextField>
                <TextField>
                  <Label>Kata Sandi Baru</Label>
                  <Input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Minimal 8 karakter"
                  />
                </TextField>
                <TextField>
                  <Label>Konfirmasi Kata Sandi Baru</Label>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Ulangi kata sandi baru"
                  />
                </TextField>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="button"
                  slot="close"
                  variant="tertiary"
                  className="rounded"
                  isDisabled={isLoading}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  className="rounded bg-primary hover:bg-primary-700 border-0"
                  isDisabled={isLoading}
                >
                  {isLoading ? "Menyimpan..." : "Simpan Kata Sandi"}
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
