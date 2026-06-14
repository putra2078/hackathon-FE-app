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
  Label
} from "@heroui/react";

import type { Key } from "@heroui/react";
import { useState } from "react";
import { filterData } from './Category'
import { Icon } from "@iconify/react";


export default function Filter() {
  const { contains } = useFilter({ sensitivity: "base" });

  const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);

  const onRemoveTags = (keys: Set<Key>) => {
    setSelectedKeys((prev) => prev.filter((key) => !keys.has(key)));
  };

  return (
    <Autocomplete
      aria-label="Filter options"
      className="border rounded-md"
      placeholder="Filter"
      selectionMode="multiple"
      value={selectedKeys}
      onChange={(keys: Key | Key[] | null) => setSelectedKeys(keys as Key[])}
    >
      <Autocomplete.Trigger className="rounded-md" >
        <span className="flex gap-1 items-center">
          <Icon icon='gravity-ui:funnel' />
          <Autocomplete.Value>
            {({ defaultChildren, isPlaceholder, state }) => {
              console.log(state.selectedItems)
              if (isPlaceholder || state.selectedItems.length === 0) {
                return defaultChildren;
              }
              const selectedItemsKeys = state.selectedItems.map((item) => item.key);
              return (
                <TagGroup aria-label="Selected filters" size="sm" onRemove={onRemoveTags}>
                  <TagGroup.List>
                    {selectedItemsKeys.map((selectedItemKey) => {
                      const keyStr = String(selectedItemKey);
                      const dashIndex = keyStr.indexOf("-");
                      const filterId = keyStr.slice(0, dashIndex);
                      const option = keyStr.slice(dashIndex + 1);

                      const section = filterData.find((s) => s.id === filterId);
                      if (!section || !section.opsi.includes(option)) return null;

                      return (
                        <Tag key={selectedItemKey} id={keyStr}>
                          {option}
                        </Tag>
                      );
                    })}
                  </TagGroup.List>
                </TagGroup>
              );
            }}
          </Autocomplete.Value>
        </span>
        <Autocomplete.Indicator />
      </Autocomplete.Trigger>

      <Autocomplete.Popover className='rounded-xl'>
        <Autocomplete.Filter filter={contains}>
          <SearchField aria-label="Filter categories">
            <SearchField.Group className='border rounded-lg'>
              <SearchField.SearchIcon />
              <SearchField.Input placeholder='Search...' />
            </SearchField.Group>
          </SearchField>
          <ListBox aria-label="Filter categories" renderEmptyState={() => <EmptyState>Hasil tak ditemukan</EmptyState>}>
            {filterData.map((filter, index) => {
              const isLast = index === filterData.length - 1;
              return (
                <ListBox.Section key={filter.id}>
                  <Header>{filter.id}</Header>

                  {filter.opsi.map((category) => (
                    <ListBox.Item
                      key={`${filter.id}-${category}`}
                      id={`${filter.id}-${category}`}
                      textValue={category}
                      className="rounded-md"
                    >
                      <Label>{category}</Label>
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}

                  {
                    !isLast ? <Separator></Separator> : <></>
                  }
                </ListBox.Section>
              )
            })
            }
          </ListBox>
        </Autocomplete.Filter>
      </Autocomplete.Popover>
    
    </Autocomplete>
  )
}
