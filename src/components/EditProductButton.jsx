import Link from "next/link";
import React from "react";

export default function EditProductButton({ sku }) {
  return (
    <div>
      EditProductButton
      <div className="text-center w-24 sm:w-16 lg:w-14 text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-600 rounded-sm shadow-md mx-2">
        <Link
          href={`/products/${sku}`}
          className="flex items-center justify-center w-full h-full text-center"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
