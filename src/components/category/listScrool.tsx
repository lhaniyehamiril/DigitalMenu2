import { ListCategoriesByMenuIdResponse } from "@/packages/package-core/application/dtos";
import { useState } from "react";

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
       <section className="
  sticky top-0 z-10
  bg-white
  overflow-x-auto
">
  <div className="flex flex-nowrap gap-x-2 p-2">
    {initial.map(c => (
      <div
        key={c.id}
        onClick={() => selectedItem(c.id)}
        className={`
          shrink-0
          flex items-center gap-x-2
          w-[160px]
          border-b p-2
          ${selectedItemId === c.id ? 'bg-gray-100 border-gray-800' : 'border-gray-300'}
        `}
      >
        <img
          src={c.image}
          className="w-10 h-10 rounded-full"
          alt={c.name}
        />
        <p className="whitespace-nowrap text-sm">{c.name}</p>
      </div>
    ))}
  </div>
</section>

    )

}