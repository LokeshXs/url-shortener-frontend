import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useRef } from "react";
import QrCode from "react-qr-code";
import { Button } from "../ui/button";
import { IconDownload } from "@tabler/icons-react";
import { toast } from "sonner";

export default function QrCodeModal({
  shorturl,
  setOpen,
  open,
}: {
  shorturl: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}) {
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQr = () => {
    const svg = qrRef.current?.querySelector("svg");

    if (!svg) {
      toast.error("Download failed!");
      return;
    }
    const svgData = new XMLSerializer().serializeToString(svg);

    const canvas = document.createElement("canvas");

    const img = new Image();

    // converting the svg base64

    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(svgBlob);

    img.src = url;

    img.onload = () => {
      // Draw image onto canvas

      canvas.width = img.width * 2;
      canvas.height = img.height * 2;

      const ctx = canvas.getContext("2d");

      ctx?.scale(2, 2);

      ctx?.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      // Creating a download link
      const link = document.createElement("a");
      link.download = "qrcode.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>QR Code</DialogTitle>
          <div className=" mt-4 space-y-2">
            <p>Qr Code Preview</p>

            <div className="  py-10 px-4 bg-muted border border-muted-foreground/10 rounded-lg flex justify-center items-center">
              <div ref={qrRef}>
                <QrCode value={shorturl} size={120} />
              </div>
            </div>

            <div className=" flex justify-end mt-6">
              <Button onClick={downloadQr}>
                Download <IconDownload />
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
