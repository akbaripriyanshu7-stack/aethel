"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import Image from "next/image";
export default function Home() {
  const [selectedImage, setSelectedImage] = useState("/images/back.png");
  const [selectedSize, setSelectedSize] = useState("M");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-in-out",
  });
}, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    <h1 className="text-2xl font-bold tracking-[0.3em]">
      AETHEL
    </h1>

    <div className="hidden md:flex gap-6 text-sm">
      <a href="#home" className="hover:text-gray-400">
        Home
      </a>

      <a href="#products" className="hover:text-gray-400">
        Products
      </a>

      <a
        href="https://wa.me/918238075225"
        target="_blank"
        className="hover:text-gray-400"
      >
        Contact
      </a>
    </div>
  </div>
</nav>
      <section
  id="home"
  className="flex flex-col items-center justify-center h-screen text-center px-6"
>
        <p className="text-sm tracking-[8px] text-gray-400">FIRST DROP 2026</p>

        <h1 className="text-7xl md:text-9xl font-bold tracking-[0.3em] mt-4">
          AETHEL
        </h1>

        <p className="mt-6 text-gray-400 text-xl">
          Minimal. Modern. Timeless.
        </p>

        <a
  href="https://wa.me/918238075225?text=Hi%20AETHEL,%20I%20want%20to%20order%20the%20Oversized%20T-Shirt."
  target="_blank"
  className="mt-10 inline-block border border-white px-8 py-4 hover:bg-white hover:text-black transition"
>
  SHOP NOW
</a>
      </section>

      <section
  id="products"
  className="py-20 px-6 bg-zinc-950"
  data-aos="fade-up"
>
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Product
        </h2>

      <div className="max-w-6xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl transition-all duration-300 hover:shadow-white/10 hover:scale-[1.01]">
          <Image
  src={selectedImage}
  alt="AETHEL Oversized Tee"
  width={500}
  height={600}
  className="rounded-lg w-full h-auto object-cover"
/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
 <Image
  src="/images/back.png"
  alt="Back"
  width={250}
  height={300}
  className={`rounded-lg w-full cursor-pointer hover:opacity-80 border-4 ${
  selectedImage === "/images/back.png"
    ? "border-red-500"
    : "border-transparent"
}`}
  onClick={() => setSelectedImage("/images/back.png")}
/>

  <Image
  src="/images/closeup.png"
  alt="Closeup"
  width={250}
  height={300}
 className={`rounded-lg w-full cursor-pointer hover:opacity-80 border-4 ${
  selectedImage === "/images/closeup.png"
    ? "border-red-500"
    : "border-transparent"
}`}
  onClick={() => setSelectedImage("/images/closeup.png")}
/>

<Image
  src="/images/allover.png"
  alt="All Over"
  width={250}
  height={300}
  className={`rounded-lg w-full col-span-2 cursor-pointer hover:opacity-80 border-4 ${
  selectedImage === "/images/allover.png"
    ? "border-red-500"
    : "border-transparent"
}`}
  onClick={() => setSelectedImage("/images/allover.png")}
/>
</div>

          <h3 className="text-2xl mt-6 font-semibold">
  AETHEL Oversized Tee
</h3>

<p className="text-gray-400 mt-2">
  ₹1099
</p>
<div className="flex justify-center gap-3 mt-4">
  <button
  onClick={() => setSelectedSize("S")}
  className={`px-4 py-2 rounded border ${
    selectedSize === "S"
      ? "bg-white text-black"
      : "border-white text-white"
  }`}
>
  S
</button>
  <button
  onClick={() => setSelectedSize("M")}
  className={`px-4 py-2 rounded border ${
    selectedSize === "M"
      ? "bg-white text-black"
      : "border-white text-white"
  }`}
>
  M
</button>
  <button
  onClick={() => setSelectedSize("L")}
  className={`px-4 py-2 rounded border ${
    selectedSize === "L"
      ? "bg-white text-black"
      : "border-white text-white"
  }`}
>
  L
</button>
  <button
  onClick={() => setSelectedSize("XL")}
  className={`px-4 py-2 rounded border ${
    selectedSize === "XL"
      ? "bg-white text-black"
      : "border-white text-white"
  }`}
>
  XL
</button>
</div>

<p className="mt-4">
  Sizes: S • M • L • XL
</p>

