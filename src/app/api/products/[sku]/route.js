import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
// export async function GET(request, { params }) {
  const { sku } = params;

  try {
    const product = await Product.findOne({ productSKU: sku });

    if (product) {
      const prvProduct = {
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
      return NextResponse.json(prvProduct);
    }
    return NextResponse.json({ message: "Not Found Product" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function POST(request, { params }) {
// export async function POST(request, { params }) {
  const { sku } = params;
  const {
    // productSKU,
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

  try {
    const product = await Product.findOneAndUpdate(
      { productSKU: sku },
      {
        // productSKU,
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
      }
    );

    if (product) {
      const prvProduct = {
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
      return NextResponse.json(prvProduct);
    }
    return NextResponse.json({ message: "NO Product Found" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function DELETE(request, { params }) {
// export async function DELETE(request, { params }) {
  // const { sku } = params;
  const { productSKU } = await request.json();

  try {
    const product = await Product.findOneAndDelete({ productSKU: productSKU });

    if (product) {
      const prvProduct = {
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
      return NextResponse.json(prvProduct);
    }
    return NextResponse.json({ message: "NO Product Delete" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
