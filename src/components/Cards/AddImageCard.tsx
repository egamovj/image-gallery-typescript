import React from "react"
import { ImageGallery } from "../../types/global.types"
import ImageIcon from "../../assets/Icons/ImageIcon"
import { twMerge } from "tailwind-merge"

interface AddImageCard {
    setGalleryData: React.Dispatch<React.SetStateAction<ImageGallery[]>>
}

const AddImageCard = ({setGalleryData} : AddImageCard) => {

  return (
    <>
        <button type="button" className={twMerge("rounded-lg border border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors duration-500 aspect-square p-8")} >
            <ImageIcon />
            <p>Add Image</p>
        </button>
    </>
  )
}

export default AddImageCard