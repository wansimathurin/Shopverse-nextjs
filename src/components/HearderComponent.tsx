import Link from "next/link";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

type HearderComponentProps = {
  title?: string;
  href: string;
};
export const HearderComponent = ({title,href}:HearderComponentProps) => {
  return (
    <div className="flex justify-between w-full items-center mb-3">
          <h2 className="font-bold text-2xl mb-3">{title}</h2>
      <Link href={href} className="text-orange-600 cursor-pointer flex items-center gap-2">
        Show more <FaCircleArrowRight size={20} color="#FF6900" />{" "}
      </Link>
    </div>
  );
};
