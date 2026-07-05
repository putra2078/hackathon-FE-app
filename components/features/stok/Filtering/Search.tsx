import { SearchField, ListBox} from "@heroui/react";

export default function Search() {
  return (
    <SearchField name="search" aria-label='Search Field' className="rounded-md">
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