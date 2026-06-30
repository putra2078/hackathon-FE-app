import { TextArea } from "@heroui/react";

export default function DescriptionField({ form, updateField }) {
  return (
    <>
      <h2 className="text-xl font-semibold">3. Deskripsi</h2>
      <div className="flex gap-4 items-center">
        <TextArea
          aria-label="Deskripsi Produk"
          id="description"
          placeholder="Masukkan deskripsi tentang produk..."
          rows={6}
          style={{ resize: "vertical" }}
          className="w-full"
          name="description"
          value={form.description}
          onChange={(e) => updateField("description")(e.target.value)}
        />
      </div>
    </>
  );
}
