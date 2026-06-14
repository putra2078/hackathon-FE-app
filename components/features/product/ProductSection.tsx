"use client";
import { Button } from "@heroui/react";
import { useMemo, useState } from "react";
import SeacrhProduct from "./SearchProduct";
import SelectCategory from "./SelectCategory";
import SelectStatus from "./SelectStatus";
import ProductTable from "./ProductTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const columns = [
  { id: "productName", name: "Produk", minWidth: 220 },
  { id: "category", name: "Kategori", minWidth: 160},
  { id: "stock", name: "Stok", minWidth: 100 },
  { id: "buyPrice", name: "Harga Beli", minWidth: 140 },
  { id: "sellPrice", name: "Harga Jual", minWidth: 140},
  { id: "status", name: "Status", minWidth: 110 },
  { id: "action", name: "Aksi", minWidth: 160 },
];

const products = [{
  "productName": "Sustainable Wooden Toys",
  "category": "Toys",
  "stock": 1,
  "buyPrice": 29.99,
  "sellPrice": 4.99,
  "status": "aktif",
  "sku": "WN7040"
}, {
  "productName": "Wooden Blocks",
  "category": "Toys",
  "stock": 2,
  "buyPrice": 24.99,
  "sellPrice": 19.99,
  "status": "Tidak Aktif",
  "sku": "AA2814"
}, {
  "productName": "Sooji (Semolina)",
  "category": "Food - Baking",
  "stock": 3,
  "buyPrice": 1.99,
  "sellPrice": 9.99,
  "status": "aktif",
  "sku": "AC5659"
}, {
  "productName": "Vegetable and Cheese Quesadillas",
  "category": "Food - Frozen",
  "stock": 4,
  "buyPrice": 6.99,
  "sellPrice": 89.99,
  "status": "aktif",
  "sku": "SA5308"
}, {
  "productName": "Plant-Based Protein Bars",
  "category": "Health",
  "stock": 5,
  "buyPrice": 19.99,
  "sellPrice": 19.99,
  "status": "aktif",
  "sku": "NH2177"
}, {
  "productName": "Smart Wi-Fi Light Bulbs",
  "category": "Smart Home",
  "stock": 6,
  "buyPrice": 19.99,
  "sellPrice": 12.99,
  "status": "aktif",
  "sku": "NH7849"
}, {
  "productName": "Applewood Smoked Bacon",
  "category": "Food - Meat",
  "stock": 7,
  "buyPrice": 6.99,
  "sellPrice": 19.99,
  "status": "tidak aktif",
  "sku": "NZ9485"
}, {
  "productName": "Balsamic Glaze",
  "category": "Food - Condiments",
  "stock": 8,
  "buyPrice": 4.79,
  "sellPrice": 34.99,
  "status": "aktif",
  "sku": "AV9115"
}, {
  "productName": "Reversible Swimming Pool Lounger",
  "category": "Outdoor",
  "stock": 9,
  "buyPrice": 34.99,
  "sellPrice": 4.99,
  "status": "aktif",
  "sku": "SQ7563"
}, {
  "productName": "Ice Cream Scoop",
  "category": "Kitchen",
  "stock": 10,
  "buyPrice": 12.99,
  "sellPrice": 19.99,
  "status": "tidak aktif",
  "sku": "KE7908"
}, {
  "productName": "Collapsible Storage Crates",
  "category": "Home",
  "stock": 11,
  "buyPrice": 18.99,
  "sellPrice": 12.99,
  "status": "aktif",
  "sku": "NZ8627"
}, {
  "productName": "Vegetable Spring Rolls",
  "category": "Food - Frozen Foods",
  "stock": 12,
  "buyPrice": 6.49,
  "sellPrice": 59.99,
  "status": "aktif",
  "sku": "LH3189"
}, {
  "productName": "Stainless Steel Travel Mug",
  "category": "Kitchen",
  "stock": 13,
  "buyPrice": 19.99,
  "sellPrice": 2.19,
  "status": "aktif",
  "sku": "IB3260"
}, {
  "productName": "Organic Green Apples",
  "category": "Food - Produce",
  "stock": 14,
  "buyPrice": 1.49,
  "sellPrice": 39.99,
  "status": "tidak aktif",
  "sku": "CX1675"
}, {
  "productName": "Baby Monitor",
  "category": "Baby",
  "stock": 15,
  "buyPrice": 79.99,
  "sellPrice": 22.99,
  "status": "aktif",
  "sku": "WN2726"
}, {
  "productName": "Wireless Charging Station",
  "category": "Electronics",
  "stock": 16,
  "buyPrice": 39.99,
  "sellPrice": 34.99,
  "status": "aktif",
  "sku": "LH6171"
}, {
  "productName": "Aged White Cheddar Popcorn",
  "category": "Food - Snacks",
  "stock": 17,
  "buyPrice": 2.99,
  "sellPrice": 0.79,
  "status": "tidak aktif",
  "sku": "AM6142"
}, {
  "productName": "Garlic & Herb Goat Cheese",
  "category": "Food - Dairy",
  "stock": 18,
  "buyPrice": 5.49,
  "sellPrice": 24.99,
  "status": "aktif",
  "sku": "ET5125"
}, {
  "productName": "Crispy Onion Rings",
  "category": "Food - Frozen Foods",
  "stock": 19,
  "buyPrice": 4.29,
  "sellPrice": 34.99,
  "status": "aktif",
  "sku": "AC1049"
}, {
  "productName": "Travel Laundry Bag",
  "category": "Travel",
  "stock": 20,
  "buyPrice": 9.99,
  "sellPrice": 19.99,
  "status": "aktif",
  "sku": "SK8026"
}, {
  "productName": "Magnetic Chess Set",
  "category": "Toys",
  "stock": 21,
  "buyPrice": 19.99,
  "sellPrice": 15.99,
  "status": "aktif",
  "sku": "SA2145"
}, {
  "productName": "Caramelized Onion Dip",
  "category": "Food - Dairy",
  "stock": 22,
  "buyPrice": 3.99,
  "sellPrice": 4.99,
  "status": "aktif",
  "sku": "AA4958"
}, {
  "productName": "Mediterranean Couscous",
  "category": "Food - Grains",
  "stock": 23,
  "buyPrice": 3.59,
  "sellPrice": 3.99,
  "status": "aktif",
  "sku": "KL6096"
}, {
  "productName": "Chic Jumpsuit",
  "category": "Clothing - Jumpsuits",
  "stock": 24,
  "buyPrice": 89.99,
  "sellPrice": 29.99,
  "status": "aktif",
  "sku": "ET6157"
}, {
  "productName": "Interchangeable Watch Bands",
  "category": "Accessories",
  "stock": 25,
  "buyPrice": 24.99,
  "sellPrice": 39.99,
  "status": "aktif",
  "sku": "DL8435"
}, {
  "productName": "Crew Neck Sweater",
  "category": "Clothing - Sweaters",
  "stock": 26,
  "buyPrice": 39.99,
  "sellPrice": 24.99,
  "status": "aktif",
  "sku": "BA7889"
}, {
  "productName": "Spinach Artichoke Dip",
  "category": "Food - Snacks",
  "stock": 27,
  "buyPrice": 4.99,
  "sellPrice": 12.99,
  "status": "aktif",
  "sku": "BA2801"
}, {
  "productName": "Voice-Controlled Speaker",
  "category": "Audio",
  "stock": 28,
  "buyPrice": 99.99,
  "sellPrice": 3.49,
  "status": "aktif",
  "sku": "UA6879"
}]


