"use client";
import { Chip, Pagination, Table } from "@heroui/react";
import ActionProductButton from "./ActionProductButton";

interface ProductTableProps{
  columns: Column[]
  products: Product[]
  currentPage: number
  totalPages: number
  pages(): number[]
  onPageChange: (page: any) => void
  start: number
  end: number
}

interface Product{
  productName: string
  category: string
  stock: number
  buyPrice: number
  sellPrice: number
  status: string
  sku: string
}

interface Column{
  id: string
  name: string
  minWidth: number
}

export default function ProductTable({totalPages, columns, currentPage, onPageChange, products, start, end, pages} : ProductTableProps) {

  return (
        <Table className="rounded-none p-0">
          <Table.ResizableContainer>
            <Table.Content
              aria-label="Table with resizable columns"
              className="min-w-[700px]"
            >
              <Table.Header
                className={"bg-surface-secondary border border-surface-border"}
              >
                {columns.map((column, i) => {
                  return (
                    <Table.Column
                      key={i}
                      id={column.id}
                      isRowHeader={column.id === "productName"}
                      defaultWidth="1fr"
                      minWidth={column.minWidth}
                      className={
                        "font-semibold text-black text-sm"
                      }
                    >
                      {column.name}
                      {i !== columns.length - 1 && <Table.ColumnResizer />}
                      
                    </Table.Column>
                  );
                })}
              </Table.Header>
              <Table.Body>
                {products.map((product, i) => {
                  return (
                    <Table.Row
                      key={i}
                      className={
                        "*:bg-surface-tertiary hover:*:bg-surface-secondary *:border-y *:border-surface-border "
                      }
                    >
                      <Table.Cell className={'rounded-none'}>
                        <div className="flex items-center gap-2">
                          <div className="flex justify-center items-center w-12 h-12 bg-primary rounded-md shrink-0 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1628794397139-a45fc3286892?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product-image" className="w-full h-full object-cover" />
                          </div>
                          <div className="truncate">
                          <p className="truncate font-semibold">{product.productName}</p>
                          <p className="text-sm text-gray-500">SKU: {product.sku}</p>
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className={"truncate text-gray-500"}>
                        {product.category}
                      </Table.Cell>
                      <Table.Cell className={"truncate"}>
                        <div className="flex flex-col ">
                        <p className="text-success-foreground font-semibold">{product.stock}</p>
                        <p className="text-sm text-gray-500">Tersedia</p>
                        </div>
                      </Table.Cell>
                      <Table.Cell className={"truncate"}>
                        Rp {product.buyPrice}
                      </Table.Cell>
                      <Table.Cell className={"truncate"}>
                        Rp {product.sellPrice}
                      </Table.Cell>
                      <Table.Cell className={"truncate"}>
                        {product.status === 'aktif' ?  <Chip color="success" variant="soft" className="rounded-md capitalize">
                          {product.status}
                        </Chip> :   <Chip color="danger" variant="soft" className="rounded-md capitalize">
                          {product.status}
                        </Chip>}

                      </Table.Cell>
                      <Table.Cell className="rounded-none truncate">
                        <ActionProductButton/>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Content>
          </Table.ResizableContainer>
          <Table.Footer className="bg-surface-secondary">
            <Pagination size="sm">
              <Pagination.Summary className="text-black">
                Manampilkan {start} - {end} dari {products.length} produk
              </Pagination.Summary>
              <Pagination.Content>
                <Pagination.Item>
                  <Pagination.Previous
                    isDisabled={currentPage === 1}
                    onPress={() => onPageChange((p) => Math.max(1, p - 1))}
                    className="bg-white rounded-md border border-slate-300"
                  >
                    <Pagination.PreviousIcon />
                  </Pagination.Previous>
                </Pagination.Item>
                {pages().map((p) => (
                  <Pagination.Item key={p}>
                    <Pagination.Link
                      isActive={p === currentPage}
                      onPress={() => onPageChange(p)}
                      className={`data-[active="true"]:bg-primary data-[active="true"]:text-primary-foreground data-[active='true']:font-semibold  rounded-md border border-slate-300 bg-white text-foreground`}
                    >
                      {p}
                    </Pagination.Link>
                  </Pagination.Item>
                ))}
                <Pagination.Item>
                  <Pagination.Next
                    isDisabled={currentPage === totalPages}
                    onPress={() => onPageChange((p) => Math.min(totalPages, p + 1))}
                    className="bg-white rounded-md border border-slate-300s"
                  >
                    <Pagination.NextIcon />
                  </Pagination.Next>
                </Pagination.Item>
              </Pagination.Content>
            </Pagination>
          </Table.Footer>
        </Table>
  );
}
