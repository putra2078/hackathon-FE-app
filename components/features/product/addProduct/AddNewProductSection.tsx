"use client";
import { ErrorAlert, SuccessAlert } from "@/components/Shared/CustomAlert";
import { createList } from "@/components/Shared/SelectList";
import { useAddProduct } from "@/hooks/useAddProduct";
import { AlertDialog, Button, Form } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BasicInfoFields from "./BasicInfoFields";
import PriceFields from "./PriceFields";
import DescriptionField from "./DescriptionField";

const PRODUCT_CATEGORY_LIST = createList([
  { key: "aksesoris", textValue: "Aksesoris" },
  { key: "elektronik", textValue: "Elektronik" },
]);

const IDR_FORMAT_OPTIONS: Intl.NumberFormatOptions = {
  currency: "IDR",
  currencyDisplay: "narrowSymbol",
  style: "currency",
  minimumFractionDigits: 0,
};

const INITIAL_FORM_STATE = {
  name: "",
  code: "",
  category: "",
  stock: 0,
  description: "",
};

export default function AddNewProductSection() {
  const { addProduct, error, isLoading, clearError, isSuccess, clearSuccess } =
    useAddProduct();
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);


  const updateField = (key) => (value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      buyPrice,
      sellPrice,
    };

    const success = await addProduct(payload);

    if (success) {
      setForm(INITIAL_FORM_STATE);
      setBuyPrice(0);
      setSellPrice(0);
    }
  };

  return (
    <div>
      {error && (
        <ErrorAlert
          desc={error}
          clearError={clearError}
          title="Gagal Menambahkan Produk"
        />
      )}
      {isSuccess && (
        <SuccessAlert
          title="Berhasil menambahkan produk"
          clear={clearSuccess}
        />
      )}

      <Form
        className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow border"
        onSubmit={handleSubmit}
      >
        <BasicInfoFields
          PRODUCT_CATEGORY_LIST={PRODUCT_CATEGORY_LIST}
          form={form}
          updateField={updateField}
        />
        <hr />
        <PriceFields
          IDR_FORMAT_OPTIONS={IDR_FORMAT_OPTIONS}
          buyPrice={buyPrice}
          form={form}
          sellPrice={sellPrice}
          setBuyPrice={setBuyPrice}
          setSellPrice={setSellPrice}
          updateField={updateField}
        />
        <hr />
        <div className="flex flex-col gap-4">
          <DescriptionField form={form} updateField={updateField} />
          <hr />
          <div className="flex gap-4 items-center w-full justify-end">
            {/* <Button
              variant="tertiary"
              className="rounded-md shadow-sm border-0"
              onPress={() => router.push("/produk")}
              isDisabled={isLoading}
            >
              Batal
            </Button> */}
            <CancelButton />
            <Button
              variant="primary"
              className="rounded-md shadow-sm border-0 bg-primary hover:bg-primary-700"
              type="submit"
              isDisabled={isLoading}
            >
              {isLoading ? "Menambahkan..." : "Tambahkan Produk"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

function CancelButton() {
    const router = useRouter();

  return (
    <AlertDialog>
      <Button variant="tertiary" className="rounded-md shadow-sm border-0">
        Batal
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] rounded-md">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="warning" />
              <AlertDialog.Heading>
                Batalkan penambahan produk?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                Data yang sudah Anda isi belum disimpan dan akan hilang kalau
                Anda keluar sekarang.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" className="rounded">
                Lanjutkan Mengisi
              </Button>
              <Button onPress={() => router.push('/produk')} variant="danger-soft" className="rounded">
                Ya, Batalkan
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
