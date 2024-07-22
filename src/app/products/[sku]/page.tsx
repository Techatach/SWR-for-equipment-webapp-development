import React from "react";
import EditProductForm from "@/components/EditProductForm"

export default async function ProductPage({params}) {
  const {sku} = params
  return <div>
    <EditProductForm sku={sku}/>
  </div>;
}
