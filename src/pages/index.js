import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import TestimoniCard from '../components/TestimoniCard';

const products = [
  {
    id: 1,
    name: 'Sofa Putih',
    image: 'assets/sofa.png',
  },
  {
    id: 2,
    name: 'Sofa Putih',
    image: 'assets/sofa.png',
  },
  {
    id: 3,
    name: 'Sofa Putih',
    image: 'assets/sofa.png',
  },
  {
    id: 4,
    name: 'Sofa Putih',
    image: 'assets/sofa.png',
  },
  {
    id: 5,
    name: 'Sofa Putih',
    image: 'assets/sofa.png',
  },
];

const testimoni = [
  {
    id: 1,
    text: 'Luar biasa! Furnitur dari Insoft sangat berkualitas dan desainnya modern. Proses pemesanan juga mudah dan pengirimannya tepat waktu. Sangat puas!',
    profil: 'assets/testi1.jpeg',
    name: 'Elon Musk, Bandung',
    rating: 5,
  },
  {
    id: 2,
    text: 'Saya suka dengan pilihan furnitur yang banyak dan harga yang kompetitif. Timnya juga sangat membantu dalam memberikan rekomendasi.',
    profil: 'assets/testi1.jpeg',
    name: 'Rizal, Bandung',
    rating: 4,
  },
  {
    id: 3,
    text: 'Saya suka dengan pilihan furnitur yang banyak dan harga yang kompetitif. Timnya juga sangat membantu dalam memberikan rekomendasi.',
    profil: 'assets/testi1.jpeg',
    name: 'Rizal, Bandung',
    rating: 5,
  },
];

