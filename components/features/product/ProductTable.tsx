"use client";
import { Pagination, Table } from "@heroui/react";
import { useMemo, useState } from "react";

const columns = [
  { id: "sku", name: "SKU" },
  { id: "name", name: "Nama" },
  { id: "category", name: "Kategori" },
  { id: "buyPrice", name: "Harga Beli" },
  { id: "sellPrice", name: "Harga Jual" },
  { id: "stock", name: "Stok" },
  { id: "status", name: "Status" },
  { id: "action", name: "Aksi" },
];

const products = [
  {
    sku: 1,
    name: "Ceramic Knife Set",
    category: "Kitchen",
    buyPrice: 39.99,
    sellPrice: 39.99,
    stock: 1,
    status: "cukup",
  },
  {
    sku: 2,
    name: "Mediterranean Olives",
    category: "Food - Condiments",
    buyPrice: 6.49,
    sellPrice: 5.49,
    stock: 2,
    status: "cukup",
  },
  {
    sku: 3,
    name: "Fruit & Nut Trail Mix",
    category: "Food - Snacks",
    buyPrice: 4.99,
    sellPrice: 29.99,
    stock: 3,
    status: "rendah",
  },
  {
    sku: 4,
    name: "Cordless Electric Screwdriver",
    category: "Tools",
    buyPrice: 39.99,
    sellPrice: 5.49,
    stock: 4,
    status: "rendah",
  },
  {
    sku: 5,
    name: "Camping Tarp",
    category: "Outdoor",
    buyPrice: 32.99,
    sellPrice: 1.99,
    stock: 5,
    status: "rendah",
  },
  {
    sku: 6,
    name: "Caraway Rye Bread",
    category: "Food - Bakery",
    buyPrice: 4.79,
    sellPrice: 9.99,
    stock: 6,
    status: "rendah",
  },
  {
    sku: 7,
    name: "Fitness Resistance Bands Set",
    category: "Fitness",
    buyPrice: 34.99,
    sellPrice: 5.99,
    stock: 7,
    status: "rendah",
  },
  {
    sku: 8,
    name: "Set of Measuring Spoons",
    category: "Kitchen",
    buyPrice: 12.99,
    sellPrice: 3.99,
    stock: 8,
    status: "rendah",
  },
  {
    sku: 9,
    name: "Chickpea Pancakes",
    category: "Food - Frozen",
    buyPrice: 4.99,
    sellPrice: 4.59,
    stock: 9,
    status: "rendah",
  },
  {
    sku: 10,
    name: "Roasted Chickpeas",
    category: "Food - Snacks",
    buyPrice: 2.99,
    sellPrice: 19.99,
    stock: 10,
    status: "cukup",
  },
  {
    sku: 11,
    name: "Organic Honeycrisp Apples",
    category: "Food - Fruits",
    buyPrice: 1.99,
    sellPrice: 8.99,
    stock: 11,
    status: "rendah",
  },
  {
    sku: 12,
    name: "Ground Cinnamon",
    category: "Food - Spices",
    buyPrice: 1.99,
    sellPrice: 5.99,
    stock: 12,
    status: "rendah",
  },
  {
    sku: 13,
    name: "Antique Style Clock",
    category: "Home",
    buyPrice: 39.99,
    sellPrice: 2.99,
    stock: 13,
    status: "cukup",
  },
  {
    sku: 14,
    name: "Plaid Flannel Shirt",
    category: "Clothing - Tops",
    buyPrice: 29.99,
    sellPrice: 4.99,
    stock: 14,
    status: "rendah",
  },
  {
    sku: 15,
    name: "Italian Herbal Seasoning",
    category: "Food - Spices",
    buyPrice: 1.99,
    sellPrice: 34.99,
    stock: 15,
    status: "rendah",
  },
  {
    sku: 16,
    name: "Air Fryer Oven",
    category: "Kitchen",
    buyPrice: 149.99,
    sellPrice: 2.99,
    stock: 16,
    status: "rendah",
  },
  {
    sku: 17,
    name: "Ice Pack",
    category: "Health",
    buyPrice: 8.99,
    sellPrice: 25.99,
    stock: 17,
    status: "rendah",
  },
  {
    sku: 18,
    name: "Multifunctional Pocket Tool",
    category: "Tools",
    buyPrice: 19.99,
    sellPrice: 3.29,
    stock: 18,
    status: "rendah",
  },
  {
    sku: 19,
    name: "Orange Ginger Vinaigrette",
    category: "Food - Condiments",
    buyPrice: 3.99,
    sellPrice: 39.99,
    stock: 19,
    status: "rendah",
  },
  {
    sku: 20,
    name: "Reusable Coffee Filter",
    category: "Kitchen",
    buyPrice: 10.99,
    sellPrice: 2.5,
    stock: 20,
    status: "rendah",
  },
  {
    sku: 21,
    name: "Frozen Hash Browns",
    category: "Food - Frozen Foods",
    buyPrice: 2.99,
    sellPrice: 9.99,
    stock: 21,
    status: "cukup",
  },
  {
    sku: 22,
    name: "Magnetic Puzzle Board",
    category: "Toys",
    buyPrice: 24.99,
    sellPrice: 69.99,
    stock: 22,
    status: "cukup",
  },
  {
    sku: 23,
    name: "Tandoori Chicken Skewers",
    category: "Food - Meat",
    buyPrice: 7.99,
    sellPrice: 64.99,
    stock: 23,
    status: "cukup",
  },
  {
    sku: 24,
    name: "Smoky BBQ Jackfruit",
    category: "Food - Grocery",
    buyPrice: 4.99,
    sellPrice: 29.99,
    stock: 24,
    status: "rendah",
  },
  {
    sku: 25,
    name: "Digital Food Thermometer",
    category: "Kitchen",
    buyPrice: 19.99,
    sellPrice: 39.99,
    stock: 25,
    status: "cukup",
  },
  {
    sku: 26,
    name: "Almond Flour Tortillas",
    category: "Food - Baking & Cooking",
    buyPrice: 4.99,
    sellPrice: 199.99,
    stock: 26,
    status: "cukup",
  },
  {
    sku: 27,
    name: "Sliced Strawberries",
    category: "Food - Fruits",
    buyPrice: 4.99,
    sellPrice: 34.99,
    stock: 27,
    status: "cukup",
  },
  {
    sku: 28,
    name: "Leek and Potato Soup",
    category: "Food - Soups",
    buyPrice: 3.29,
    sellPrice: 54.99,
    stock: 28,
    status: "rendah",
  },
  {
    sku: 29,
    name: "Savory Snack Mix",
    category: "Food - Snacks",
    buyPrice: 4.49,
    sellPrice: 5.99,
    stock: 29,
    status: "cukup",
  },
  {
    sku: 30,
    name: "Creamy Garlic Mashed Potatoes",
    category: "Food - Sides",
    buyPrice: 3.99,
    sellPrice: 6.49,
    stock: 30,
    status: "cukup",
  },
  {
    sku: 31,
    name: "Trail Mix (Deluxe)",
    category: "Food - Snacks",
    buyPrice: 4.59,
    sellPrice: 2.49,
    stock: 31,
    status: "rendah",
  },
  {
    sku: 32,
    name: "Red Lentil Pasta",
    category: "Food - Pasta",
    buyPrice: 3.99,
    sellPrice: 4.99,
    stock: 32,
    status: "cukup",
  },
  {
    sku: 33,
    name: "Blackberry Compote",
    category: "Food - Condiments",
    buyPrice: 5.29,
    sellPrice: 3.99,
    stock: 33,
    status: "cukup",
  },
  {
    sku: 34,
    name: "Outdoor Inflatable Pool",
    category: "Outdoor",
    buyPrice: 149.99,
    sellPrice: 109.99,
    stock: 34,
    status: "rendah",
  },
  {
    sku: 35,
    name: "Chili Beans in Sauce",
    category: "Food - Canned Goods",
    buyPrice: 1.79,
    sellPrice: 29.99,
    stock: 35,
    status: "rendah",
  },
  {
    sku: 36,
    name: "Elderberry Syrup",
    category: "Food - Supplements",
    buyPrice: 11.99,
    sellPrice: 32.99,
    stock: 36,
    status: "cukup",
  },
  {
    sku: 37,
    name: "Travel Jewelry Case",
    category: "Accessories",
    buyPrice: 24.99,
    sellPrice: 3.99,
    stock: 37,
    status: "cukup",
  },
  {
    sku: 38,
    name: "Smart Plug",
    category: "Smart Home",
    buyPrice: 19.99,
    sellPrice: 3.29,
    stock: 38,
    status: "cukup",
  },
  {
    sku: 39,
    name: "Peanut Butter Protein Balls",
    category: "Food - Snacks",
    buyPrice: 5.29,
    sellPrice: 5.49,
    stock: 39,
    status: "cukup",
  },
  {
    sku: 40,
    name: "Quinoa & Black Bean Salad",
    category: "Food - Salads",
    buyPrice: 7.49,
    sellPrice: 5.99,
    stock: 40,
    status: "cukup",
  },
  {
    sku: 41,
    name: "Pet Bed",
    category: "Pets",
    buyPrice: 39.99,
    sellPrice: 34.99,
    stock: 41,
    status: "cukup",
  },
  {
    sku: 42,
    name: "Adjustable Resistance Bands",
    category: "Fitness",
    buyPrice: 39.99,
    sellPrice: 69.99,
    stock: 42,
    status: "rendah",
  },
  {
    sku: 43,
    name: "Dried Fruit Medley",
    category: "Food - Snacks",
    buyPrice: 5.49,
    sellPrice: 1.89,
    stock: 43,
    status: "rendah",
  },
  {
    sku: 44,
    name: "Pumpkin Spice Muffins",
    category: "Food - Bakery",
    buyPrice: 3.99,
    sellPrice: 1.99,
    stock: 44,
    status: "rendah",
  },
  {
    sku: 45,
    name: "Ribbed Knit Dress",
    category: "Clothing - Dresses",
    buyPrice: 59.99,
    sellPrice: 5.99,
    stock: 45,
    status: "rendah",
  },
  {
    sku: 46,
    name: "Herb Seasoned Croutons",
    category: "Food - Salad Toppings",
    buyPrice: 2.99,
    sellPrice: 59.99,
    stock: 46,
    status: "rendah",
  },
  {
    sku: 47,
    name: "Spinach and Cheese Stuffed Shells",
    category: "Food - Frozen Meals",
    buyPrice: 5.99,
    sellPrice: 9.99,
    stock: 47,
    status: "cukup",
  },
  {
    sku: 48,
    name: "Classic Caesar Salad Kit",
    category: "Food - Salads",
    buyPrice: 4.99,
    sellPrice: 22.99,
    stock: 48,
    status: "cukup",
  },
  {
    sku: 49,
    name: "Cinnamon Sugar Tortilla Chips",
    category: "Food - Snacks",
    buyPrice: 3.29,
    sellPrice: 3.29,
    stock: 49,
    status: "rendah",
  },
  {
    sku: 50,
    name: "Pet Tracking Collar",
    category: "Pets",
    buyPrice: 59.99,
    sellPrice: 29.99,
    stock: 50,
    status: "rendah",
  },
];

