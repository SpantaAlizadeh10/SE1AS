"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/Navbar";
import { GraduationCap, Users, Star } from "lucide-react";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-2 py-26 space-y-10 text-gray-700">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-green-700">درباره SE1A</h1>
          <p className="text-lg leading-relaxed">
            SE1A یک پلتفرم آموزشی آنلاین است که با هدف ایجاد بستری ساده،
            قابل‌اعتماد و حرفه‌ای برای معلم‌ها و دانشجوها ساخته شده. ما باور
            داریم که یادگیری نباید به زمان و مکان محدود باشد.
          </p>
          <p className="text-lg leading-relaxed">
            چه معلم باشید و بخواید دانش و تجربه‌تون رو به اشتراک بگذارید، چه
            دانشجو و دنبال پیشرفت، SE1A محیطی منعطف، باکیفیت و انسانی برای رشد
            شماست.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-yellow-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <GraduationCap className="text-orange-600 mx-auto mb-3" size={36} />
            <h3 className="text-xl font-bold mb-1">آموزش باکیفیت</h3>
            <p className="text-sm text-gray-600">
              دوره‌های دقیق و کاربردی توسط اساتید با تجربه برای یادگیری عمیق‌تر.
            </p>
          </div>

          <div className="bg-purple-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <Users className="text-blue-600 mx-auto mb-3" size={36} />
            <h3 className="text-xl font-bold mb-1">جامعه‌ی پویا</h3>
            <p className="text-sm text-gray-600">
              ارتباط نزدیک بین معلم و دانشجو برای یادگیری مشارکتی و تعامل بالا.
            </p>
          </div>

          <div className="bg-blue-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <Star className="text-green-600 mx-auto mb-3" size={36} />
            <h3 className="text-xl font-bold mb-1">پشتیبانی و رشد</h3>
            <p className="text-sm text-gray-600">
              تیم پشتیبانی و امکانات آموزشی برای پیشرفت پیوسته‌ی معلمین و
              دانشجویان.
            </p>
          </div>
        </section>

        <section className="bg-green-50 border border-green-100 rounded-xl p-6 text-center mt-10">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            به جمع SE1A بپیوندید!
          </h2>
          <p className="text-gray-600 mb-4">
            فرقی نمی‌کنه تازه شروع کرده باشید یا یک مدرس حرفه‌ای باشید، ما اینجا
            هستیم تا مسیر یادگیری رو برای شما هموار کنیم.
          </p>
          <a
            href="/signup"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition"
          >
            شروع کن
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
