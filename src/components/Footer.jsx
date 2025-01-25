import React from 'react';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <div className="col-span-2 flex flex-col gap-5">
        <div className="align-center flex gap-3">
          <img src="assets/Logo.png" alt="logo" className="h-9 w-9" />
          <h1 className="p-0 font-montserrat text-lg font-semibold text-white">InSoft.</h1>
        </div>
        <h1 className="text-[52px] font-medium leading-[62px] text-white lg:text-[64px]">
          Hadirkan <span className="underline decoration-[#2C57F4]">Keindahan dan Kenyamanan</span>{' '}
          di Rumah Anda
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 flex flex-col gap-3 md:order-1">
          <h1 className="font-montserrat text-[26px] font-semibold text-white underline">Menu</h1>
          <ul className="grid grid-cols-2 gap-1 md:grid-cols-1">
            <li className="relative">
              <a
                href="#"
                className="navbar-item font-poppins text-sm font-medium uppercase text-white"
              >
                beranda
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="navbar-item font-poppins text-sm font-medium uppercase text-white"
              >
                tentang kami
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="navbar-item font-poppins text-sm font-medium uppercase text-white"
              >
                produk
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="navbar-item font-poppins text-sm font-medium uppercase text-white"
              >
                testimoni
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="navbar-item font-poppins text-sm font-medium uppercase text-white"
              >
                lokasi
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="navbar-item font-poppins text-sm font-medium uppercase text-white"
              >
                kontak
              </a>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <h1 className="font-montserrat text-[26px] font-semibold text-white underline">
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
