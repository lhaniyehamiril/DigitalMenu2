import ProductListPageClient from './productListPageClient'

const ProductListPage = async ({ params }: { params: Promise<{ menuId: string }> }) => {
    const { menuId } = await params
    return <ProductListPageClient menuId={menuId} />
}

export default ProductListPage
