// "use client";

// import { useState } from "react";
// import Title from "@/components/Title";
// import Loading from "@/app/loading";
// import Link from "next/link";

// export default function AddProductForm() {
//   const [image, setImage] = useState("");
//   const [name, setName] = useState("");
//   const [num1, setNum1] = useState("");
//   const [price, setPrice] = useState("");
//   const [num2, setNum2] = useState("");
//   const [spec, setSpec] = useState("");
//   const [date1, setDate1] = useState("");
//   const [date2, setDate2] = useState("");
//   const [building, setBuilding] = useState("");
//   const [method, setMethod] = useState("");
//   const [budget, setBudget] = useState("");
//   const [category, setCategory] = useState("");
//   const [group, setGroup] = useState("");
//   const [status, setStatus] = useState("");
//   const [respondent, setRespondent] = useState("");
//   const [qrcode, setQrcode] = useState("");

//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState({ text: null, error: false });
//   // const [message, setMessage] = useState({ text: "", error: false });

//   //ฟังก์ชันสำหรับเคลียร์ค่าในแบบฟอร์ม
//   function clearFormData() {
//     setImage("");
//     setName("");
//     setNum1("");
//     setPrice("");
//     setNum2("");
//     setSpec("");
//     setDate1("");
//     setDate2("");
//     setBuilding("");
//     setMethod("");
//     setBudget("");
//     setCategory("");
//     setGroup("");
//     setStatus("");
//     setRespondent("");
//     setQrcode("");
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       setMessage({ ...message, text: "", error: false });
//       const res = await fetch("http://localhost:3000/api/products/add", {
//         method: "POST",
//         body: JSON.stringify({
//           image,
//           name,
//           num1,
//           price,
//           num2,
//           spec,
//           date1,
//           date2,
//           building,
//           method,
//           budget,
//           category,
//           group,
//           status,
//           respondent,
//           qrcode,
//         }),
//       });
//       const result = await res.json();
//       if (result.error) {
//         setMessage({ ...message, text: result.error, error: true });
//       } else if (result.productSKU) {
//         setMessage({
//           ...message,
//           text: "Add Product Successfully!",
//           error: false,
//         });
//       }
//       clearFormData();
//     } catch (error) {
//       setMessage({ ...message, text: error.message, error: true });
//     } finally {
//       setIsLoading(false);
//     }
//   }
//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <div className="shadow-lg p-16 mb-5 bg-body rounded">
//       {" "}
//       {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pb-16 p-2"> */}
//       <div className="flex flex-col items-center justify-center p-2">
//         <Title text="กรอกข้อมูลครุภัณฑ์" />
//       </div>
//       {message.text && (
//         <div
//           className={
//             `text-center w-full max-w-xl ${message.error? 'bg-red-200':'bg-green-200'} rounded-sm shadow-md p-4 my-2`
//           }
//         >
//           {message.text}
//         </div>
//       )}
//       <form
//         onSubmit={handleSubmit}
//         // className="w-full max-w-xl bg-white rounded-sm shadow-md p-6"
//         className="flex justify-center items-center"
//       >
//         <div className="mt-4">
//           <div className="">
//             <div className="mt-4">
//               <div className="row">
//                 <div className="col">
//                   <label className="block">
//                     <span className="text-sm text-gray-600">รูปครุภัณฑ์</span>
//                     <input
//                       type="file"
//                       required
//                       value={image}
//                       onChange={(e) => setImage(e.target.value)}
//                       className="form-control mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     />
//                   </label>
//                 </div>

//                 <div className="col">
//                   <label className="block mt-4">
//                     <span className="text-sm text-gray-600">
//                       รายการครุภัณฑ์
//                     </span>
//                     <input
//                       type="text"
//                       required
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="form-control mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     />
//                   </label>
//                 </div>

//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">หมายเลขครุภัณฑ์</span>
//                   <input
//                     type="number"
//                     required
//                     value={num1}
//                     onChange={(e) => setNum1(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">ราคา</span>
//                   <input
//                     type="number"
//                     required
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">จำนวน</span>
//                   <input
//                     type="number"
//                     required
//                     value={num2}
//                     onChange={(e) => setNum2(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">
//                     คุณลักษณะครุภัณฑ์
//                   </span>
//                   <input
//                     type="text"
//                     required
//                     value={spec}
//                     onChange={(e) => setSpec(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">วันที่ได้มา</span>
//                   <input
//                     type="Date"
//                     required
//                     value={date1}
//                     onChange={(e) => setDate1(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">ปีที่จัดซื้อ</span>
//                   <input
//                     type="Date"
//                     required
//                     value={date2}
//                     onChange={(e) => setDate2(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">สถานที่ใช้งาน</span>
//                   <input
//                     type="text"
//                     required
//                     value={building}
//                     onChange={(e) => setBuilding(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">วิธีการจัดหา</span>
//                   <input
//                     type="text"
//                     required
//                     value={method}
//                     onChange={(e) => setMethod(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">งบประมาณ</span>
//                   <input
//                     type="number"
//                     required
//                     value={budget}
//                     onChange={(e) => setBudget(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">ประเภทครุภัณฑ์</span>
//                   <input
//                     type="text"
//                     required
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">กลุ่มครุภัณฑ์</span>
//                   <input
//                     type="text"
//                     required
//                     value={group}
//                     onChange={(e) => setGroup(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">สถานะการใช้งาน</span>
//                   <input
//                     type="text"
//                     required
//                     value={status}
//                     onChange={(e) => setStatus(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">ผู้รับผิดชอบ</span>
//                   <input
//                     type="text"
//                     required
//                     value={respondent}
//                     onChange={(e) => setRespondent(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span className="text-sm text-gray-600">QR Code</span>
//                   <input
//                     type="barcode"
//                     required
//                     value={qrcode}
//                     onChange={(e) => setQrcode(e.target.value)}
//                     className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center mt-6">
//             <Link
//               href="/products"
//               className="text-center w-24 mr-3 px-2 py-1 text-white bg-green-600 rounded-sm hover:bg-green-400 focus:outline-none active:bg-green-600"
//             >
//               หน้าสินค้า
//             </Link>

//             <button
//               type="submit"
//               className="px-2 py-1 text-white bg-blue-600 rounded-sm hover:bg-blue-400 focus:outline-none active:bg-blue-600"
//             >
//               เพิ่มสินค้า
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
