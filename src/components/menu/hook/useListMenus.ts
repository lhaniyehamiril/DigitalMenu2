'use client'
import { useQuery } from "@tanstack/react-query"
import { fetchMenus } from "../service/menuService"
import { ListMenusResponse } from "@/packages/package-core/application/dtos"

const useListMenus = () => {
 const {data, isLoading: loadingListMenu, isError: errorListMenu} = useQuery<ListMenusResponse>({
    queryKey:['menus'],
    queryFn: fetchMenus
 })
 return {data, loadingListMenu, errorListMenu}
}

export default useListMenus
