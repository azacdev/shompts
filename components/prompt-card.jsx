"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const PromptCard = ({ item, handleToggleClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();

  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(item.prompt);
    navigator.clipboard.writeText(item.prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="rounded-xl h-full w-full p-8 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ">
      <div className="flex justify-between gap-5">
        <div className="flex gap-3">
          <div className="flex rounded-full">
            <Image
              src={item.creator.image}
              alt="user_image"
              width={50}
              height={50}
              className="rounded-full object-contain"
            />
          </div>

          <div className="text-white">
            <h2 className="text-zinc-100 font-bold tracking-wide">
              {item.creator.username}
            </h2>
            <p className="text-zinc-400 tracking-wide leading-relaxed text-sm">
              {item.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === item.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-neutral-300 ">{item.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleToggleClick && handleToggleClick(item.tag)}
      >
        #{item.tag}
      </p>

      {session?.user.id === item.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>

          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
