import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="container font-poppins">
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
      <section className="pt-5 pb-64 relative">
        <div>
          <img src="assets/bg.png" alt="" />
        </div>
        <div className="absolute bottom-16 px-[75px] py-5 flex gap-1">
          <div className="bg-black text-white w-[374px] py-[46px] flex flex-col justify-center items-center">
            <h1 className="text-[68px] font-bold">8+</h1>
            <p className="text-[20px] font-semibold font-montserrat">Produk</p>
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
                  Menjadi pelopor dalam industri furnitur dengan menghadirkan desain inovatif yang memenuhi kebutuhan setiap rumah.
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
    </div>
  );
}
