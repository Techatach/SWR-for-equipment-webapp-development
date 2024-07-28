import mongodbConnect from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      productSKU,
      image,
      name,
      num1,
      price,
      num2,
      spec,
      date1,
      date2,
      building,
      method,
      budget,
      category,
      group,
      statdata,
      respondent,
      qrcode,
    } = await request.json();

    await mongodbConnect();

    const product = await Product.create({
      productSKU: productSKU.trim(),
      image,
      name,
      num1,
      price,
      num2,
      spec,
      date1,
      date2,
      building,
      method,
      budget,
      category,
      group,
      statdata,
      respondent,
      qrcode,
    });

    const productMap = {
      _id: product._id,
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
    return NextResponse.json(productMap);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
