/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSortable } from "@dnd-kit/sortable";
import { ImageGallery } from "../../types/global.types"
import { twMerge } from "tailwind-merge";
import { CSS } from "@dnd-kit/utilities";

interface ImageCard extends ImageGallery {
    className?: string,
    onClick?:(id: string | number) => void;
}

const ImageCard = ({id, slug, isSelected, onClick, className=""}: ImageCard) => {
    const {attributes, listeners, setNodeRef, transform, transition, isDragging, index} = useSortable({id: id})
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      zIndex: isDragging ? "100" : "auto",
      opacity: isDragging ? 0.3 : 1,
      gridRow: index === 0 ? "span 2" : "span 1",
      gridColumn: index === 0 ? "span 2" : "span 1",
      transformOrigin: "0 0", 
    }
  return (
    <div 
    ref={setNodeRef}
    style={style}
    className={twMerge("relative rounded-lg overflow-hidden border border-gray-300 group z-0 aspect-square object-cover", className)}>

        <button {...listeners} {...attributes} className={twMerge("absolute inset-0 bg-black transition-opacity duration-500 z-50 opacity-0 group-hover:opacity-40")} />
        <div className={twMerge("flex items-center justify-center h-full", isSelected && "opacity-60")}>
            <img src={slug} alt="" className="block h-full w-full object-cover" />
        </div>
    </div>
  )
}

export default ImageCard