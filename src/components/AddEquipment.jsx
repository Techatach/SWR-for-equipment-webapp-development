import React from "react";
// import Link from "next/link"

export default function AddEquipment() {
  return (
    <div>
      <div className="flex justify-center items-center text-xl font-semibold mt-16">
        ครุภัณฑ์คณะมนุษยศาสตร์และสังคมศาสตร์
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 py-10 px-60">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            รูปครุภัณฑ์
          </label>
          <div className="mt-2">
            <input
              type="file"
              name="name"
              id="name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="item"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            รายการครุภัณฑ์
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="item"
              id="item"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="num1"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            หมายเลขครุภัณฑ์
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="num1"
              id="num1"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            ราคา
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="price"
              id="price"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="num2"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            จำนวน
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="num2"
              id="num2"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="spec"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            คุณลักษณะครุภัณฑ์
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="spec"
              id="spec"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="date1"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            วันที่ได้มา
          </label>
          <div className="mt-2">
            <input
              type="Date"
              name="date1"
              id="date1"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="date2"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            ปีที่จัดซื้อ
          </label>
          <div className="mt-2">
            <input
              type="Date"
              name="date2"
              id="date2"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="building"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            สถานที่ใช้งาน
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="building"
              id="building"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="method"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            วิธีการจัดหา
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="method"
              id="method"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="budget"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            งบประมาณ
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="budget"
              id="budget"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            ประเภทครุภัณฑ์
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="category"
              id="category"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="group"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            กล่มครุภัณฑ์
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="group"
              id="group"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="status"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            สถานะ
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="status"
              id="status"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="respondent"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            ผู้รับผิดชอบ
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="respondent"
              id="respondent"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="qrcode"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            QR Code
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="qrcode"
              id="qrcode"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
