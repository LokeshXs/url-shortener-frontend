import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconDotsVertical, IconQrcode, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import QrCodeModal from "./QrCodeModal";

export default function RowMenu({ shorturl }: { shorturl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className=" cursor-pointer  hover:bg-muted rounded-lg w-8 h-8 flex justify-center items-center border">
          <IconDotsVertical className=" w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <IconQrcode /> Qr Code
          </DropdownMenuItem>

          <DropdownMenuItem className=" focus:bg-red-500 group ">
            <IconTrash className="text-red-500  group-hover:text-primary-foreground " />
            <p className="text-red-500  group-hover:text-primary-foreground">
              Delete
            </p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <QrCodeModal shorturl={shorturl} open={open} setOpen={setOpen} />
    </>
  );
}
