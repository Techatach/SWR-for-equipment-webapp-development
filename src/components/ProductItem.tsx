import React from "react";
import EditProductButton from "@/components/EditProductButton";
import DeleteProductButton from "@/components/DeleteProductButton";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

export default function ProductItem({ data, refreshProducts }) {
  return (
    <div className="p-1">
      {/* <div className="flex justify-between mx-auto text-sm m-l">
        <div className="bg-gray-200 px-1 w-1/2 border border-white">
          <div>รหัส SKU</div>
          <div className="text-center w-1/2">{data.productSKU}</div>
        </div>
      </div>
      <div className="flex justify-between mx-auto text-sm m-l">
        <div className="bg-gray-200 px-1 w-1/2 border border-white">
          <div>รูปครุภัณฑ์</div>
          <div className="text-center w-1/2">{data.name}</div>
        </div>
      </div>
      <div className="flex justify-between mx-auto text-sm m-l">
        <div className="bg-gray-200 px-1 w-1/2 border border-white">
          <div>รายการครุภัณฑ์</div>
          <div className="text-center w-1/2">{data.item}</div>
        </div>
      </div>
      <div className="flex justify-between mx-auto text-sm m-l">
        <div className="bg-gray-200 px-1 w-1/2 border border-white">
          <div>หมายเลขครุภัณฑ์</div>
          <div className="text-center w-1/2">{data.num1}</div>
        </div>
      </div>
      <div className="flex justify-between mx-auto text-sm m-l">
        <div className="bg-gray-200 px-1 w-1/2 border border-white">
          <div>ราคา</div>
          <div className="text-center w-1/2">{data.price}</div>
        </div>
      </div>
      <div className="flex justify-between mx-auto text-sm m-l">
        <div className="bg-gray-200 px-1 w-1/2 border border-white">
          <div>ราคา</div>
          <div className="text-center w-1/2">{data.price}</div>
        </div>
      </div> */}

      <div className="shadow-lg p-16 mb-5 bg-body rounded">
        <div className="overflow-x-auto ">
          <div className="text-xl font-semibold">
            ครุภัณฑ์คณะมนุษยศาสตร์และสังคมศาสตร์
          </div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}

                <th>รหัส SKU</th>
                <th>Images</th>
                <th>รายการครุภัณฑ์</th>
                <th>หมายเลขครุภัณฑ์</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th>คุณลักษณะครุภัณฑ์</th>
                <th>วันที่ได้มา</th>
                <th>ปีที่จัดซื้อ</th>
                <th>สถานที่ใช้งาน</th>
                <th>วิธีการจัดหา</th>
                <th>งบประมาณ</th>
                <th>ประเภทครุภัณฑ์</th>
                <th>กลุ่มครุภัณฑ์</th>
                <th>สถานะ</th>
                <th>ผู้รับผิดชอบ</th>
                <th>QR Code</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
                <td>
                  <div className="flex items-center gap-3">
                    {data.productSKU}
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        {/* <img src="/images/c1.jpg" alt="" /> */}
                        <img src={data.image} alt="" />
                      </div>
                    </div>
                    {/* <div>
                    <div className="font-bold">คอมพิวเตอร์</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div> */}
                  </div>
                </td>
                {/* <td>{data.productSKU}</td>
                <td>{data.image}</td> */}
                <td>{data.name}</td>
                <td>{data.num1}</td>
                <td>{data.price}</td>
                <td>{data.num2}</td>
                <td>{data.spec}</td>
                <td>{data.date1}</td>
                <td>{data.date2}</td>
                <td>{data.building}</td>
                <td>{data.method}</td>
                <td>{data.budget}</td>
                <td>{data.category}</td>
                <td>{data.group}</td>
                <td>{data.status}</td>
                <td>{data.respondent}</td>
                <td>{data.qrcode}</td>
                <td>
                  <div className="flex justify between items-center gap-3">
                    <Button
                      variant="contained"
                      href="/edit"
                      color="success"
                      size="large"
                    >
                      {/* <EditIcon sku={data.productSKU} /> */}
                      <EditProductButton sku={data.productSKU} />

                    </Button>
                    <Button
                      variant="contained"
                      href="/delete"
                      color="error"
                      size="large"
                    >
                      {/* <DeleteIcon
                        product={data}
                        refreshProducts={refreshProducts}
                      /> */}
                      <DeleteProductButton
                        product={data}
                        refreshProducts={refreshProducts}
                      />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="flex justify-center mx-auto text-sm m-1">
        <EditProductButton sku={data.productSKU} />
        <DeleteProductButton product={data} refreshProducts={refreshProducts} />
      </div> */}
    </div>
  );
}
