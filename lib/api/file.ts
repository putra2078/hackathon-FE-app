import { ApiResponse } from "@/types/api/base.types";
import { apiClient } from "./client";
import { uploadFileReq, uploadFileRes } from "@/types/api/files.types";
import { UpdatableChartOptions } from "recharts/types/state/rootPropsSlice";

export async function getFileByName(filename: string){
    const res = await apiClient.get<any>(`/files/${filename}`, {responseType: "blob"})
    console.log(res.data)
    return res.data
}


export async function uploadFile(payload: uploadFileReq): Promise<uploadFileRes> {
    const formData = new FormData()
    formData.append('file', payload.file)
    console.log("pay---->",payload.file)
    const res = await apiClient.post<ApiResponse<uploadFileRes>>(`/files`, formData,   
    {headers: {
        'Content-Type': undefined
    }})
    return res.data.data
}