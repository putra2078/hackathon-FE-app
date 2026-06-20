import { SearchField } from "@heroui/react";

interface Props{
  placeholder: string
}

export default function TableSearchField({placeholder}: Props){
    return(
    <SearchField name="search">
      <SearchField.Group className={'rounded-md'}>
        <SearchField.SearchIcon />
        <SearchField.Input placeholder={placeholder} />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
    )
}