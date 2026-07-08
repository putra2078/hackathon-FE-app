import useSWRMutation from 'swr/mutation';

import { uploadFile } from '@/lib/api/file';
import { uploadFileReq, uploadFileRes } from '@/types/api/files.types';

async function uploadFileFetcher(
  _key: string,
  { arg }: { arg: uploadFileReq }
): Promise<uploadFileRes> {
  return uploadFile(arg);
}

/**
 * Hook untuk upload file menggunakan SWR mutation.
 *
 * Contoh pakai:
 * const { upload, isUploading, error, data, reset } = useUploadFile();
 *
 * const handleSubmit = async (file: File) => {
 *   try {
 *     const result = await upload({ file });
 *     console.log('Upload sukses:', result);
 *   } catch (err) {
 *     console.error('Upload gagal:', err);
 *   }
 * };
 */
export function useUploadFile() {
  const { trigger, data, error, isMutating, reset } = useSWRMutation(
    '/files',
    uploadFileFetcher
  );

  return {
    upload: trigger,       
    data,                  
    error,                 
    isUploading: isMutating,
    reset,                 
  };
}