const ROW_PER_PAGE = 5;

export default function ProductTable() {
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

  const end = Math.min(page * ROW_PER_PAGE, products.length);

  return (
    <div className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow">
      <div id="searchProduct"></div>
      <div>
        <Table className="rounded-md p-0 border border-surface-border ">
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="table-fixed w-full">
              <Table.Header className={'bg-surface-secondary border border-surface-border'}>
                {columns.map((column, i) => {
                  return (
                    <Table.Column key={i} isRowHeader={column.id === "sku"} className={'font-semibold text-black text-sm min-w-[100px] w-[100px] max-w-[100px]'}>
                      {column.name}
                    </Table.Column>
                  );
                })}
              </Table.Header>
              <Table.Body>
                {paginatedItems.map((product, i) => {
                  return (
                    <Table.Row key={i} className={'*:bg-surface-tertiary hover:*:bg-surface-secondary *:border-y *:border-surface-border '}>
                      <Table.Cell className="rounded-none">{product.sku}</Table.Cell>
                      <Table.Cell >
                        <div className="flex items-center gap-2 max-w-[140px]">
                          <div className="flex justify-center items-center w-6 h-6 bg-primary rounded-md shrink-0">
                            h
                          </div>
                          <p className="min-w-0 truncate">{product.name}</p>
                        </div>
                      </Table.Cell>
                      <Table.Cell  className={'truncate'}>{product.category}</Table.Cell>
                      <Table.Cell className={'truncate'}>{product.buyPrice}</Table.Cell>
                      <Table.Cell className={'truncate'}>{product.sellPrice}</Table.Cell>
                      <Table.Cell className={'truncate'}>{product.stock}</Table.Cell>
                      <Table.Cell className={'truncate'}>{product.status}</Table.Cell>
                      <Table.Cell className="rounded-none truncate">edit</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
          <Table.Footer className="bg-surface-secondary border border-surface-border">
            <Pagination size="sm">
              <Pagination.Summary>
                Manampilkan {end} dari {products.length} produk
              </Pagination.Summary>
              <Pagination.Content>
                <Pagination.Item>
                  <Pagination.Previous
                    isDisabled={page === 1}
                    onPress={() => setPage((p) => Math.max(1, p - 1))}
                    className="bg-white rounded-md border border-slate-300"
                  >
                    <Pagination.PreviousIcon />
                  </Pagination.Previous>
                </Pagination.Item>
                {pages().map((p) => (
                  <Pagination.Item key={p}>
                    <Pagination.Link
                      isActive={p === page}
                      onPress={() => setPage(p)}
                      className={`data-[active="true"]:bg-primary data-[active="true"]:text-primary-foreground data-[active='true']:font-semibold  rounded-md border border-slate-300 bg-white text-foreground`}
                    >
                      {p}
                    </Pagination.Link>
                  </Pagination.Item>
                ))}
                <Pagination.Item>
                  <Pagination.Next
                    isDisabled={page === totalPages}
                    onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
                    className="bg-white rounded-md border border-slate-300s"
                  >
                    <Pagination.NextIcon />
                  </Pagination.Next>
                </Pagination.Item>
              </Pagination.Content>
            </Pagination>
          </Table.Footer>
        </Table>
      </div>
    </div>
  );
}
