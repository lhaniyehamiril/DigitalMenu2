import { FindManyProductByCategoryResponse } from "@/packages/package-core/application/dtos";
import Link from "next/link";

export interface IListProducts {
    initial: FindManyProductByCategoryResponse,
    menuId: string;
}

export function ListProducts({
    initial,
    menuId
}: IListProducts) {

    // const [selectedItemId, setSelectedItemId] = useState<string>(initial[0].id)

    // const selectedItem = (id: string) => {
    //     setSelectedItemId(id);
    //     selected(id);
    // }

    return (
        <section className="grid grid-cols-2 gap-x-1 gap-y-3 w-full overflow-x-scroll mt-30">
            {
                initial.map(c => (
                    <Link
                    href={`/menu/product/${menuId}/${c.id}`}
                        key={c.id}
                        // onClick={() => selectedItem(c.id)}
                        className={`mx-auto w-44 sm:w-52 items-center p-1 overflow-hidden `}>
                        <div className="h-96 overflow-hidden rounded">
                            <img
                            src={c.media}
                            className="object-cover h-full"
                            alt={c.title ?? 'category title'}
                        />
                        </div>
                        <div className="pt-1">
                            <p>{c.title}</p>
                            <p className="text-green-800 font-semibold">{c.price?.toLocaleString('fa-IR')}</p>
                        </div>
                    </Link>
                ))
            }
        </section>
    )

}