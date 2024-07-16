import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import Link from "next/link";

export default function Menubar() {
  return (
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

              <th>id</th>
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
              <th>สภาพการใช้งาน</th>
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
                <div className="flex items-center gap-3">1</div>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src="/images/c1.jpg" alt="" />
                    </div>
                  </div>
                  {/* <div>
                    <div className="font-bold">คอมพิวเตอร์</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div> */}
                </div>
              </td>
              <td>คอมพิวเตอร์</td>
              <td>25326598</td>
              <td>25000</td>
              <td>25</td>
              <td>ปกติ</td>
              <td>25/09/2567</td>
              <td>25/10/2567</td>
              <td>โปรแกรมดนตรีสากล</td>
              <td>สอบราคา</td>
              <td>งบประมาณแผ่นดิน</td>
              <td>ครุภัณฑ์สำนักงาน</td>
              <td> ราคามากกว่า 20,000 และน้อยกว่า 20,000 บาท</td>
              <td>แทงจำหน่าย</td>
              <td>อาจารย์</td>
              <td>ปกติ</td>
              <td>Bar Code</td>
              <td>
                <div className="flex justify between items-center gap-3">
                  <Button
                    variant="contained"
                    href="/edit"
                    color="success"
                    size="large"
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    variant="contained"
                    href="/delete"
                    color="error"
                    size="large"
                  >
                    <DeleteIcon />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