<a
  href={`https://wa.me/918238075225?text=${encodeURIComponent(
    `Hi AETHEL,

I want to order the AETHEL Oversized Tee.

Size: ${selectedSize}

Please share the payment details.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-6 w-full bg-white text-black py-3 rounded-xl font-semibold text-center transition-all duration-300 hover:bg-gray-200 hover:scale-105"
>
  SHOP NOW
</a>
        </div>
      </section>
      <section
  className="py-20 px-6 bg-black"
  data-aos="fade-up"
>
  <h2 className="text-4xl font-bold text-center mb-10">
    Size Chart
  </h2>

  <div className="max-w-3xl mx-auto overflow-x-auto">
    <table className="w-full border border-gray-700 text-center">
      <thead>
        <tr className="bg-zinc-900">
          <th className="border border-gray-700 p-4">Size</th>
          <th className="border border-gray-700 p-4">Chest</th>
          <th className="border border-gray-700 p-4">Length</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="border border-gray-700 p-4">S</td>
          <td className="border border-gray-700 p-4">40"</td>
          <td className="border border-gray-700 p-4">27"</td>
        </tr>

        <tr>
          <td className="border border-gray-700 p-4">M</td>
          <td className="border border-gray-700 p-4">42"</td>
          <td className="border border-gray-700 p-4">28"</td>
        </tr>

        <tr>
          <td className="border border-gray-700 p-4">L</td>
          <td className="border border-gray-700 p-4">44"</td>
          <td className="border border-gray-700 p-4">29"</td>
        </tr>

        <tr>
          <td className="border border-gray-700 p-4">XL</td>
          <td className="border border-gray-700 p-4">46"</td>
          <td className="border border-gray-700 p-4">30"</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
<section
  className="py-20 px-6 bg-zinc-950"
  data-aos="fade-up"
>
  <h2 className="text-4xl font-bold text-center mb-10">
    Product Details
  </h2>

  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900">
      <h3 className="text-xl font-semibold mb-2">👕 Fabric</h3>
      <p className="text-gray-400">
        100% Premium Cotton with a soft and comfortable feel.
      </p>
    </div>

    <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900">
      <h3 className="text-xl font-semibold mb-2">🧵 GSM</h3>
      <p className="text-gray-400">
        240 GSM heavyweight fabric for a premium look.
      </p>
    </div>

    <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900">
      <h3 className="text-xl font-semibold mb-2">😎 Fit</h3>
      <p className="text-gray-400">
        Oversized fit for everyday comfort and streetwear style.
      </p>
    </div>

    <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900">
      <h3 className="text-xl font-semibold mb-2">🎨 Print</h3>
      <p className="text-gray-400">
        Premium Puff Print with long-lasting quality.
      </p>
    </div>

  </div>
</section>
<section
  className="py-20 px-6 bg-black"
  data-aos="fade-up"
>
  <h2 className="text-4xl font-bold text-center mb-10">
    Shipping & Exchange
  </h2>

  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <h3 className="text-2xl font-semibold mb-3">🚚 Shipping</h3>
      <ul className="text-gray-400 space-y-2">
        <li>• PAN India Delivery</li>
        <li>• Dispatch within 1–2 Days</li>
        <li>• Delivery in 3–7 Business Days</li>
      </ul>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <h3 className="text-2xl font-semibold mb-3">🔄 Exchange</h3>
      <ul className="text-gray-400 space-y-2">
        <li>• 7-Day Size Exchange</li>
        <li>• Product must be unused</li>
        <li>• Original tags should be attached</li>
      </ul>
    </div>

  </div>
</section>
<section
  className="py-20 px-6 bg-zinc-950"
  data-aos="fade-up"
>
  <h2 className="text-4xl font-bold text-center mb-10">
    Frequently Asked Questions
  </h2>

  <div className="max-w-4xl mx-auto space-y-6">

    <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900">
      <h3 className="text-xl font-semibold">
        What is the delivery time?
      </h3>
      <p className="text-gray-400 mt-2">
        Orders are usually delivered within 3–7 business days across India.
      </p>
    </div>

    <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900">
      <h3 className="text-xl font-semibold">
        Can I exchange my size?
      </h3>
      <p className="text-gray-400 mt-2">
        Yes, we offer a 7-day size exchange for unused products with original tags.
      </p>
    </div>

    <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900">
      <h3 className="text-xl font-semibold">
        What fabric is used?
      </h3>
      <p className="text-gray-400 mt-2">
        Our oversized tees are made from premium heavyweight cotton for comfort and durability.
      </p>
    </div>

  </div>
</section>
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">
  <h3 className="text-xl font-bold tracking-[0.3em] text-white">
    AETHEL
  </h3>

  <p className="mt-3">
    Minimal. Modern. Timeless.
  </p>

  <p className="mt-2">
    © 2026 AETHEL. All Rights Reserved.
  </p>

  <a
    href="https://wa.me/918238075225"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-white hover:text-gray-300"
  >
    Contact on WhatsApp
  </a>
  <a
  href="https://instagram.com/aethel.club"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-3 text-white hover:text-gray-300"
>
  Follow us on Instagram
</a>
<section
  className="py-20 px-6 bg-black"
  data-aos="fade-up"
>
  <h2 className="text-4xl font-bold text-center mb-10">
    About AETHEL
  </h2>

  <div className="max-w-3xl mx-auto text-center">
    <p className="text-gray-400 text-lg leading-8">
      AETHEL is a premium streetwear brand built for those who value
      minimal design, modern aesthetics, and timeless quality.
      Every piece is crafted to deliver comfort, confidence, and
      everyday versatility.
    </p>

    <p className="text-gray-400 text-lg leading-8 mt-6">
      We believe that fashion is more than clothing—it's a way to
      express your identity. Our goal is to create premium essentials
      that never go out of style.
    </p>
  </div>
</section>
</footer>
    </main>
  );
}