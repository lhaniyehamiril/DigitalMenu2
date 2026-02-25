'use client'
import { ListCategoryScroolX } from "@/components/category/listScrool";
import { ListProducts } from "@/components/product/Plp";
import { CategoryProps, ProductProps } from "@/packages/package-core/types";
import { Skeleton } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductListPageClient({ menuId }: { menuId: string }) {

    const [categories, setCategories] = useState<CategoryProps[]>([])
    const [products, setProducts] = useState<ProductProps[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    // Fetch categories
    const categoriesListByMenuId = async (id: string) => {
        try {
            const res = await axios.get(`/api/category/list-by-menuid/${id}`)

            if (!res.data?.success) {
                throw new Error(res.data?.error ?? `Failed to fetch menu with id ${id}`);
            }

            setCategories(res.data.data ?? [])
        }
        catch (e) {
            throw new Error('Faile to load categories')
        }
    }
    // Fetch products by selected category
    const productsListByCategory = async (id: string) => {
        console.log("starting fetch product")
        try {
            const res = await axios.get(`/api/product/list-by-category/${id}`)

            if (!res.data) {
                throw new Error(res.data?.error ?? `Failed to fetch menu with id ${id}`);
            }
            setProducts(res.data.data ?? [])
        }
        catch (e) {
            throw new Error('Faile to load products')
        }
    }

    useEffect(() => {
        let mount = true;
        if (mount) {
            categoriesListByMenuId(menuId)
        }
        mount = false;
    }, [menuId]);

    useEffect(() => {
        let mount = true;
        if (selectedCategory) {
            productsListByCategory(selectedCategory)
        }
        mount = false;
    }, [selectedCategory]);

    useEffect(() => {
        if (!selectedCategory && categories.length > 0) {
            setSelectedCategory(categories[0].id)
        }
    }, [categories]);

    return (
        <div className="max-w-[480px] overflow-hidden mx-auto mb-10">
            {
                categories.length < 1 ?
                    (
                        <Skeleton />
                    ) : (
                        <>
                            <ListCategoryScroolX
                                initial={categories}
                                selected={(id) => setSelectedCategory(id)}
                            />
                            <ListProducts
                                initial={products}
                                menuId={menuId}
                            />
                        </>
                    )
            }
        </div>
    )
}