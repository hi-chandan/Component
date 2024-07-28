"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import parse from "html-react-parser";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";

type TiptapProps = {
  setContent: (content: string) => void;
};
const Tiptap = ({ setContent }: TiptapProps) => {
  const [Desc, setDesc] = useState("");

  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: "",
    editorProps: {
      attributes: {
        class:
          "rounded-md  min-h-[150px] outline-none p-2 border-2 border-gray-500 w-96 ",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
      setDesc(html);
    },
  });

  useEffect(() => {}, [editor]);

  if (!editor) {
    return null;
  }
  const buttonActive =
    "is-active bg-green-500 p-1 rounded-md text-white font-semibold";
  const buttonNotActive = "bg-gray-400 p-1 rounded-md text-black font-bold";
  return (
    <div className="border-2 flex  flex-wrap justify-center overflow-hidden rounded-lg border-red-400  ">
      <div className="flex flex-wrap gap-1 p-1  justify-center bg-green-200 border-b-2 border-gray-500 pb-1">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold") ? `${buttonActive}` : `${buttonNotActive}`
          }
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic") ? `${buttonActive}` : `${buttonNotActive}`
          }
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={
            editor.isActive("strike") ? `${buttonActive}` : `${buttonNotActive}`
          }
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={
            editor.isActive("code") ? `${buttonActive}` : `${buttonNotActive}`
          }
        >
          Code
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 })
              ? `${buttonActive}`
              : `${buttonNotActive}`
          }
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 })
              ? `${buttonActive}`
              : `${buttonNotActive}`
          }
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 })
              ? `${buttonActive}`
              : `${buttonNotActive}`
          }
        >
          H3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 })
              ? `${buttonActive}`
              : `${buttonNotActive}`
          }
        >
          H4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 })
              ? `${buttonActive}`
              : `${buttonNotActive}`
          }
        >
          H5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 })
              ? `${buttonActive}`
              : `${buttonNotActive}`
          }
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive("bulletList")
              ? `${buttonActive}`
              : `${buttonNotActive}`
          }
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList")
              ? `${buttonActive}`
              : `${buttonNotActive}`
          }
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={
            editor.isActive("codeBlock")
              ? `${buttonActive}`
              : `${buttonNotActive}`
          }
        >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className={
            editor.isActive("setAllMarks")
              ? `${buttonActive}`
              : `${buttonNotActive}`
          }
        >
          Clear style
        </button>

        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className={
            editor.isActive("undo") ? `${buttonActive}` : `${buttonNotActive}`
          }
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className={
            editor.isActive("redo") ? `${buttonActive}` : `${buttonNotActive}`
          }
        >
          Redo
        </button>
      </div>
      <div className="flex flex-col ">
        <div className="text-lg font-medium text-start">
          <EditorContent editor={editor} />
        </div>

        <div className="">
          <p className="testing"> This is the html form</p>
          <div className="tiptap">
            <div className="">{parse(Desc)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiptap;
