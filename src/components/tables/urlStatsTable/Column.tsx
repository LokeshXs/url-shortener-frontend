import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";

export type StatsData = {
   original_url:string,
          shorturl:string,
          clicks:number,
          expired_at:string|null;
};




const columnHelper = createColumnHelper<StatsData>()

export const  columns = [

    columnHelper.accessor('shorturl',{
        cell:info=><span className=" text-left inline-block w-full">{info.getValue()}</span>,
        header:()=><span className=" text-left w-full inline-block  ">Short url</span>
    }),
    columnHelper.accessor("clicks",{
      cell:info=><span className=" text-center inline-block w-full">{info.getValue()}</span>,
      header:()=><span className=" w-full inline-block">Click</span>
    }),
    columnHelper.accessor("expired_at",{
      cell:info=><span className=" text-center inline-block w-full">{info.getValue()===null?"None":format(new Date(info.getValue()||""),"Pp")}</span>,
      header:()=><span className=" w-full inline-block">Expiration Date</span>
    })
]
