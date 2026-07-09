import { useEffect, useState } from "react";
import {getFileByName} from "@/lib/api/file";
import useSWR from "swr";
import { getErrorMessage } from "@/lib/getErrorMessage";

export function useGetFileByName(filename: string) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const check = filename && filename.trim() !== ''  ? `file/${filename}` : null

  const { data: blob, error, isLoading } = useSWR(
    filename && filename.trim() !== ''  ? `file/${filename}` : null,
    () => getFileByName(filename)
  );

  useEffect(() => {
    if (!blob) {
      setImageUrl(null)
      return
    };


    const localUrl = URL.createObjectURL(blob);
    setImageUrl(localUrl);

    return () => {
      URL.revokeObjectURL(localUrl);
    };
  }, [blob]);

  return {
    imageUrl, 
    error: getErrorMessage(error, "Gagal mengambil file"),
    isLoading,
  };
}