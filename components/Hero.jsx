// components/Hero.tsx

// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[80vh] px-22 flex flex-col md:flex-row items-center justify-center md:gap-60 gap-10  py-16 bg-gradient-to-br from-[#f5f5f5] to-white">
      {/* تصویر سمت چپ */}
      <div className="w-[500px] h-[300px] relative hexagon-mask overflow-hidden shadow-xl rounded-lg">
        <Image
          src="/images/Hero.jpg"
          alt="James Webb style"
          fill
          className="object-cover"
        />
      </div>

      {/* متن سمت راست */}
      <div className="w-full md:w-1/2 text-center md:text-right">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 leading-snug">
          با یک کلیک معلم مناسب خودتو پیدا کن
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          هزاران معلم حرفه‌ای در دسته‌بندی‌های مختلف، فقط چند ثانیه با تو فاصله
          دارن.
        </p>

        <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
          جستجوی معلم
        </button>
      </div>
    </section>
  );
}
