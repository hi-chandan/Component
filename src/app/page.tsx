"use client";

import ImageUpload from "@/components/imageupload";
import Tiptap from "@/components/Tiptap";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  console.log("This is first", first);
  console.log("This is second", second);

  return (
    <div className="flex justify-center flex-col text-center   ">
      Text Editor
      <div className="flex gap-10 justify-center  m-10">
        <div className=" ">
          <Tiptap setContent={setFirst} />
        </div>
        <div className="">
          <Tiptap setContent={setSecond} />
        </div>
        <div className="">
          <Tiptap setContent={setThird} />
        </div>
      </div>
      Multiple Image upload
      <ImageUpload />
    </div>
  );
}
