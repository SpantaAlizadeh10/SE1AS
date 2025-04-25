"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-900 py-16 rounded-3xl mx-4 md:mx-20 my-10 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-5 rounded-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center px-6 z-10 relative">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          آماده‌ای یادگیری یا تدریس رو شروع کنی؟
        </h2>
        <p className="text-lg text-white/80 mb-10">
          همین حالا ثبت‌نام کن و وارد دنیای جدید آموزش آنلاین شو.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="/signup/student"
            className="backdrop-blur-xl bg-white/90 text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 ease-in-out shadow-md flex items-center gap-2"
          >
            من شاگردم <ArrowRight size={18} />
          </Link>
          <Link
            href="/signup/teacher"
            className="bg-white/10 border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-in-out shadow-md flex items-center gap-2"
          >
            من معلم هستم <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
