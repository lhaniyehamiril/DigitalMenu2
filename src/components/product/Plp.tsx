import { FindManyProductByCategoryResponse } from "@/packages/package-core/application/dtos";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'motion/react'
import { variantScale } from "../style";

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
        <section
        className="grid grid-cols-2 gap-5 w-full max-[444px]:w-[90%] max-w-[400px] mt-10 mx-auto">
            {
               initial.map(c => (
                 <Link
                   href={`/menu/product/${menuId}/${c.id}`}
                    key={c.id}
                        // onClick={() => selectedItem(c.id)}
                      >

                    <div className="w-full h-40 relative overflow-hidden rounded-xl">
                        
                        <Image  
                         alt={c.title ?? 'category title'}
                         src={"/images/imageRes.webp"}
                         fill
                          />

                        {/* bg black to white */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                          
                        <div className="z-10 text-[13px] bottom-3 absolute flex flex-col gap-1 right-2">
                          <h1 className="text-white">{c.title}</h1>
                            <motion.span
                              variants={variantScale}
                              initial='hidden'
                              animate='visible'
                            className="text-green-200 font-semibold">{c.price?.toLocaleString('fa-IR')}</motion.span>
                         </div> 
                        
                         </div>
                          
                    </Link>
                ))
            }
        </section>
    )
}