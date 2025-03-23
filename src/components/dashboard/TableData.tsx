"use client";
import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  FaSort,
  FaSearch,
  FaUser,
  FaDollarSign,
  FaCalendarAlt,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";
import { SalesAgent, mySalesAgentData } from "@/lib/dashboard/tableData";

const columnHelper = createColumnHelper<SalesAgent>();

interface DataTableProps {
  salesAgentData?: SalesAgent[];
}

const columns = [
  columnHelper.accessor("agentName", {
    cell: (info) => {
      const name = info.getValue();
      return (
        <span title={name}>
          {name.length > 20 ? name.slice(0, 20) + "..." : name}
        </span>
      );
    },
    header: () => (
      <span className="flex items-center">
        <FaUser className="mr-1" size={14} /> Agent Name
      </span>
    ),
  }),

  columnHelper.accessor("email", {
    cell: (info) => (
      <span className="italic text-blue-600">{info.getValue()}</span>
    ),
    header: () => "Email",
  }),

  columnHelper.accessor("hireDate", {
    header: () => (
      <span className="flex items-center">
        <FaCalendarAlt className="mr-1" size={14} /> Hire Date
      </span>
    ),
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("salesTarget", {
    cell: (info) => `$${info.getValue().toFixed(2)}`,
    header: () => (
      <span className="flex items-center">
        <FaChartLine className="mr-1" size={14} /> Sales Target
      </span>
    ),
  }),

  columnHelper.accessor("salesAchieved", {
    cell: (info) => {
      const value = info.getValue();
      const target = info.row.original.salesTarget;
      const percentAchieved = (value / target) * 100;
      const textColor =
        percentAchieved >= 100 ? "text-green-600" : "text-red-600";

      return (
        <span className={textColor}>
          ${value.toFixed(2)} ({percentAchieved.toFixed(0)}%)
        </span>
      );
    },
    header: () => (
      <span className="flex items-center">
        <FaTrophy className="mr-1" size={14} /> Sales Achieved
      </span>
    ),
  }),

  columnHelper.accessor("commissionDue", {
    cell: (info) => `$${info.getValue().toFixed(2)}`,
    header: () => (
      <span className="flex items-center">
        <FaDollarSign className="mr-1" size={14} /> Commission Due
      </span>
    ),
  }),
];

export default function TableData({
  salesAgentData = mySalesAgentData,
}: DataTableProps) {
  const [data] = useState(() => [...salesAgentData]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <section className="bg-white p-4 mx-auto rounded-lg shadow-md overflow-x-auto w-full min-w-0 max-w-screen">
      {/* Search bar */}
      <div className="mb-4 relative overflow-x-auto">
        <input
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search by name, email, or date..."
          className="pl-10 pr-4 py-2 border rounded w-full overflow-x-auto"
        />
        <FaSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={16}
        />
      </div>

      {/* Table stats summary */}
      <div className="mb-4 grid grid-cols-3 gap-4 overflow-x-auto w-full min-w-0 max-w-screen">
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Total Agents</p>
          <p className="text-xl font-bold">{data.length}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Total Sales</p>
          <p className="text-xl font-bold">
            $
            {data
              .reduce((sum, agent) => sum + agent.salesAchieved, 0)
              .toFixed(2)}
          </p>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Total Commission</p>
          <p className="text-xl font-bold">
            $
            {data
              .reduce((sum, agent) => sum + agent.commissionDue, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>

      {/* Table */}
      <article className="overflow-x-auto w-full min-w-0 max-w-screen">
        <table className="overflow-x-auto w-full min-w-0 max-w-screen border-collapse">
          <thead className="overflow-x-auto w-full min-w-0 max-w-screen">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-gray-100">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-2 text-left border-b">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <FaSort className="ml-1" size={12} />
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 border-b">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <select
          className="border rounded p-1"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize} per page
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1 border rounded disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Prev
          </button>

          <span>
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>

          <button
            className="px-2 py-1 border rounded disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
