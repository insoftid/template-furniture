import React from 'react';
import './Navbar.css';

// const Menu = () => {
//   return (
//     <ul className="flex flex-col gap-3 bg-transparent md:flex-row lg:gap-[30px]">
//       <li className="relative">
//         <a href="#" className="navbar-item font-poppins text-sm font-medium uppercase text-black1">
//           beranda
//         </a>
//       </li>
//       <li className="relative">
//         <a href="#" className="navbar-item font-poppins text-sm font-medium uppercase text-black1">
//           tentang kami
//         </a>
//       </li>
//       <li className="relative">
//         <a href="#" className="navbar-item font-poppins text-sm font-medium uppercase text-black1">
//           produk
//         </a>
//       </li>
//       <li className="relative">
//         <a href="#" className="navbar-item font-poppins text-sm font-medium uppercase text-black1">
//           testimoni
//         </a>
//       </li>
//       <li className="relative">
//         <a href="#" className="navbar-item font-poppins text-sm font-medium uppercase text-black1">
//           lokasi
//         </a>
//       </li>
//       <li className="relative">
//         <a href="#" className="navbar-item font-poppins text-sm font-medium uppercase text-black1">
//           kontak
//         </a>
//       </li>
//     </ul>
//   );
// };

// const NavMenu = (props) => {
//   console.log(props.collapse);
//   return (
//     <>
//       {props.collapse == true ? (
//         <Navbar.Collapse className="bg-transparent transition-all duration-300 ease-in-out md:hidden">
//           <Menu />
//         </Navbar.Collapse>
//       ) : (
//         <Navbar className="hidden bg-transparent transition-all duration-300 ease-in-out md:inline-block">
//           <Menu />
//         </Navbar>
//       )}
//     </>
//   );
// };

// const MyNavbar = () => {
//   return (
//     <Navbar
//       fluid
//       rounded
//       className="fixed left-0 top-0 z-20 w-full bg-opacity-75 backdrop-blur-lg backdrop-filter lg:bg-opacity-50"
//     >
//       <div className="flex items-center justify-between gap-5 lg:gap-8">
//         <Navbar.Toggle className="bg-white" />
//         <Navbar.Brand href="https://flowbite-react.com">
//           <img src="assets/Logo.png" className="mr-3 h-9 w-9" alt="InSoft Logo" />
//           <span className="self-center whitespace-nowrap font-montserrat text-lg font-bold text-black1">
//             InSoft.
//           </span>
//         </Navbar.Brand>
//         <NavMenu collapse={false} />
//       </div>
//       <div className="flex items-center gap-2 md:order-2">
//         <div className="flex justify-end gap-1 lg:gap-[10px]">
//           <a href="">
//             <img src="assets/whatsapp.svg" alt="whatsapp" />
//           </a>
//           <a href="">
//             <img src="assets/facebook.svg" alt="facebook" />
//           </a>
//           <a href="">
//             <img src="assets/x.svg" alt="x" />
//           </a>
//           <a href="">
//             <img src="assets/linkedin.svg" alt="linkedin" />
//           </a>
//         </div>
//       </div>
//       <NavMenu collapse={true} />
//     </Navbar>
//   );
// };

const Navbar = () => {
  const [collapse, setCollapse] = React.useState(false);

  return (
    <div>
      <nav
        fluid
        rounded
        className="fixed left-0 top-0 z-20 flex w-full justify-between bg-opacity-75 p-4 backdrop-blur-lg backdrop-filter lg:bg-opacity-50"
      >
        <div className="flex items-center">
          <button
            className="mr-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-slate-200 bg-opacity-50 backdrop-blur-lg backdrop-filter lg:hidden"
            onClick={() => setCollapse(!collapse)}
            type="button"
          >
            <img src="assets/burgerbar.svg" alt="" className="w-3/4" />
          </button>
          <img src="assets/Logo.png" className="mr-3 h-9 w-9" alt="InSoft Logo" />
          <span className="self-center whitespace-nowrap font-montserrat text-lg font-bold text-black1">
            InSoft.
          </span>
          <div className="ml-10 hidden lg:block">
            <ul className="flex flex-col gap-3 bg-transparent md:flex-row lg:gap-[30px]">
              <li className="relative">
                <a
                  href="#"
                  className="navbar-item font-poppins text-sm font-medium uppercase text-black1"
                >
                  beranda
                </a>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="navbar-item font-poppins text-sm font-medium uppercase text-black1"
                >
                  tentang kami
                </a>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="navbar-item font-poppins text-sm font-medium uppercase text-black1"
                >
                  produk
                </a>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="navbar-item font-poppins text-sm font-medium uppercase text-black1"
                >
                  testimoni
                </a>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="navbar-item font-poppins text-sm font-medium uppercase text-black1"
                >
                  lokasi
                </a>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="navbar-item font-poppins text-sm font-medium uppercase text-black1"
                >
                  kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="items-centergap-2 flex md:order-2">
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
      </nav>

      <div
        fluid
        rounded
        className={`fixed left-0 top-[72px] z-20 flex w-full justify-between bg-white bg-opacity-50 p-4 backdrop-blur-lg lg:hidden ${
          collapse ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 0.3s ease' }}
      >
        <ul className="flex flex-col items-start justify-start gap-3 bg-transparent">
          <li className="relative">
            <a
              href="#"
              className="navbar-item font-poppins text-sm font-medium uppercase text-black1"
            >
              beranda
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              className="navbar-item font-poppins text-sm font-medium uppercase text-black1"
            >
              tentang kami
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              className="navbar-item font-poppins text-sm font-medium uppercase text-black1"
            >
              produk
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              className="navbar-item font-poppins text-sm font-medium uppercase text-black1"
            >
              testimoni
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              className="navbar-item font-poppins text-sm font-medium uppercase text-black1"
            >
              lokasi
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              className="navbar-item font-poppins text-sm font-medium uppercase text-black1"
            >
              kontak
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
