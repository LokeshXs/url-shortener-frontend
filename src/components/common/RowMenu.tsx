import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconDotsVertical, IconQrcode, IconTrash } from "@tabler/icons-react";
import { useContext, useState, useTransition } from "react";
import QrCodeModal from "./QrCodeModal";
import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";
import { ReactQueryContext } from "@/context/ReactQueryProvider";


export default function RowMenu({ shorturl }: { shorturl: string }) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { getToken } = useAuth();
  const {queryClient} = useContext(ReactQueryContext);

  function urlDeleteHandler(url: string) {
    startTransition(async () => {
      try {
        const token = await getToken({ template: "default" });
        await axios.delete(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("URL Deleted successfuly");
        queryClient.refetchQueries({queryKey:["urls"]})
      } catch (err) {
        toast.error("Failed to delete the url!");
      }
    });
  }

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

          <DropdownMenuItem
            onClick={() => urlDeleteHandler(shorturl)}
            className=" focus:bg-red-500 group "
            disabled={isPending}
          >
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
