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
} from "@heroui/react";

import type { Key } from "@heroui/react";
import { useState } from "react";

import DropDown from '@/components/Shared/DropDown'
import Search from './Search'
import Filter from './Filter'

export default function Filtering() {
  return (
    <div className="flex justify-between items-center p-4 ">
      <div className="flex gap-4 flex-wrap">

      <Search />
      <DropDown 
        title="Semua Kategori"
        list={['Makanan dan Minuman', 'Kebutuhan Rumah', 'Obat-obatan']}
        width="w-54"
      />

      <DropDown 
        title="Semua Status Stok"
        list={['Ada', 'Stok Rendah', 'Habis']}
        width="w-52"
      />

      <DropDown 
        title="Lokasi"
        list={['Gudang Utama', 'Rak A-01','Rak A-02','Rak B-01','Rak B-02','Rak C-01','Rak C-02']}
        width="w-48"
      />

      </div>
      <div className="self-start">
        <Filter />
      </div>
    </div>
  );
}
