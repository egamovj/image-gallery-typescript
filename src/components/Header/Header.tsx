import CheckboxIcon from "../../assets/Icons/CheckboxIcon";
import EmptyCheckboxIcon from "../../assets/Icons/EmptyCheckboxIcon";
import { ImageGallery } from "../../types/global.types"

interface HeaderProps {
    onDelete: (selectedItems: ImageGallery[]) => void;
    galleryData: ImageGallery[];
}

const Header = ({onDelete, galleryData}: HeaderProps) => {
    const selectedItems = galleryData.filter((item) => item.isSelected);
  return (
    <div className="flex items-center justify-between gap-4 p-5">
        {
            selectedItems.length > 0 ? <>
                <h2 className="text-lg md:text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    {
                        selectedItems.length > 0 ? (<CheckboxIcon className="text-blue-600"/>) : (<EmptyCheckboxIcon/>)
                    }
                    <span>
                        {
                            selectedItems.length > 1 ? `${selectedItems.length} Files Selected` : `${selectedItems.length} Files Selected`
                        }
                    </span>
                </h2>
                <button onClick={selectedItems.length > 0 ? () => onDelete(selectedItems) : () => {}}
                 className="font-semibold text-red-500 text-base md:text-lg hover:underline">
                    {
                        selectedItems.length > 1 ? `Delete Files` : "Delete Files"
                    }
                </button>
            </> : <p className="text-2xl font-semibold text-gray-800">Showcase</p>
        }
    </div>
  )
}

export default Header