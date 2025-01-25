import React from "react";
import "./Navbar.css";
import { Button, Navbar } from "flowbite-react";

const Menu = () => {
  return (
    <ul className="flex flex-col md:flex-row gap-3 lg:gap-[30px]">
      <li className="relative">
        <a
          href="#"
          className="navbar-item text-black1 font-medium font-poppins text-sm uppercase"
        >
          beranda
        </a>
      </li>
      <li className="relative">
        <a
          href="#"
          className="navbar-item text-black1 font-medium font-poppins text-sm uppercase"
        >
          tentang kami
        </a>
      </li>
      <li className="relative">
        <a
          href="#"
          className="navbar-item text-black1 font-medium font-poppins text-sm uppercase"
        >
          produk
        </a>
      </li>
      <li className="relative">
        <a
          href="#"
          className="navbar-item text-black1 font-medium font-poppins text-sm uppercase"
        >
          testimoni
        </a>
      </li>
      <li className="relative">
        <a
          href="#"
          className="navbar-item text-black1 font-medium font-poppins text-sm uppercase"
        >
          lokasi
        </a>
      </li>
      <li className="relative">
        <a
          href="#"
          className="navbar-item text-black1 font-medium font-poppins text-sm uppercase"
        >
          kontak
        </a>
      </li>
    </ul>
  );
};

const NavMenu = (props ) => {
  console.log(props.collapse);
  return (
    <>
      {props.collapse == true ? (
        <Navbar.Collapse className="transition-all duration-300 ease-in-out  md:hidden">
          <Menu />
        </Navbar.Collapse>
      ) : (
        <Navbar className="transition-all duration-300 ease-in-out hidden md:inline-block">
          <Menu />
        </Navbar>
      )}
    </>
  );
};

const MyNavbar = () => {
  return (
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-20">
      <div className="flex justify-between items-center gap-5 lg:gap-8">
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="assets/Logo.png"
            className="mr-3 w-9 h-9"
            alt="InSoft Logo"
          />
          <span className="self-center whitespace-nowrap text-lg font-bold font-montserrat text-black1">
            InSoft.
          </span>
        </Navbar.Brand>
        <NavMenu collapse={false} />
      </div>
      <div className="flex md:order-2 items-center gap-2">
        <div className="flex gap-1 lg:gap-[10px] justify-end">
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
        <Navbar.Toggle />
      </div>
      <NavMenu collapse={true} />
    </Navbar>
  );
};

{
  /* // <nav className="p-8 flex justify-between items-center">
    //   <div className="flex gap-2 items-center">
    //     
    //     <h1 className="text-lg font-semibold font-montserrat text-black1">
    //       InSoft.
    //     </h1>
    //     <div className="ml-[30px]">
    //       
    //     </div>
    //   </div>
    //   
    //     
    //   </div>
    // </nav> */
}

export default MyNavbar;
