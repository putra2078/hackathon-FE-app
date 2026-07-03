import { Button, Form, Input, Label, Modal, TextField } from "@heroui/react";

export default function ChangePasswordModal({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  return (
    <Modal>
      <Modal.Trigger>{trigger}</Modal.Trigger>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[420px] rounded-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Ubah Kata Sandi</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <Form className="flex flex-col gap-4">
                <TextField>
                  <Label>Kata Sandi Saat Ini</Label>
                  <Input
                    type="password"
                    placeholder="Masukkan kata sandi saat ini"
                    className="rounded"
                  />
                </TextField>
                <TextField>
                  <Label>Kata Sandi Baru</Label>
                  <Input
                    type="password"
                    placeholder="Minimal 8 karakter"
                    className="rounded"
                  />
                </TextField>
                <TextField>
                  <Label>Konfirmasi Kata Sandi Baru</Label>
                  <Input type="password" placeholder="Ulangi kata sandi baru" className="rounded"/>
                </TextField>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="tertiary" className="rounded">
                Batal
              </Button>
              <Button
                variant="primary"
                className="rounded bg-primary hover:bg-primary-700 border-0"
              >
                Simpan Kata Sandi
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
