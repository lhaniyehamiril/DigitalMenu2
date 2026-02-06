import { FindMenuByIdResponse, ListMenusResponse } from "@/packages/package-core/application/dtos";
import axios from "axios"


// fetch menu

export const fetchMenus = async(): Promise<ListMenusResponse> => {
const res = await axios.get('/api/menu/list')

  if (!res.data?.success) {
    throw new Error(res.data?.error ?? "Failed to fetch menus");
  }
  return res.data.data || [];
}


// find menu

export const findMenuById = async(id: string): Promise<FindMenuByIdResponse> => {;
  const res = await axios.get(`/api/menu/find-by-id/${id}`)
 
  if (!res.data?.success) {
    throw new Error(res.data?.error ?? `Failed to fetch menu with id ${id}`);
  }
  
  return res.data.data ?? []
}