export default function Home() {
  const [showAll, setShowAll] = React.useState(false);

  const handleShowAll = () => {
    setShowAll((prev) => !prev); // Toggle the state
  };

  const scrollLeft = () => {
    document.getElementById('scroll-container').scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    document.getElementById('scroll-container').scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="font-poppins">
      <Navbar />

      {/* Hero Section */}
      <section className="grid grid-cols-12 px-5 py-5 pt-20 lg:px-[75px]">
        <div className="col-span-12 lg:col-span-8">
          <p className="text-sm text-[#333338]">#Best Quality interior</p>
          <h1 className="text-5xl font-medium leading-[52px] text-black1 lg:text-[64px] lg:leading-[62px]">
            Hadirkan{' '}
            <span className="underline decoration-[#2C57F4]">Keindahan dan Kenyamanan</span>
            <br className="md:hidden lg:inline-block" />
            di Rumah Anda
          </h1>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <h1 className="hidden text-[32px] font-medium md:inline-block">About Us</h1>
          <p className="text-justify font-poppins text-sm">
            Temukan furnitur berkualitas tinggi yang dirancang untuk mempercantik interior rumah
            Anda. Kami menghadirkan solusi desain modern yang sesuai dengan gaya hidup Anda.
          </p>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="relative right-0 w-full pt-5 md:pb-20 lg:pb-28">
        <div>
          <img className="h-60 w-full object-cover lg:h-96" src="assets/bg.png" alt="" />
        </div>
        <div className="absolute -bottom-28 flex w-full px-5 md:bottom-0 lg:bottom-2 lg:px-[75px]">
          <div className="m-auto grid w-full grid-cols-3 gap-1 py-5">
            <div className="flex flex-col items-center justify-center gap-1 bg-black py-[46px] text-white lg:gap-5">
              <h1 className="text-3xl font-bold lg:text-[68px]">8+</h1>
              <p className="text-center font-montserrat text-base font-medium lg:text-[20px] lg:font-semibold">
                Produk
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 bg-black py-[46px] text-white lg:gap-5">
              <h1 className="text-3xl font-bold lg:text-[68px]">1000+</h1>
              <p className="text-center font-montserrat text-base font-medium lg:text-[20px] lg:font-semibold">
                Unit Produk Terjual
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 bg-black py-[46px] text-white lg:gap-5">
              <h1 className="text-3xl font-bold lg:text-[68px]">5/5</h1>
              <p className="text-center font-montserrat text-base font-medium lg:text-[20px] lg:font-semibold">
                Rating Google
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-28 flex flex-col gap-5 p-5 pb-14 md:mt-0 lg:px-[75px]">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <div className="absolute h-6 w-6 bg-black lg:top-4"></div>
              <h1 className="ml-12 font-montserrat text-2xl font-semibold uppercase leading-tight lg:text-[44px]">
                kenali perusahaan kami lebih jauh
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 bg-[#F4F4F5]">
          <div className="col-span-12 lg:col-span-6">
            <img src="assets/img1.png" alt="" className="w-full object-cover md:h-72 lg:h-auto" />
          </div>
          <div className="col-span-12 bg-[#F4F4F5] p-8 lg:col-span-6 lg:p-12">
            <h1 className="text-[32px] font-medium">About Us</h1>
            <p className="text-justify font-montserrat text-sm leading-tight text-grey1 md:text-base">
              Selamat datang di [Nama Perusahaan Anda], mitra terpercaya Anda dalam menghadirkan
              furnitur berkualitas tinggi untuk hunian yang lebih nyaman dan indah. Kami adalah
              perusahaan yang berdedikasi untuk memberikan solusi interior terbaik dengan
              menggabungkan keahlian, kreativitas, dan bahan terbaik.
            </p>
            <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:gap-10">
              <div>
                <h1 className="text-[26px] font-medium">Visi</h1>
                <p className="text-justify font-montserrat text-sm leading-tight tracking-wide text-grey1 md:text-base">
                  Menjadi pelopor dalam industri furnitur dengan menghadirkan desain inovatif yang
                  memenuhi kebutuhan setiap rumah.
                </p>
              </div>
              <div>
                <h1 className="text-[26px] font-medium lg:-ml-4">Misi</h1>
                <ul className="list-inside list-decimal text-justify font-montserrat text-sm leading-tight tracking-wide text-grey1 md:text-base lg:list-outside">
                  <li>
                    Memberikan furnitur berkualitas tinggi yang mengutamakan estetika dan
                    kenyamanan.
                  </li>
                  <li>
                    Menciptakan pengalaman belanja yang mudah dan menyenangkan bagi pelanggan kami.
                  </li>
                  <li>
                    Menginspirasi hunian impian dengan solusi interior yang terjangkau dan tahan
                    lama.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Section */}
      <section className="bg-black p-5 pb-0 lg:px-[75px]">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="relative">
              <div className="absolute top-4 h-6 w-6 bg-white"></div>
              <h1 className="my-[30px] ml-10 font-montserrat text-2xl font-medium uppercase leading-tight text-white lg:text-[44px]">
                keunggulan produk kami untuk anda
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-12 bg-white">
            <div className="order-2 col-span-12 p-8 lg:order-1 lg:col-span-6 lg:px-[60px] lg:py-[52px]">
              <h1 className="py-2 text-[26px] font-medium underline decoration-[#2C57F4]">
                Nilai-Nilai Kami
              </h1>
              <ul className="relative list-decimal px-5 font-montserrat text-lg font-semibold">
                <li className="py-1">
                  <h2 className="list-decimal font-montserrat text-lg font-semibold">
                    Kualitas Unggul
                  </h2>
                  <p className="text-justify text-sm font-normal text-grey1 md:text-base">
                    Setiap produk dirancang dengan standar tinggi agar mampu memenuhi harapan Anda
                    untuk hunian yang sempurna.
                  </p>
                </li>
                <li className="py-1">
                  <h2 className="list-decimal font-montserrat text-lg font-semibold">
                    Desain yang Modern
                  </h2>
                  <p className="text-justify text-sm font-normal text-grey1 md:text-base">
                    Dengan berbagai pilihan desain mulai dari minimalis hingga klasik elegan, kami
                    hadir untuk mempercantik setiap sudut rumah Anda.
                  </p>
                </li>
                <li className="py-1">
                  <h2 className="list-decimal font-montserrat text-lg font-semibold">
                    Perawatan Mudah dan Tahan Lama
                  </h2>
                  <p className="text-justify text-sm font-normal text-grey1 md:text-base">
                    Furnitur kami didesain agar mudah dirawat dan tetap tampil baru untuk waktu yang
                    lama, menghemat waktu dan biaya perawatan.
                  </p>
                </li>
                <li className="py-1">
                  <h2 className="list-decimal font-montserrat text-lg font-semibold">
                    Pilihan Beragam untuk Semua Kebutuhan
                  </h2>
                  <p className="text-justify text-sm font-normal text-grey1 md:text-base">
                    Kami menawarkan berbagai pilihan produk, mulai dari furnitur untuk ruang tamu,
                    kamar tidur, hingga dekorasi rumah, semuanya dapat disesuaikan dengan selera dan
                    kebutuhan Anda.
                  </p>
                </li>
              </ul>
            </div>
            <div className="order-1 col-span-12 lg:order-2 lg:col-span-6">
              <img src="assets/img2.png" alt="" className="w-full object-cover md:h-72 lg:h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="p-5 lg:px-[75px]">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="relative">
              <div className="absolute top-4 h-6 w-6 bg-black"></div>
              <h1 className="ml-10 mt-[30px] font-montserrat text-2xl font-semibold uppercase leading-tight lg:text-[44px]">
                produk furnitur untuk hunian anda
              </h1>
            </div>
          </div>
        </div>
        <div className="my-[10px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {showAll
            ? products.map((product) => <ProductCard key={product.id} product={product} />)
            : products
                .slice(0, 3)
                .map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        {showAll ? (
          <button
            className="bg-black px-[10px] py-[8px] text-sm text-white transition-all duration-200 ease-in-out hover:bg-slate-700"
            type="button"
            onClick={handleShowAll}
          >
            lihat lebih sedikit produk
          </button>
        ) : (
          <button
            className="bg-black px-[10px] py-[8px] text-sm text-white transition-all duration-200 ease-in-out hover:bg-slate-700"
            type="button"
            onClick={handleShowAll}
          >
            lihat produk lainnya
          </button>
        )}
      </section>

      {/* Testimoni Section */}
      <section className="p-5 pb-10 lg:px-[75px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex gap-[20px]">
            <div className="mt-4 h-6 bg-black p-3"></div>
            <div className="flex flex-col gap-3">
              <h1 className="font-montserrat text-2xl font-semibold uppercase leading-tight lg:text-[44px]">
                apa kata pelanggan kami
              </h1>
              <p className="text-justify font-poppins text-sm text-grey1">
                Kami bangga telah menjadi bagian dari perjalanan banyak pelanggan untuk menciptakan
                ruang impian mereka. Inilah beberapa cerita dan ulasan dari mereka yang telah
                merasakan kualitas produk dan layanan kami
              </p>
            </div>
          </div>
          <div className="w-full">
            <div id="scroll-container" className="flex gap-3 overflow-x-scroll">
              {testimoni.map((data) => (
                <TestimoniCard key={data.id} testimoni={data} />
              ))}
            </div>
            <div className="mt-2 flex w-full justify-center gap-2">
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
      <section className="flex w-full flex-col gap-16 bg-black p-5 lg:p-[75px]">
        <div id="kontak" className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex gap-[20px]">
            <div className="h-6 bg-white p-3 lg:mt-4"></div>
            <div className="flex flex-col gap-3">
              <h1 className="font-montserrat text-2xl font-semibold uppercase text-white lg:text-[44px]">
                Hubungi Kami
              </h1>
              <p className="text-justify font-poppins text-sm text-white">
                Kami bangga telah menjadi bagian dari perjalanan banyak pelanggan untuk menciptakan
                ruang impian mereka. Inilah beberapa cerita dan ulasan dari mereka yang telah
                merasakan kualitas produk dan layanan kami
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
                <p className="font-poppins font-medium text-white">
                  📍 Kunjungi showroom atau kantor kami di:
                </p>
                <p className="font-poppins text-sm text-white">
                  Jl. Bukit Lestari No. 45, Kelurahan Sekaran, Kecamatan Gunungpati, Kota Semarang,
                  Jawa Tengah 50229
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-fit flex-col gap-5 bg-[#1E1E1E] p-10">
            <h1 className="text-[26px] font-medium text-white">Formulir Kontak</h1>
            <p className="text-justify font-poppins text-sm text-white">
              Isi formulir di bawah ini, dan tim kami akan segera menghubungi Anda:
            </p>
            <form className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-poppins text-sm text-white">Nama</label>
                <input
                  placeholder="Masukkan nama anda"
                  className="border border-white bg-transparent p-3 font-poppins text-sm text-white outline-white"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-poppins text-sm text-white">Email atau Nomor WhatsApp</label>
                <input
                  placeholder="Masukkan email atau nomor whatsapp anda"
                  className="border border-white bg-transparent p-3 font-poppins text-sm text-white outline-white"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-poppins text-sm text-white">Pesan</label>
                <textarea
                  placeholder="Masukkan pesan anda"
                  className="border border-white bg-transparent p-3 font-poppins text-sm text-white outline-white"
                  type="text"
                />
              </div>
              <button className="bg-black py-3 font-poppins text-white transition-all duration-300 focus:border focus:border-white">
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
//             <p className="text-base text-center lg:text-[20px] font-medium lg:font-semibold font-montserrat">Produk</p>
//           </div>
//           <div className="bg-black text-white w-[374px] py-[46px] flex flex-col justify-center items-center">
//             <h1 className="text-[68px] font-bold">1000+</h1>
//             <p className="text-base text-center lg:text-[20px] font-medium lg:font-semibold font-montserrat">
//               Unit Produk Terjual
//             </p>
//           </div>
//           <div className="bg-black text-white w-[374px] py-[46px] flex flex-col justify-center items-center">
//             <h1 className="text-[68px] font-bold">5/5</h1>
//             <p className="text-base text-center lg:text-[20px] font-medium lg:font-semibold font-montserrat">
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
