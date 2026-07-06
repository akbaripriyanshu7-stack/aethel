"use client";

import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const [selectedImage, setSelectedImage] = useState("/images/back.png");
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    <h1 className="text-2xl font-bold tracking-[0.3em]">
      AETHEL
    </h1>

    <div className="flex gap-6 text-sm">
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

      <section id="products" className="py-20 px-6 bg-zinc-950">
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
    className="inline-block mt-4 text-white hover:text-gray-300"
  >
    Contact on WhatsApp
  </a>
</footer>
    </main>
  );
}