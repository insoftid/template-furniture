import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import TestimoniCard from "../components/TestimoniCard";

const products = [
  {
    id: 1,
    name: "Sofa Putih",
    image: "assets/sofa.png",
  },
  {
    id: 2,
    name: "Sofa Putih",
    image: "assets/sofa.png",
  },
  {
    id: 3,
    name: "Sofa Putih",
    image: "assets/sofa.png",
  },
  {
    id: 4,
    name: "Sofa Putih",
    image: "assets/sofa.png",
  },
  {
    id: 5,
    name: "Sofa Putih",
    image: "assets/sofa.png",
  },
];

const testimoini = [
  {
    id: 1,
    text: "Luar biasa! Furnitur dari Insoft sangat berkualitas dan desainnya modern. Proses pemesanan juga mudah dan pengirimannya tepat waktu. Sangat puas!",
    profil: "assets/testi1.jpeg",
    name: "Elon Musk, Bandung",
    rating: 5,
  },
  {
    id: 2,
    text: "Saya suka dengan pilihan furnitur yang banyak dan harga yang kompetitif. Timnya juga sangat membantu dalam memberikan rekomendasi.",
    profil: "assets/testi1.jpeg",
    name: "Rizal, Bandung",
    rating: 4,
  },
  {
    id: 2,
    text: "Saya suka dengan pilihan furnitur yang banyak dan harga yang kompetitif. Timnya juga sangat membantu dalam memberikan rekomendasi.",
    profil: "assets/testi1.jpeg",
    name: "Rizal, Bandung",
    rating: 5,
  },
];

