import { TEACHERS } from "../constants/utils";

import Header from "../components/Header";
import { ITeacher } from "../types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import * as XLSX from "xlsx";

import Button from "../components/Button";
import SearchInput from "../components/SearchInput";
/**
 * Teachers list
 */

const Teachers = () => {
  const columnHelper = createColumnHelper<ITeacher>();
  const [sortingState, setSortingState] = useState({
    id: 0,
    direction: "asc",
  });

  const columns = [
    columnHelper.accessor("_id", {
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "Num",
    }),
    columnHelper.accessor("photoUrl", {
      cell: (info) => (
        <img
          src={info.getValue()}
          alt="..."
          className="rounded-full w-10 h-10 object-cover"
        />
      ),
      header: "Photo",
    }),
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Name",
    }),
    columnHelper.accessor("surname", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Surname",
    }),
    columnHelper.accessor("title", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Title",
    }),

    columnHelper.accessor("room", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Room",
    }),
    columnHelper.accessor("building", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Building",
    }),
    columnHelper.accessor("department", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Department",
    }),
    columnHelper.accessor("email", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Email",
    }),
    columnHelper.accessor("linkedIn", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Linked In",
    }),
    columnHelper.accessor("instagram", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Instagram",
    }),
    columnHelper.accessor("description_UA", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "UA Description",
    }),
    columnHelper.accessor("description_SK", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "SK Description",
    }),
    columnHelper.display({
      cell: () => (
        <span>
          <div className="flex flex-row items-center gap-2">
            <Button
              color="white"
              bgColor="#9EABB2"
              text="Edit"
              borderRadius="10px"
              size="sm"
              func={() => {}}
            />
            <Button
              color="white"
              bgColor="#E75757"
              text="Delete"
              borderRadius="10px"
              size="sm"
              func={() => {}}
            />
          </div>
        </span>
      ),
      header: "Actions",
    }),
  ];

  const [data] = useState<ITeacher[]>(() => [...TEACHERS]);
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
   
  });

  const downloadTable = (data: ITeacher[] = [], fileName: String) => {
    const tableData = data?.length ? data : [];
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Teachers" category="List" />
      <div className="flex w-full justify-between items-center my-2">
        <SearchInput
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
        />
        <Button
          color="white"
          bgColor="#03c9d7"
          text="Download"
          borderRadius="10px"
          size="md"
          func={() => downloadTable(data, "teachers")}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="border border-gray-700 w-full text-left">
          <thead className="bg-slate-300">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="capitalize px-3.5 py-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length
              ? table.getRowModel().rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`${
                      index % 2 != 0 ? "bg-slate-100" : "bg-white"
                    }`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="p-1">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-end mt-2 gap-2">
        <button
          className="p-1 border border:gray-300 px-2 disabled:opacity-30"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            name="pageNum"
            className="border p-1 rounded w-16 bg-transparent"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </span>
        <button
          className="p-1 border border:gray-300 px-2 disabled:opacity-30"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>

        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          className="p-2 bg-transparent"
        >
          {[10, 20, 30].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Teachers;
