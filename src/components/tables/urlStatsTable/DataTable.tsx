"use client";

import { useCallback, useState } from "react";
import { columns, StatsData } from "./Column";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  IconArrowBigLeftFilled,
  IconArrowBigRightFilled,
} from "@tabler/icons-react";
import { server_url } from "@/lib/config";
import { useQuery } from "@tanstack/react-query";

export default function DataTable() {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const statsFetcher = useCallback(async () => {
    try {
      const token = await getToken({ template: "default" });

      if (token === null) {
        return [];
      }

      console.log(token);
      const res = await axios.get(
        `${server_url}/stats`,

        {
          params: {
            limit: pageSize,
            page: pageIndex + 1,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data;

      const stats = data.stats as StatsData[];
      let totalPages = data.totalPages as number;
      totalPages = totalPages === 0 ? 1 : totalPages;
      setTotalPages(totalPages);

      return stats;
    } catch (err: any) {
      toast.error("Failed to fetch the stats");
      return [];
    }
  }, [getToken, pageIndex, pageSize]);

  const { data, isLoading } = useQuery({
    queryKey: ["urls", isLoaded, isSignedIn, pageSize, pageIndex],
    queryFn: async () => {
      if (!isLoaded || !isSignedIn) return [];
      return statsFetcher();
    },
  });

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    pageCount: totalPages,
    state: {
      pagination: { pageIndex, pageSize },
    },
    onPaginationChange: (updater) => {
      const next =
        typeof updater === "function"
          ? updater({ pageIndex, pageSize })
          : updater;

      setPageIndex(next.pageIndex);
      setPageSize(next.pageSize);
    },
    manualPagination: true,
  });

  return (
    <>
      {isLoading ? (
        <Skeleton className="w-full h-[300px]" />
      ) : (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className=" overflow-hidden  max-sm:overflow-x-scroll  border  rounded-lg relative "
        >
          <table className=" w-full min-w-[500px]  ">
            <thead className="  w-full bg-muted border-b ">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="h-12 ">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="pl-2 text-sm text-muted-foreground font-semibold"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody className="  divide-y max-sm:overflow-x-scroll ">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="h-10  hover:bg-muted/40  ">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="pl-2 text-sm text-muted-foreground"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between px-4 py-2  w-full bg-muted  bottom-0 left-0 sticky ">
            <span className=" text-xs inline-block">
              Page <b>{pageIndex + 1}</b> of <b>{table.getPageCount()}</b>
            </span>

            <div className="flex gap-2">
              <Button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className=" rounded-full w-6 h-6"
                title="Prev"
              >
                <IconArrowBigLeftFilled className="w-3 h-3" />
              </Button>
              <Button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className=" rounded-full w-6 h-6"
                title="Next"
              >
                <IconArrowBigRightFilled className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
