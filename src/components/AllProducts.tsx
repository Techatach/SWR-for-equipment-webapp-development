"use client";

import React from "react";
import Loading from "@/app/loading";
import Title from "@/components/Title";
import ProductItem from "@/components/ProductItem";
import { useAllProducts } from "@/lib/productAction";

export default function AllProducts() {
  const { data: products, isLoading, error } = useAllProducts();
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isLoading) {
    return <Loading />;
  }
  if (products?.length === 0) {
    return (
      <div className="flex justify-center items-center min-w-full min-h-screen">
        <div className="text-xl text-blue-400">ไม่พบสินค้า</div>
      </div>
    );
  }

  return (
    <div>
      AllProducts
      <div className="flex flex-col justify-start items-center min-w-full min-h-screen">
        <Title text="Products List" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full h-fit">
          {products?.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white border border-gray-300 p-2 rounded-sm shadow-sm round-sm"
              >
                <ProductItem data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
