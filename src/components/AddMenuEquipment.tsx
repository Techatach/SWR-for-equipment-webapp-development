// import React from "react";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Button from "@mui/material/Button";

// // const getProducts = async () => {
// async function getProducts() {
//   try {
//     const res = await fetch("http://localhost:3000/api/products", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading products: ", error);
//   }
// }

// export default async function AddMenuEquipment() {
//   const { products } = await getProducts();
//   return (
//     <div className="shadow-lg p-16 mb-5 bg-body rounded">
//       <div className="overflow-x-auto ">
//         <div className="text-xl font-semibold">
//           ครุภัณฑ์คณะมนุษยศาสตร์และสังคมศาสตร์
//         </div>
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>รหัส SKU</th>
//               <th>Images</th>
//               <th>รายการครุภัณฑ์</th>
//               <th>หมายเลขครุภัณฑ์</th>
//               <th>ราคา</th>
//               <th>จำนวน</th>
//               <th>คุณลักษณะครุภัณฑ์</th>
//               <th>วันที่ได้มา</th>
//               <th>ปีที่จัดซื้อ</th>
//               <th>สถานที่ใช้งาน</th>
//               <th>วิธีการจัดหา</th>
//               <th>งบประมาณ</th>
//               <th>ประเภทครุภัณฑ์</th>
//               <th>กลุ่มครุภัณฑ์</th>
//               <th>สถานะ</th>
//               <th>ผู้รับผิดชอบ</th>
//               <th>QR Code</th>
//               <th className="text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((data) => (
//               <tr className="hover" key={data._id}>
//                 <td>
//                   <div className="flex items-center gap-3">
//                     {data.productSKU}
//                   </div>
//                 </td>
//                 <td>
//                   <div className="flex items-center gap-3">
//                     <div className="avatar">
//                       <div className="mask mask-squircle h-12 w-12">
//                         {/* <img src="/images/c1.jpg" alt="" />{data.image} */}
//                         <img src={data.image} alt="" />
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 {/* <td>{data.productSKU}</td>
//               <td>{data.image}</td> */}
//                 <td>{data.name}</td>
//                 <td>{data.num1}</td>
//                 <td>{data.price}</td>
//                 <td>{data.num2}</td>
//                 <td>{data.spec}</td>
//                 <td>{data.date1}</td>
//                 <td>{data.date2}</td>
//                 <td>{data.building}</td>
//                 <td>{data.method}</td>
//                 <td>{data.budget}</td>
//                 <td>{data.category}</td>
//                 <td>{data.group}</td>
//                 <td>{data.status}</td>
//                 <td>{data.respondent}</td>
//                 <td>{data.qrcode}</td>
//                 <td>
//                   <div className="flex justify between items-center gap-3">
//                     <Button
//                       variant="contained"
//                       href="/edit"
//                       color="success"
//                       size="large"
//                     >
//                       <EditIcon />
//                     </Button>
//                     <Button
//                       variant="contained"
//                       href="/delete"
//                       color="error"
//                       size="large"
//                     >
//                       <DeleteIcon />
//                     </Button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
