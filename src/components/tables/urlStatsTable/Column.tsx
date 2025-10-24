import CopyButton from "@/components/common/CopyButton";
import RowMenu from "@/components/common/RowMenu";
import { Button } from "@/components/ui/button";
import { IconDotsVertical } from "@tabler/icons-react";
import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";

export type StatsData = {
  original_url: string;
  shorturl: string;
  clicks: number;
  expired_at: string | null;
};

const columnHelper = createColumnHelper<StatsData>();

export const columns = [
  columnHelper.accessor("shorturl", {
    cell: (info) => (
      <div className=" text-left  w-full flex items-center gap-0 "><CopyButton variant="secondary" text={info.getValue()}/><p className="truncate max-sm:text-sm">{info.getValue()}</p></div>
    ),
    header: () => (
      <span className=" text-left w-full inline-block  ">Short url</span>
    ),
  }),
  columnHelper.accessor("clicks", {
    cell: (info) => (
      <span className=" text-center inline-block w-full">
        {info.getValue()}
      </span>
    ),
    header: () => <span className=" w-full inline-block">Click</span>,
  }),
  columnHelper.accessor("expired_at", {
    cell: (info) => (
      <span className=" text-center inline-block w-full">
        {info.getValue() === null
          ? "None"
          : format(new Date(info.getValue() || ""), "Pp")}
      </span>
    ),
    header: () => <span className=" w-full inline-block">Expiration Date</span>,
  }),

  columnHelper.display({
    id:'actions',
    cell:(props)=><RowMenu shorturl={props.row.getValue("shorturl")}/>
  })
];
