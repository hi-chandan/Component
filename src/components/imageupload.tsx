"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";

const ImageUpload = () => {
  const [image, setImage] = useState<File[]>([]);
  const [category, setCategory] = useState<string>("electronics");
  // console.log("This is image Upload", image);
  // console.log("this is Category", category);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage([...image, ...Array.from(e.target.files)]);
    }
  };
  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("category", category);
    if (image) {
      Array.from(image).forEach((item) => {
        console.log("This is item", item);
        formData.append("products", item);
      });
    }
  };
  const stopUpload = (index: number) => {
    setImage(image.filter((first, second) => second !== index));
  };

  return (
    <div>
      <div className="flex justify-center">
        {image &&
          Array.from(image).map((item, index) => (
            <span key={index}>
              <Image
                style={{ padding: "10px" }}
                width={200}
                height={300}
                className="w-52 h-52 rounded-md"
                src={item ? URL.createObjectURL(item) : ""}
                alt={`Uploaded ${index}`}
              />
              <p onClick={() => stopUpload(index)}>{index}</p>
            </span>
          ))}
      </div>

      <input
        onChange={handleImageChange}
        multiple
        type="file"
        placeholder="Enter image"
      />
      <input
        onChange={(e) => setCategory(e.target.value)}
        type="text"
        value={category}
        placeholder="Enter category"
      />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default ImageUpload;
