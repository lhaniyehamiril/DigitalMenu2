import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {motion} from 'motion/react'
import { variantXRight } from "../style";

interface Category {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

interface GridListProps {
  list: Category[];
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export function GridList({ list, onDelete, onEdit }: GridListProps) {
  return (
      <div className="bg-[#eee] flex flex-col items-center justify-center p-4 rounded-3xl min-[444px]:grid min-[444px]:grid-cols-2 gap-5 max-[444px]:w-[98%] max-w-[430px] mt-10 mx-auto">
        {list.length === 0 && <span >دسته بندی ایی نیست</span>}
        {list.map((cat, i) => (
          <motion.div
            variants={variantXRight}
             initial='hidden'
             animate='visible'
            key={cat.id || i}
            className={`rounded-full w-48 relative max-[444px]:w-[96%] bg-white shrink-0 flex items-center gap-2 py-[5px] pr-1 ${!cat.image && 'py-3!'}`}
          >
        
                {cat.image && (
                  <img
                    src={'/images/imageRes.webp'}
                    alt={cat.name}
                    className="rounded-full h-10 w-10"
                  />
                )}

               <span className={`whitespace-nowrap text-[15px] ${!cat.image && 'pr-3'}`}>{cat.name}</span>
              
              {/* Action buttons */}
                  <div className="absolute left-3">
                {onEdit && (
                  <button className="text-[#444] cursor-pointer" onClick={() => onEdit(cat.id)}>
                    <EditIcon />
                  </button>
                )}

                {onDelete && (
                  <button className="text-[#f34747] cursor-pointer" onClick={() => onDelete(cat.id)}>
                    <DeleteIcon />
                  </button>
                )}
              </div>
           </motion.div>
        ))}
      </div>
  );
}
