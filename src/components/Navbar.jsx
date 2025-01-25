import React from 'react';
import './Navbar.css';
import { Button, Navbar } from 'flowbite-react';

const Menu = () => {
  return (
    <ul className="flex flex-col gap-3 bg-transparent md:flex-row lg:gap-[30px]">
      <li className="relative">
        <a href="#" className="navbar-item font-poppins text-sm font-medium uppercase text-black1">
          beranda
        </a>
      </li>
      <li className="relative">
        <a href="#" className="navbar-item font-poppins text-sm font-medium uppercase text-black1">
          tentang kami
        </a>
      </li>
      <li className="relative">
        <a href="#" className="navbar-item font-poppins text-sm font-medium uppercase text-black1">
          produk
        </a>
      </li>
      <li className="relative">
        <a href="#" className="navbar-item font-poppins text-sm font-medium uppercase text-black1">
          testimoni
        </a>
      </li>
      <li className="relative">
        <a href="#" className="navbar-item font-poppins text-sm font-medium uppercase text-black1">
          lokasi
        </a>
      </li>
      <li className="relative">
        <a href="#" className="navbar-item font-poppins text-sm font-medium uppercase text-black1">
          kontak
        </a>
      </li>
    </ul>
  );
};

const NavMenu = (props) => {
  console.log(props.collapse);
  return (
    <>
      {props.collapse == true ? (
        <Navbar.Collapse className="bg-transparent transition-all duration-300 ease-in-out md:hidden">
          <Menu />
        </Navbar.Collapse>
      ) : (
        <Navbar className="hidden bg-transparent transition-all duration-300 ease-in-out md:inline-block">
          <Menu />
        </Navbar>
      )}
    </>
  );
};

const MyNavbar = () => {
  return (
    <Navbar
      fluid
      rounded
      className="fixed left-0 top-0 z-20 w-full bg-opacity-75 backdrop-blur-lg backdrop-filter lg:bg-opacity-50"
    >
      <div className="flex items-center justify-between gap-5 lg:gap-8">
        <Navbar.Toggle className="bg-white" />
        <Navbar.Brand href="https://flowbite-react.com">
          <img src="assets/Logo.png" className="mr-3 h-9 w-9" alt="InSoft Logo" />
          <span className="self-center whitespace-nowrap font-montserrat text-lg font-bold text-black1">
            InSoft.
          </span>
        </Navbar.Brand>
        <NavMenu collapse={false} />
      </div>
      <div className="flex items-center gap-2 md:order-2">
        <div className="flex justify-end gap-1 lg:gap-[10px]">
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