const ROW_PER_PAGE = 5;

export default function ProductSection() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / ROW_PER_PAGE);
  const pages = () => {
    if (page === totalPages) {
      return [page - 2, page - 1, page];
    } else if (page > 1) {
      return [page - 1, page, page + 1];
    }
    return [page, page + 1, page + 2];
  };

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * ROW_PER_PAGE;
    return products.slice(start, start + ROW_PER_PAGE);
  }, [page]);

  const start = (page - 1) * ROW_PER_PAGE + 1
  const end = Math.min(page * ROW_PER_PAGE, products.length);

  return (
    <div className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow border">
      <div className="flex flex-col bg-surface-tertiary border border-surface-border rounded-xl overflow-hidden">
      <div id="filter" className="flex gap-4 items-center p-6 w-full">
        <SeacrhProduct/>
        <SelectCategory/>
        <SelectStatus/>
        <div className="ml-auto">
          <Button variant="outline" className={'rounded-md shadow-sm border-0 bg-white hover:bg-gray-50'}><FontAwesomeIcon icon={faFilter}/> Filter</Button>
        </div>
      </div>
      <div id="table">
        <ProductTable columns={columns} currentPage={page} end={end} onPageChange={setPage} pages={pages} products={paginatedItems} start={start} totalPages={totalPages}/>
      </div>
      </div>
    </div>
  );
}
