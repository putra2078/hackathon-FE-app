import { SearchField, ListBox} from "@heroui/react";

export default function Search() {
  return (
<<<<<<< HEAD
    <SearchField name="search" aria-label='Search Field' className="border rounded-md">
=======
    <SearchField name="search" className="border rounded-md">
>>>>>>> 181d8b8 (add: search field and filter)
      <SearchField.Group className="w-72 rounded-md">
        <SearchField.SearchIcon />
        <SearchField.Input
          className="w-[280px]"
          placeholder="Cari Barang..."
        />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  )
}