export default function Home() {
  const [showAll, setShowAll] = React.useState(false);

  const handleShowAll = () => {
    setShowAll((prev) => !prev); // Toggle the state
  };

  const scrollLeft = () => {
    document.getElementById("scroll-container").scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.getElementById("scroll-container").scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="font-poppins">
      <Navbar />

      {/* Hero Section */}
      <section className="px-[75px] py-5 grid grid-cols-12">
        <div className="col-span-8">
          <p className="text-[#333338] text-sm">#Best Quality interior</p>
          <h1 className="text-black1 text-[64px] leading-[62px] font-medium">
            Hadirkan{" "}
            <span className="underline decoration-[#2C57F4]">
              Keindahan dan Kenyamanan
            </span>
            <br />
            di Rumah Anda
          </h1>
        </div>
        <div className="col-span-4">
          <h1 className="font-medium text-[32px]">About Us</h1>
          <p className="font-base text-sm  text-justify">
            Temukan furnitur berkualitas tinggi yang dirancang untuk
            mempercantik interior rumah Anda. Kami menghadirkan solusi desain
            modern yang sesuai dengan gaya hidup Anda.
          </p>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="pt-5 pb-64 relative w-full right-0">
        <div>
          <img className="w-full" src="assets/bg.png" alt="" />
        </div>
        <div className="absolute bottom-28 w-full flex px-[75px]">
          <div className="w-full py-5 flex gap-1 m-auto justify-center items-center">
            <div className="bg-black text-white w-[374px] py-[46px] flex flex-col justify-center items-center">
              <h1 className="text-[68px] font-bold">8+</h1>
              <p className="text-[20px] font-semibold font-montserrat">
                Produk
              </p>
            </div>
            <div className="bg-black text-white w-[374px] py-[46px] flex flex-col justify-center items-center">
              <h1 className="text-[68px] font-bold">1000+</h1>
              <p className="text-[20px] font-semibold font-montserrat">
                Unit Produk Terjual
              </p>
            </div>
            <div className="bg-black text-white w-[374px] py-[46px] flex flex-col justify-center items-center">
              <h1 className="text-[68px] font-bold">5/5</h1>
              <p className="text-[20px] font-semibold font-montserrat">
                Rating Google
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-[75px] pb-14">
        <div className=" grid grid-cols-12">
          <div className="col-span-6">
            <div className="relative">
              <div className="absolute top-4 w-6 h-6 bg-black"></div>
              <h1 className="ml-12 font-semibold text-[44px] font-montserrat uppercase">
                kenali perusahaan kami lebih jauh
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 bg-[#F4F4F5]">
          <div className="col-span-6">
            <img src="assets/img1.png" alt="" />
          </div>
          <div className="col-span-6 py-12 px-12 bg-[#F4F4F5]">
            <h1 className="font-medium text-[32px]">About Us</h1>
            <p className="text-sm text-grey1 font-montserrat leading-tight text-justify">
              Selamat datang di [Nama Perusahaan Anda], mitra terpercaya Anda
              dalam menghadirkan furnitur berkualitas tinggi untuk hunian yang
              lebih nyaman dan indah. Kami adalah perusahaan yang berdedikasi
              untuk memberikan solusi interior terbaik dengan menggabungkan
              keahlian, kreativitas, dan bahan terbaik.
            </p>
            <div className="flex gap-10 mt-5">
              <div>
                <h1 className="font-medium text-[26px]">Visi</h1>
                <p className="text-sm text-grey1 font-montserrat tracking-wide leading-tight text-justify">
                  Menjadi pelopor dalam industri furnitur dengan menghadirkan
                  desain inovatif yang memenuhi kebutuhan setiap rumah.
                </p>
              </div>
              <div>
                <h1 className="font-medium text-[26px] -ml-4">Misi</h1>
                <ul className="list-decimal text-sm text-grey1 font-montserrat leading-tight tracking-wide text-justify">
                  <li>
                    Memberikan furnitur berkualitas tinggi yang mengutamakan
                    estetika dan kenyamanan.
                  </li>
                  <li>
                    Menciptakan pengalaman belanja yang mudah dan menyenangkan
                    bagi pelanggan kami.
                  </li>
                  <li>
                    Menginspirasi hunian impian dengan solusi interior yang
                    terjangkau dan tahan lama.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Section */}
      <section className="px-[75px] bg-black">
        <div className=" grid grid-cols-12">
          <div className="col-span-7">
            <div className="relative">
              <div className="absolute top-4 w-6 h-6 bg-white"></div>
              <h1 className="ml-10 my-[30px] font-medium text-[44px] font-montserrat leading-tight text-white uppercase">
                keunggulan produk kami untuk anda
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-12 bg-white">
            <div className="col-span-6 py-[52px] px-[60px]">
              <h1 className="text-[26px] py-2 font-medium underline decoration-[#2C57F4]">
                Nilai-Nilai Kami
              </h1>
              <ul className="px-5 relative list-decimal font-montserrat text-lg font-semibold">
                <li className="py-1">
                  <h2 className="list-decimal font-semibold font-montserrat text-lg">
                    Kualitas Unggul
                  </h2>
                  <p className="text-sm font-normal text-justify text-grey1">
                    Setiap produk dirancang dengan standar tinggi agar mampu
                    memenuhi harapan Anda untuk hunian yang sempurna.
                  </p>
                </li>
                <li className="py-1">
                  <h2 className="list-decimal font-semibold font-montserrat text-lg">
                    Desain yang Modern
                  </h2>
                  <p className="text-sm font-normal text-justify text-grey1">
                    Dengan berbagai pilihan desain mulai dari minimalis hingga
                    klasik elegan, kami hadir untuk mempercantik setiap sudut
                    rumah Anda.
                  </p>
                </li>
                <li className="py-1">
                  <h2 className="list-decimal font-semibold font-montserrat text-lg">
                    Perawatan Mudah dan Tahan Lama
                  </h2>
                  <p className="text-sm font-normal text-justify text-grey1">
                    Furnitur kami didesain agar mudah dirawat dan tetap tampil
                    baru untuk waktu yang lama, menghemat waktu dan biaya
                    perawatan.
                  </p>
                </li>
                <li className="py-1">
                  <h2 className="list-decimal font-semibold font-montserrat text-lg">
                    Pilihan Beragam untuk Semua Kebutuhan
                  </h2>
                  <p className="text-sm font-normal text-justify text-grey1">
                    Kami menawarkan berbagai pilihan produk, mulai dari furnitur
                    untuk ruang tamu, kamar tidur, hingga dekorasi rumah,
                    semuanya dapat disesuaikan dengan selera dan kebutuhan Anda.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-span-6">
              <img src="assets/img2.png" alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="px-[75px]">
        <div className=" grid grid-cols-12">
          <div className="col-span-8">
            <div className="relative">
              <div className="absolute top-4 w-6 h-6 bg-black"></div>
              <h1 className="ml-10 mt-[30px] font-semibold text-[44px] leading-tight font-montserrat uppercase">
                produk furnitur untuk hunian anda
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 my-[10px]">
          {showAll
            ? products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : products
                .slice(0, 3)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
        </div>
        {showAll ? (
          <button
            className="bg-black text-white text-sm px-[10px] py-[8px] hover:bg-slate-700 transition-all duration-200 ease-in-out"
            type="button"
            onClick={handleShowAll}
          >
            lihat lebih sedikit produk
          </button>
        ) : (
          <button
            className="bg-black text-white text-sm px-[10px] py-[8px] hover:bg-slate-700 transition-all duration-200 ease-in-out"
            type="button"
            onClick={handleShowAll}
          >
            lihat produk lainnya
          </button>
        )}
      </section>

      {/* Testimoni Section */}
      <section className="px-[75px] pb-10">
        <div className=" grid grid-cols-12 gap-10">
          <div className="col-span-6">
            <div className="relative">
              <div className="absolute top-4 w-6 h-6 bg-black"></div>
              <h1 className="ml-10 mt-[30px] font-semibold text-[44px] leading-tight font-montserrat uppercase">
                apa kata pelanggan kami
              </h1>
            </div>
            <p className="text-sm text-grey1 ml-10 text-justify">
              Kami bangga telah menjadi bagian dari perjalanan banyak pelanggan
              untuk menciptakan ruang impian mereka. Inilah beberapa cerita dan
              ulasan dari mereka yang telah merasakan kualitas produk dan
              layanan kami
            </p>
          </div>
          {/* absolute left-0 top-1/2 transform -translate-y-1/2 */}
          {/* absolute right-0 top-1/2 transform -translate-y-1/2  */}
          <div className="col-span-6 w-full">
            <div id="scroll-container" className="flex gap-3 overflow-x-scroll">
              {/* p-5 flex flex-col justify-between w-[327px] h-[344.58px] */}
              {
                testimoini.map((data) => (
                  <TestimoniCard key={data.id} testimoni={data}/>
                ))
              }
            </div>
            <div className="w-full flex justify-center gap-2 mt-2">
              <button onClick={() => scrollLeft()} className="bg-black p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="20"
                  height="10"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <button onClick={() => scrollRight()} className="bg-black p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="20"
                  height="10"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section className="w-full bg-black p-[75px] flex flex-col gap-16">
        <div id="kontak" className="grid grid-cols-2 gap-10">
          <div className="flex gap-[20px]">
            <div className="p-3 mt-4 h-6 bg-white"></div>
            <div className="flex gap-3 flex-col">
              <h1 className="font-semibold text-white text-[44px] font-montserrat uppercase">
                Hubungi Kami
              </h1>
              <p className="text-sm text-white font-poppins text-justify">
                Kami bangga telah menjadi bagian dari perjalanan banyak
                pelanggan untuk menciptakan ruang impian mereka. Inilah beberapa
                cerita dan ulasan dari mereka yang telah merasakan kualitas
                produk dan layanan kami
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.772802288226!2d109.59421807501859!3d-7.7075120763473715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7acbccdabcbe0b%3A0x1280deb733d08431!2sFadhlu%20Ibnu!5e0!3m2!1sid!2sid!4v1737617674162!5m2!1sid!2sid"
                className="w-full"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div>
                <p className="font-medium font-poppins text-white">
                  📍 Kunjungi showroom atau kantor kami di:
                </p>
                <p className="text-sm text-white font-poppins">
                  Jl. Bukit Lestari No. 45, Kelurahan Sekaran, Kecamatan
                  Gunungpati, Kota Semarang, Jawa Tengah 50229
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-10 bg-[#1E1E1E] h-fit">
            <h1 className="font-medium text-[26px] text-white">
              Formulir Kontak
            </h1>
            <p className="text-sm text-white font-poppins text-justify">
              Isi formulir di bawah ini, dan tim kami akan segera menghubungi
              Anda:
            </p>
            <form className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-white font-poppins">Nama</label>
                <input
                  placeholder="Masukkan nama anda"
                  className="bg-transparent p-3 text-sm text-white font-poppins border-white border outline-white"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-white font-poppins">
                  Email atau Nomor WhatsApp
                </label>
                <input
                  placeholder="Masukkan email atau nomor whatsapp anda"
                  className="bg-transparent p-3 text-sm text-white font-poppins border-white border outline-white"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-white font-poppins">Pesan</label>
                <textarea
                  placeholder="Masukkan pesan anda"
                  className="bg-transparent p-3 text-sm text-white font-poppins border-white border outline-white"
                  type="text"
                />
              </div>
              <button className="bg-black text-white font-poppins py-3 focus:border-white focus:border transition-all duration-300">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
        <hr />
        <Footer />
      </section>
    </div>
  );
}
// export default function Home() {

//   return (
//     <div className="container font-poppins">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="px-[75px] py-5 grid grid-cols-12">
//         <div className="col-span-8">
//           <p className="text-[#333338] text-sm">#Best Quality interior</p>
//           <h1 className="text-black1 text-[64px] leading-[62px] font-medium">
//             Hadirkan{" "}
//             <span className="underline decoration-[#2C57F4]">
//               Keindahan dan Kenyamanan
//             </span>
//             <br />
//             di Rumah Anda
//           </h1>
//         </div>
//         <div className="col-span-4">
//           <h1 className="font-medium text-[32px]">About Us</h1>
//           <p className="font-base text-sm  text-justify">
//             Temukan furnitur berkualitas tinggi yang dirancang untuk
//             mempercantik interior rumah Anda. Kami menghadirkan solusi desain
//             modern yang sesuai dengan gaya hidup Anda.
//           </p>
//         </div>
//       </section>

//       {/* Rating Section */}
//       <section className="pt-5 pb-64 relative">
//         <div>
//           <img src="assets/bg.png" alt="" />
//         </div>
//         <div className="absolute bottom-16 px-[75px] py-5 flex gap-1">
//           <div className="bg-black text-white w-[374px] py-[46px] flex flex-col justify-center items-center">
//             <h1 className="text-[68px] font-bold">8+</h1>
//             <p className="text-[20px] font-semibold font-montserrat">Produk</p>
//           </div>
//           <div className="bg-black text-white w-[374px] py-[46px] flex flex-col justify-center items-center">
//             <h1 className="text-[68px] font-bold">1000+</h1>
//             <p className="text-[20px] font-semibold font-montserrat">
//               Unit Produk Terjual
//             </p>
//           </div>
//           <div className="bg-black text-white w-[374px] py-[46px] flex flex-col justify-center items-center">
//             <h1 className="text-[68px] font-bold">5/5</h1>
//             <p className="text-[20px] font-semibold font-montserrat">
//               Rating Google
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="px-[75px] pb-14">
//         <div className=" grid grid-cols-12">
//           <div className="col-span-7">
//             <div className="relative">
//               <div className="absolute top-4 w-6 h-6 bg-black"></div>
//               <h1 className="ml-10 font-semibold text-[44px] leading-tight font-montserrat uppercase">
//                 kenali perusahaan kami lebih jauh
//               </h1>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-12 bg-[#F4F4F5]">
//           <div className="col-span-6">
//             <img src="assets/img1.png" alt="" />
//           </div>
//           <div className="col-span-6 py-12 px-12 bg-[#F4F4F5]">
//             <h1 className="font-medium text-[32px]">About Us</h1>
//             <p className="text-sm text-grey1 font-montserrat leading-tight text-justify">
//               Selamat datang di [Nama Perusahaan Anda], mitra terpercaya Anda
//               dalam menghadirkan furnitur berkualitas tinggi untuk hunian yang
//               lebih nyaman dan indah. Kami adalah perusahaan yang berdedikasi
//               untuk memberikan solusi interior terbaik dengan menggabungkan
//               keahlian, kreativitas, dan bahan terbaik.
//             </p>
//             <div className="flex gap-10 mt-5">
//               <div>
//                 <h1 className="font-medium text-[26px]">Visi</h1>
//                 <p className="text-sm text-grey1 font-montserrat tracking-wide leading-tight text-justify">
//                   Menjadi pelopor dalam industri furnitur dengan menghadirkan
//                   desain inovatif yang memenuhi kebutuhan setiap rumah.
//                 </p>
//               </div>
//               <div>
//                 <h1 className="font-medium text-[26px] -ml-4">Misi</h1>
//                 <ul className="list-decimal text-sm text-grey1 font-montserrat leading-tight tracking-wide text-justify">
//                   <li>
//                     Memberikan furnitur berkualitas tinggi yang mengutamakan
//                     estetika dan kenyamanan.
//                   </li>
//                   <li>
//                     Menciptakan pengalaman belanja yang mudah dan menyenangkan
//                     bagi pelanggan kami.
//                   </li>
//                   <li>
//                     Menginspirasi hunian impian dengan solusi interior yang
//                     terjangkau dan tahan lama.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
