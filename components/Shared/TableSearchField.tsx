import { SearchField } from "@heroui/react";

interface Props{
  placeholder: string
  aria_label?: string
}

export default function TableSearchField({placeholder, aria_label}: Props){
    return(
    <SearchField name="search" aria-label={aria_label}>
      <SearchField.Group className={'rounded-md'}>
        <SearchField.SearchIcon />
        <SearchField.Input placeholder={placeholder} />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
    )
}