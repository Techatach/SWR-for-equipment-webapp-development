import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content shadow-lg p-16 mb-5 bg-body rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">หน้าหลัก</a>
          <a className="link link-hover">รายการครุภัณฑ์</a>
          {/* <a className="link link-hover">พัสดุ</a> */}
          <a className="link link-hover">กรอกข้อมูลครุภัณฑ์</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <Button variant="contained" color="success" size="large">
                <TwitterIcon />
              </Button>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" color="error" size="large">
                <YouTubeIcon />
              </Button>
            </a>
            <a href="#">
              <Button variant="contained" color="primary" size="large">
                <FacebookIcon />
              </Button>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © ${new Date().getFullYear()} - All right reserved by
            Chandrakasem Rajabhat University
          </p>
        </aside>
      </footer>
    </div>
  );
}
