import { SearchBox } from '@/components/ui/SearchBox';
import { Table } from '@tanstack/react-table';

interface TableSearchFiltersProps<TData> {
  table: Table<TData>;
}

export function TableSearchFilters<TData>({ 
  table 
}: TableSearchFiltersProps<TData>) {
  return (
    <>
      {table.getColumn('email') && (
        <SearchBox
          placeholder="Filter emails..."
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          onChange={(value) =>
            table.getColumn('email')?.setFilterValue(value)
          }
        />
      )}

      {table.getColumn('fullName') && (
        <SearchBox
          placeholder="Search Name..."
          value={
            (table.getColumn('fullName')?.getFilterValue() as string) ?? ''
          }
          onChange={(value) =>
            table.getColumn('fullName')?.setFilterValue(value)
          }
          className="ml-2 max-w-sm"
        />
      )}

      {table.getColumn('title') && (
        <SearchBox
          placeholder="Search Product Name..."
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(value) =>
            table.getColumn('title')?.setFilterValue(value)
          }
          className="ml-2 max-w-sm"
        />
      )}
    </>
  );
}