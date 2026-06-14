"use client";
import {
  Autocomplete,
  SearchField,
  ListBox,
  Select,
  Header,
  Separator,
  useFilter,
  TagGroup,
  EmptyState,
  Tag,
} from "@heroui/react";

import type { Key } from "@heroui/react";
import { useState } from "react";
import { category } from './Category'
import {Icon} from "@iconify/react";


export default function Filter() {

  const {contains} = useFilter({sensitivity: "base"});

  const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);

  const onRemoveTags = (keys: Set<Key>) => {
    setSelectedKeys((prev) => prev.filter((key) => !keys.has(key)));
  };



  return (
  <Autocomplete 
    className="border rounded-md"
    placeholder="Filter"
    selectionMode="multiple"
    value={selectedKeys}
    onChange={(keys: Key | Key[] | null) => setSelectedKeys(keys as Key[])}
    aria-label="Autocomplete"
  >
    <Autocomplete.Trigger className="rounded-md">
      <span className="flex gap-1 items-center">
      <Icon icon='gravity-ui:funnel' />
      {/* Summary hasil select */}
      <Autocomplete.Value>
          {/* {({defaultChildren, isPlaceholder, state}: any) => {
            if (isPlaceholder || state.selectedItems.length === 0) {
              return defaultChildren;
            }
            const selectedItemsKeys = state.selectedItems.map((item: any) => item.key);
            const items = category.flatMap((c) => c.opsi);

            return (
              <TagGroup size="sm" onRemove={onRemoveTags}>
                <TagGroup.List>
                  {selectedItemsKeys.map((selectedItemKey: Key) => {
                    const item = items.find((s) => s === selectedItemKey);
                    if (!item) return null;
                    return (
                      <Tag key={item} id={item}>
                        {item}
                      </Tag>
                    );
                  })}
                </TagGroup.List>
              </TagGroup>
            );
          }} */}
      </Autocomplete.Value> 
      </span>

      <Autocomplete.ClearButton />
      {/* Dropdown Arrow*/}
      <Autocomplete.Indicator />
    </Autocomplete.Trigger>

    <Autocomplete.Popover className='rounded-xl'>
      <Autocomplete.Filter filter={contains}>
        <SearchField>
          <SearchField.Group className='border rounded-lg'>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder='Search...' />
          </SearchField.Group>
        </SearchField>
        <ListBox>
          {
            category.map((filter, index) => {
              const isLast = index === category.length - 1;   
              return (
              <ListBox.Section key={filter.id}>
                <Header>{filter.id}</Header>

                {filter.opsi.map((category) => (
                  <ListBox.Item
                    key={`${filter.id}-${category}`}
                    id={`${filter.id}-${category}`}
                    textValue={category}
                  >
                    {category}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}

                {
                  !isLast ? <Separator></Separator> : <></>
                }
              </ListBox.Section>
            )})
          }
        </ListBox>
      </Autocomplete.Filter>
    </Autocomplete.Popover>
  </Autocomplete>
  )
}