"use client";

import Image from "next/image";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "serverImage" | "messageFile";
}

export function FileUpload({ endpoint, value, onChange }: FileUploadProps) {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative w-20 h-20">
        <Image fill src={value} alt="upload" className="rounded-full" />
        <Button
          onClick={() => onChange("")}
          type="button"
          variant="destructive"
          size="icon"
          className="absolute top-0 right-0 w-fit h-fit p-1 rounded-full"
        >
          <X size="16" />
        </Button>
      </div>
    );
  }

  return (
    <div>
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      />
    </div>
  );
}
