import { useState } from "react";

import { imageGallery } from "../db/imageGallery";

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-3xl font-bold">Image Gallery</h2>
      <p className="underline">Click on an image!</p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {imageGallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="cat"
            className="aspect-square w-60 cursor-pointer rounded-lg shadow-2xl transition delay-150  duration-300 ease-in-out hover:scale-110"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="mt-4">
          <h3 className="mb-4 text-center text-2xl font-semibold">
            Selected Image
          </h3>
          <img
            src={selectedImage}
            alt="cat"
            className="rounded-lg drop-shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

export { ImageGallery };
