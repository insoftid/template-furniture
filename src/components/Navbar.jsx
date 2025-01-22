import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="p-8 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img src="assets/Logo.png" alt="logo" className="w-9 h-9" />
        <h1 className="text-lg font-semibold font-montserrat text-black1">
          InSoft.
        </h1>
        <div className="ml-[30px]">
          <ul className="flex gap-[30px]">
            <li className="relative">
              <a href="#" className="navbar-item text-black1 font-medium font-poppins text-sm uppercase">
                beranda
              </a>
            </li>
            <li className="relative">
              <a href="#" className="navbar-item text-black1 font-medium font-poppins text-sm uppercase">
                tentang kami
              </a>
            </li>
            <li className="relative">
              <a href="#" className="navbar-item text-black1 font-medium font-poppins text-sm uppercase">
                produk
              </a>
            </li>
            <li className="relative">
              <a href="#" className="navbar-item text-black1 font-medium font-poppins text-sm uppercase">
                testimoni
              </a>
            </li>
            <li className="relative">
              <a href="#" className="navbar-item text-black1 font-medium font-poppins text-sm uppercase">
                lokasi
              </a>
            </li>
            <li className="relative">
              <a href="#" className="navbar-item text-black1 font-medium font-poppins text-sm uppercase">
                kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-[10px] justify-end">
        <a href="">
            <img src="assets/whatsapp.svg" alt="whatsapp" />
        </a>
        <a href="">
            <img src="assets/facebook.svg" alt="facebook" />
        </a>
        <a href="">
            <img src="assets/x.svg" alt="x" />
        </a>
        <a href="">
            <img src="assets/linkedin.svg" alt="linkedin" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
