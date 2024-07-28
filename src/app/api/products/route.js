import mongodbConnect from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request) {
  const headers = new Headers(request.headers);
  await mongodbConnect();

  const products = await Product.find();

  const productMap = products.map((product) => {
    return {
      productSKU: product.productSKU,
      image: product.image,
      name: product.name,
      num1: product.num1,
      price: product.price,
      num2: product.num2,
      spec: product.spec,
      date1: product.date2,
      date2: product.date2,
      building: product.building,
      method: product.method,
      budget: product.budget,
      category: product.category,
      group: product.group,
      statdata: product.statdata,
      respondent: product.respondent,
      qrcode: product.qrcode,
    };
  });
  return NextResponse.json(productMap, { headers: headers });
}
