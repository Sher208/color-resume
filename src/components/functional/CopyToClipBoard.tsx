"use client";

import { useToast } from "@/lib/useToast";
import React, { FC } from "react";

interface CopyToClipBoardProps extends React.HTMLAttributes<HTMLButtonElement> {
  copyText: string; // text to be copied
  toastMessage?: string; //Toast message to be displayed if available
}

const CopyToClipBoard: FC<CopyToClipBoardProps> = ({
  copyText,
  toastMessage,
  children,
  ...props
}) => {
  const { toast } = useToast();
  const onCopyToClipBoard = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(copyText);
    toast({
      title: toastMessage,
      variant: "success",
    });
  };
  return (
    <button
      aria-label="Copy Email to Clipboard"
      {...props}
      onClick={onCopyToClipBoard}
    >
      {children}
    </button>
  );
};

export default CopyToClipBoard;
