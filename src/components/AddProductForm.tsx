"use client";

import { useState } from "react";
import Title from "@/components/Title";
// import Loading from "@/app/Loading";

export default function AddProductForm() {
  const [productSKU, setProductSKU] = useState("");
  return (
    <div className="shadow-lg p-16 mb-5 bg-body rounded">
      {" "}
      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pb-16 p-2"> */}
      <div className="flex flex-col items-center justify-center pb-16 p-2">
        <Title text="กรอกข้อมูลครุภัณฑ์" />
      </div>
      {/* {message.text && <div>{message.text}</div>} */}
      <form className="w-full max-w-xl bg-white rounded-sm shadow-md p-6">
        <div className="mt-4">
          <div className="mt-4">
            <label className="block">
              <span className="text-sm text-gray-600">รหัส</span>
              <input type="text" required value={productSKU} />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
