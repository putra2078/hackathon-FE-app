import { Button, Form, Input, Modal, TextField, Label } from "@heroui/react";

export default function EditAccountModal({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Modal>
      <Modal.Trigger>{trigger}</Modal.Trigger>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[420px] rounded-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Informasi Akun</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <Form className="flex flex-col gap-4">
                <TextField>
                  <Label>Nama</Label>
                  <Input
                    defaultValue="nice Ma"
                    placeholder="Nama lengkap"
                    className="rounded"
                  />
                </TextField>
                <TextField>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    defaultValue="budi@gmail.com"
                    placeholder="nama@email.com"
                    className="rounded"
                  />
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
                Simpan Perubahan
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}