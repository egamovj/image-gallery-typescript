import { useSortable } from "@dnd-kit/sortable";
import { ImageGallery } from "../../types/global.types"
import { twMerge } from "tailwind-merge";

interface ImageCard extends ImageGallery {
    className?: string,
    onClick?:(id: string | number) => void;
}

const ImageCard = ({id, slug, isSelected, onClick, className=""}: ImageCard) => {
    const {attributes, listeners, setNodeRef, transform, transition, isDragging, index} = useSortable({id: id})
  return (
    <div className={twMerge("relative rounded-lg overflow-hidden border border-gray-300 group z-0 aspect-square object-cover")}>
        <div className={twMerge("flex items-center justify-center h-full", isSelected && "opacity-60")}>
            <img src={slug} alt="" className="block h-full w-full object-cover" />
        </div>
    </div>
  )
}

export default ImageCard