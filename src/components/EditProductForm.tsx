"use client";

import React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Title from "@/components/Title";
import { mutate } from "swr";
import Loading from "@/app/loading";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EditProductForm({ sku }) {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState({
    next: null,
    error: false,
  });
  async function updateProduct() {
    const res = await fetch(`/api/products/${sku}`, {
      method: "POST",
      body: JSON.stringify({
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
        status: product.status,
        respondent: product.respondent,
        qrcode: product.qrcode,
      }),
    });
    if (!res.ok) {
      setMessage("Error cannot set data: product to API");
    }
    return res.json();
  }
  async function getProductData() {
    setIsLoading(true);
    const res = await fetch(`/api/products/${sku}`);

    if (!res.ok) {
      setMessage("Error cannot set data: product to API");
    }
    const currentProduct = await res.json();
    setProduct(currentProduct);
    if (!currentProduct.productSKU) {
      router.push("/products");
    }
    setIsLoading(false);
  }
  useEffect(() => {
    getProductData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      setMessage({ ...message, text: "", error: false });
      updateProduct();
      setMessage({
        ...message,
        text: "Edit Product Successfully",
        error: false,
      });
      mutate("api/products");
    } catch (error) {
      setMessage({ ...message, text: error.message, error: true });
    } finally {
      setIsLoading(false);
    }
    if (!product) {
      return null;
    }
    if (isLoading) {
      return <Loading />;
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pb-24">
        <Title text="แบบฟอร์มแก้ไขครุภัณฑ์" />
      </div>
      {message.text && (
        <div
          className={`text-center w-full max-w-xl ${
            message.error ? "bg-red-200" : "bg-green-200"
          } rounded-sm shadow-md p-4 my-2`}
        >
          {message.text}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        // className="w-full max-w-xl bg-white rounded-sm shadow-md p-6"
        className="flex justify-center items-center"
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 py-10 px-60">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block font-medium leading-6 text-gray-900"
            >
              รหัส SKU
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                // name="productSKU"
                // id="productSKU"
                // autoComplete="given-name"
                DefaultValue={product.productSKU}
                disabled
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block font-medium leading-6 text-gray-900"
            >
              รูปครุภัณฑ์
            </label>
            <div className="mt-2">
              <input
                type="file"
                required
                // name="image"
                // id="image"
                // autoComplete="given-name"
                defaultValue={product.image}
                onChange={(e) =>
                  setImage({ ...product, image: e.target.value })
                }
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block font-medium leading-6 text-gray-900"
            >
              รายการครุภัณฑ์
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                // name="name"
                // id="name"
                // autoComplete="given-name"
                defaultValue={product.name}
                onChange={(e) => setName({ ...product, name: e.target.value })}
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block font-medium leading-6 text-gray-900"
            >
              หมายเลขครุภัณฑ์
            </label>
            <div className="mt-2">
              <input
                type="number"
                required
                // name="num1"
                // id="num1"
                // autoComplete="given-name"
                defaultValue={product.num1}
                onChange={(e) => setNum1({ ...product, num1: e.target.value })}
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block font-medium leading-6 text-gray-900"
            >
              ราคา
            </label>
            <div className="mt-2">
              <input
                type="number"
                required
                // name="price"
                // id="price"
                // autoComplete="given-name"
                defaultValue={product.price}
                onChange={(e) =>
                  setPrice({ ...product, price: e.target.value })
                }
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block font-medium leading-6 text-gray-900"
            >
              จำนวน
            </label>
            <div className="mt-2">
              <input
                type="number"
                required
                // name="num2"
                // id="num2"
                // autoComplete="given-name"
                defaultValue={product.num2}
                onChange={(e) => setNum2({ ...product, num2: e.target.value })}
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block font-medium leading-6 text-gray-900"
            >
              คุณลักษณะครุภัณฑ์
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                // name="spec"
                // id="spec"
                // autoComplete="given-name"
                defaultValue={product.spec}
                onChange={(e) => setSpec({ ...product, spec: e.target.value })}
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block font-medium leading-6 text-gray-900"
            >
              วันที่ได้มา
            </label>
            <div className="mt-2">
              <input
                type="Date"
                required
                // name="date1"
                // id="date1"
                // autoComplete="given-name"
                defaultValue={product.date1}
                onChange={(e) =>
                  setDate1({ ...product, date1: e.target.value })
                }
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block font-medium leading-6 text-gray-900"
            >
              ปีที่จัดซื้อ
            </label>
            <div className="mt-2">
              <input
                type="Date"
                required
                // name="date2"
                // id="date2"
                // autoComplete="given-name"
                defaultValue={product.date2}
                onChange={(e) =>
                  setDate2({ ...product, date2: e.target.value })
                }
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block font-medium leading-6 text-gray-900"
            >
              สถานที่ใช้งาน
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                // name="building"
                // id="building"
                // autoComplete="given-name"
                defaultValue={product.building}
                onChange={(e) =>
                  setBuilding({ ...product, building: e.target.value })
                }
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="method"
              className="block font-medium leading-6 text-gray-900"
            >
              วิธีการจัดหา
            </label>
            <div className="mt-2">
              <select
                type="text"
                required
                // name="method"
                // id="method"
                // autoComplete="given-name"
                defaultValue={product.method}
                onChange={(e) =>
                  setMethod({ ...product, method: e.target.value })
                }
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option disabled selected>
                  เลือกรายการ
                </option>
                <option>สอบราคา</option>
                <option>เฉพาะเจาะจง</option>
                <option>e-bidding</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="budget"
              className="block font-medium leading-6 text-gray-900"
            >
              งบประมาณ
            </label>
            <div className="mt-2">
              <select
                type="text"
                required
                // name="budget"
                // id="budget"
                // autoComplete="given-name"
                defaultValue={product.budget}
                onChange={(e) =>
                  setBudget({ ...product, budget: e.target.value })
                }
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option disabled selected>
                  เลือกรายการ
                </option>
                <option>งบประมาณแผ่นดิน</option>
                <option>งบประมาณเงินรายได้</option>
                <option>งบประมาณอื่นๆ</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="category"
              className="block font-medium leading-6 text-gray-900"
            >
              ประเภทครุภัณฑ์
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                name="category"
                id="category"
                autoComplete="family-name"
                defaultValue={product.category}
                onChange={(e) =>
                  setCategory({ ...product, category: e.target.value })
                }
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="group"
              className="block font-medium leading-6 text-gray-900"
            >
              กล่มครุภัณฑ์
            </label>
            <div className="mt-2">
              <select
                type="text"
                required
                name="group"
                id="group"
                autoComplete="given-name"
                defaultValue={product.group}
                onChange={(e) =>
                  setGroup({ ...product, group: e.target.value })
                }
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option disabled selected>
                  เลือกรายการ
                </option>
                <option>ราคามากกว่า 20,000 บาท</option>
                <option>ราคาน้อยกว่า 20,000 บาท</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="status"
              className="block font-medium leading-6 text-gray-900"
            >
              สถานะ
            </label>
            <div className="mt-2">
              <select
                type="text"
                required
                name="status"
                id="status"
                autoComplete="given-name"
                defaultValue={product.status}
                onChange={(e) =>
                  setStatus({ ...product, status: e.target.value })
                }
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option disabled selected>
                  เลือกรายการ
                </option>
                <option>ปกติ</option>
                <option>ชำรุด</option>
                <option>จำหน่าย</option>
                <option>สูญหาย</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="respondent"
              className="block font-medium leading-6 text-gray-900"
            >
              ผู้รับผิดชอบ
            </label>
            <div className="mt-2">
              <input
                type="text"
                require
                name="respondent"
                id="respondent"
                autoComplete="family-name"
                defaultValue={product.respondent}
                onChange={(e) =>
                  setRespondent({ ...product, status: e.target.value })
                }
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="qrcode"
              className="block font-medium leading-6 text-gray-900"
            >
              QR Code
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                name="qrcode"
                id="qrcode"
                autoComplete="family-name"
                value={qrcode}
                onChange={(e) =>
                  setQrcode({ ...product, status: e.target.value })
                }
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-center">
        <Link
          href="/products"
          // className="text-center w-24 mr-3 px-2 py-1 text-white bg-green-600 rounded-sm hover:bg-green-400 focus:outline-none active:bg-green-600"
          className="font-medium"
        >
          {/* หน้าสินค้า */}
          <Button variant="contained" color="success" size="large">
            รายการครุภัณฑ์
          </Button>
        </Link>

        <button
          type="submit"
          // className="px-2 py-1 text-white bg-blue-600 rounded-sm hover:bg-blue-400 focus:outline-none active:bg-blue-600"
          className="mx-4 font-medium"
        >
          {/* เพิ่มสินค้า */}
          <Button variant="contained" color="primary" size="large">
            แก้ไข
          </Button>
        </button>
      </div>
    </div>
  );
}
