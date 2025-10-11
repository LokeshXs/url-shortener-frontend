import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import QrCode from "react-qr-code"
import { Button } from "../ui/button";
import { IconDownload } from "@tabler/icons-react";


export default function QrCodeModal({ shorturl,setOpen,open }: { shorturl: string,setOpen:Dispatch<SetStateAction<boolean>>,open:boolean }) {
  return (
    <Dialog open={open} onOpenChange={setOpen} >
   
      <DialogContent>
        <DialogHeader>
          <DialogTitle>QR Code</DialogTitle>
          <div className=" mt-4 space-y-2">
            <p>Qr Code Preview</p>

            <div className="  py-10 px-4 bg-muted border border-muted-foreground/10 rounded-lg flex justify-center items-center">
            <QrCode value={shorturl} size={120}/>
            </div>

            <div className=" flex justify-end mt-6">
                <Button>Download <IconDownload/></Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
