import { SearchField } from "@heroui/react";

export default function SeacrhProduct(){
    return(
    <SearchField name="search">
      <SearchField.Group className={'rounded-md'}>
        <SearchField.SearchIcon />
        <SearchField.Input placeholder="Cari Produk..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
    )
}