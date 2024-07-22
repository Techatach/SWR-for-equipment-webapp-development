"use client";

import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import Title from "@/components/Title";
import Loading from "@/app/loading";
import Link from "next/link";

export default function AddEquipment() {
  const [productSKU, setProductSKU] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [num1, setNum1] = useState("");
  const [price, setPrice] = useState("");
  const [num2, setNum2] = useState("");
  const [spec, setSpec] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [building, setBuilding] = useState("");
  const [method, setMethod] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");
  const [group, setGroup] = useState("");
  const [status, setStatus] = useState("");
  const [respondent, setRespondent] = useState("");
  const [qrcode, setQrcode] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: null, error: false });
  // const [message, setMessage] = useState({ text: "", error: false });

  //ฟังก์ชันสำหรับเคลียร์ค่าในแบบฟอร์ม
  function clearFormData() {
    setProductSKU("");
    setImage("");
    setName("");
    setNum1("");
    setPrice("");
    setNum2("");
    setSpec("");
    setDate1("");
    setDate2("");
    setBuilding("");
    setMethod("");
    setBudget("");
    setCategory("");
    setGroup("");
    setStatus("");
    setRespondent("");
    setQrcode("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      setMessage({ ...message, text: " ", error: false });
      const res = await fetch("/api/products/add", {
        // const res = await fetch("http://localhost:3000/api/products/add", {
        method: "POST",
        body: JSON.stringify({
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
          status,
          respondent,
          qrcode,
        }),
      });
      const result = await res.json();
      if (result.error) {
        setMessage({ ...message, text: result.error, error: true });
      } else if (result.productSKU) {
        setMessage({
          ...message,
          text: "Add Product Successfully!",
          error: false,
        });
      }
      clearFormData();
    } catch (error) {
      setMessage({ ...message, text: error.message, error: true });
    } finally {
      setIsLoading(false);
    }
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    // <div className="shadow-lg p-16 mb-5 bg-body rounded">
    //   <div className="flex justify-center items-center text-xl font-semibold">
    //     ครุภัณฑ์คณะมนุษยศาสตร์และสังคมศาสตร์
    //   </div>

    <div className="shadow-lg p-16 mb-5 bg-body rounded">
      {" "}
      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pb-16 p-2"> */}
      <div className="flex flex-col items-center justify-center p-2">
        <Title text="กรอกข้อมูลครุภัณฑ์" />
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
                name="productSKU"
                id="productSKU"
                autoComplete="given-name"
                value={productSKU}
                onChange={(e) => setProductSKU(e.target.value)}
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
                name="image"
                id="image"
                autoComplete="given-name"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* <div className="col">
            <label className="block">
              <span className="text-sm text-gray-600">รูปครุภัณฑ์</span>
              <input
                type="file"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </label>
          </div> */}
          <div className="sm:col-span-2">
            <label
              htmlFor="item"
              className="block font-medium leading-6 text-gray-900"
            >
              รายการครุภัณฑ์
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                name="name"
                id="name"
                autoComplete="family-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="num1"
              className="block font-medium leading-6 text-gray-900"
            >
              หมายเลขครุภัณฑ์
            </label>
            <div className="mt-2">
              <input
                type="number"
                required
                name="num1"
                id="num1"
                autoComplete="given-name"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="price"
              className="block font-medium leading-6 text-gray-900"
            >
              ราคา
            </label>
            <div className="mt-2">
              <input
                type="number"
                required
                name="price"
                id="price"
                autoComplete="family-name"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="num2"
              className="block font-medium leading-6 text-gray-900"
            >
              จำนวน
            </label>
            <div className="mt-2">
              <input
                type="number"
                required
                name="num2"
                id="num2"
                autoComplete="given-name"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="spec"
              className="block font-medium leading-6 text-gray-900"
            >
              คุณลักษณะครุภัณฑ์
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                name="spec"
                id="spec"
                autoComplete="family-name"
                value={spec}
                onChange={(e) => setSpec(e.target.value)}
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="date1"
              className="block font-medium leading-6 text-gray-900"
            >
              วันที่ได้มา
            </label>
            <div className="mt-2">
              <input
                type="Date"
                required
                name="date1"
                id="date1"
                autoComplete="given-name"
                value={date1}
                onChange={(e) => setDate1(e.target.value)}
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="date2"
              className="block font-medium leading-6 text-gray-900"
            >
              ปีที่จัดซื้อ
            </label>
            <div className="mt-2">
              <input
                type="Date"
                required
                name="date2"
                id="date2"
                autoComplete="family-name"
                value={date2}
                onChange={(e) => setDate2(e.target.value)}
                className="text-xl px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="building"
              className="block font-medium leading-6 text-gray-900"
            >
              สถานที่ใช้งาน
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                name="building"
                id="building"
                autoComplete="given-name"
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
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
                name="method"
                id="method"
                autoComplete="given-name"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
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
                name="budget"
                id="budget"
                autoComplete="given-name"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                value={group}
                onChange={(e) => setGroup(e.target.value)}
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
                value={status}
                onChange={(e) => setStatus(e.target.value)}
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
                value={respondent}
                onChange={(e) => setRespondent(e.target.value)}
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
                onChange={(e) => setQrcode(e.target.value)}
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
            กรอกข้อมูลครุภัณฑ์
          </Button>
        </button>
      </div>
    </div>
  );
}
