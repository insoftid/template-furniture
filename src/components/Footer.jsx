import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="flex flex-col gap-5 col-span-2">
        <div className="flex gap-3 align-center">
          <img src="assets/Logo.png" alt="logo" className="w-9 h-9" />
          <h1 className="text-lg font-semibold font-montserrat text-white p-0">
            InSoft.
          </h1>
        </div>
        <h1 className="text-white text-[52px] lg:text-[64px] leading-[62px] font-medium">
          Hadirkan{" "}
          <span className="underline decoration-[#2C57F4]">
            Keindahan dan Kenyamanan
          </span>{" "}
          di Rumah Anda
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-3 order-2 md:order-1">
          <h1 className="text-white font-semibold font-montserrat text-[26px] underline">
            Menu
          </h1>
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-1">
            <li className="relative">
              <a
                href="#"
                className="navbar-item text-white font-medium font-poppins text-sm uppercase"
              >
                beranda
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="navbar-item text-white font-medium font-poppins text-sm uppercase"
              >
                tentang kami
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="navbar-item text-white font-medium font-poppins text-sm uppercase"
              >
                produk
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="navbar-item text-white font-medium font-poppins text-sm uppercase"
              >
                testimoni
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="navbar-item text-white font-medium font-poppins text-sm uppercase"
              >
                lokasi
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="navbar-item text-white font-medium font-poppins text-sm uppercase"
              >
                kontak
              </a>
            </li>
          </ul>
        </div>
        <div className="md:order-2 order-1">
          <h1 className="text-white font-semibold font-montserrat text-[26px] underline">
            Media Sosial
          </h1>
          <div className="flex gap-3">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
