import { Pagination } from "@heroui/react";
import { Table } from "@heroui/react";
import StockTable from '@/components/features/stok/Table';
import { Table as TanstackTable } from '@tanstack/react-table';
import { Icon } from "@iconify/react";

interface PaginationProps<TData> {
  table: TanstackTable<TData>;
}

export default function PaginationType2<TData>({ table }: PaginationProps<TData>) {
  const pageIndex  = (table.getState().pagination.pageIndex) + 1;

  const pageCount = table.getPageCount();

  const length = table.getRowCount();

  const { pageSize } = table.getState().pagination;
  const start = pageIndex * pageSize + 1;
  const end = Math.min((pageIndex + 1) * pageSize, length);
  // const pages = Array.from({ length: pageCount }, (_, i) => i); // Sama saja tapi array  


  const paginationHandler = (delta: number) => {
    let pages = [];
    const rangeStart = pageIndex - delta;
    const rangeEnd   = pageIndex + delta;

    for (let i=1; i <= pageCount; i++) {
      if (i == 1 || i == pageCount) {
        pages.push(i);
      } else if (i >= rangeStart && i <= rangeEnd) {
        pages.push(i);
      }
    };

    let res: (number)[] = new Array();
    let prev: number | null = null; 

    pages.forEach(page => {
      if (prev != null && page - prev > 1) {
        res.push(69);
      }
      res.push(page);
      prev = page;
    });
    return res;
  }

  const paginationNumber = paginationHandler(1);
  return(
    <Table.Footer>
      <Pagination size="sm">
        {/* Summary page */}
        <Pagination.Summary>
          Menampilkan {start} - {end} dari {length} barang 
        </Pagination.Summary>

        <Pagination.Content>
          {/* Previous Button */}
          <Pagination.Previous
            isDisabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            className='border rounded-md w-7'
          >
            <Pagination.PreviousIcon />
          </Pagination.Previous>

          {
            paginationNumber.map((page,idx) => {
              switch(page) {
                case 69:
                  return (
                  <Pagination.Item
                    key={idx}
                  >
                    <Pagination.Link
                      className="rounded-md border"
                    >
                      <Icon icon="gravity-ui:ellipsis" />
                    </Pagination.Link>
                  </Pagination.Item>
                  );
                default:
                  return (
                  <Pagination.Item 
                    key={idx}
                  >
                    <Pagination.Link
                      isActive={page === pageIndex }
                      onPress={() => {
                        table.setPageIndex(page - 1);
                      }}
                      className="rounded-md border"
                    >
                      {page}
                    </Pagination.Link>
                  </Pagination.Item>
                  )
              }
            }
            
          )}

          {/* Next Button */}
          <Pagination.Next
            isDisabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className='border rounded-md w-7'
          >
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Content>
      </Pagination>
    </Table.Footer>
  )
}