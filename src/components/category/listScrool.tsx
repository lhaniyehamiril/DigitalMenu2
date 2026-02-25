import { ListCategoriesByMenuIdResponse } from "@/packages/package-core/application/dtos";
import { useState } from "react";
import { motion } from 'motion/react'
import { variantXRight, variantY } from "../style";

export interface IListCategoryScroolX {
    initial: ListCategoriesByMenuIdResponse,
    selected: (id: string) => void;
}

export function ListCategoryScroolX({
    initial,
    selected
}: IListCategoryScroolX) {

    const [selectedItemId, setSelectedItemId] = useState<string>(initial[0].id)

    const selectedItem = (id: string) => {
        setSelectedItemId(id);
        selected(id);
    }

    return (
   <section className="sticky top-0 z-10 mt-5 bg-white pl-7 rounded-full overflow-x-auto scroll-hidden">
    <motion.div
      variants={variantY}
      initial='hidden'
      animate='visible'
    className="flex flex-nowrap gap-x-2 p-2">
    {initial.map(c => (
      <div
        key={c.id}
        onClick={() => selectedItem(c.id)}
        className={`rounded-full shrink-0
          flex items-center gap-2 py-0.5 pr-1 pl-5
            ${selectedItemId === c.id ? 'bg-[#dddddd]' : 'bg-[#eee]'}
          `}
      >
        <img
          src="/images/imageRes.webp"
          className="w-9 h-9 rounded-full"
          alt={c.name}
        />
        <p className="whitespace-nowrap text-sm">{c.name}</p>
      </div>
    ))}
  </motion.div>
</section>

    )

}