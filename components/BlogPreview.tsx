"use client";

import { CalendarDays, BookText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    title: "۵ روش فوق‌العاده برای یادگیری زبان سریع‌تر",
    excerpt:
      "یادگیری زبان جدید همیشه یک چالش لذت بخش بوده اما اگر روش درستی انتخاب نکنی ممکنه مسیر طولانی و خسته کننده بشه. در این مقاله کوتاه ۵ راهکار کاربردی و اثبات شده را معدفی میکنیم تا سریع و موثرتر ذبان یاد بگیری ",
    date: "۲۰ فروردین ۱۴۰۴",
  },
  {
    title: "چطور معلم خوب پیدا کنیم؟",
    excerpt:
      "یه معلم خوب می‌تونه فرق زیادی ایجاد کنه. این مقاله کمکت می‌کنه بهترینو انتخاب کنی.",
    date: "۱۸ فروردین ۱۴۰۴",
  },
  {
    title: "مزایای کلاس آنلاین در مقابل کلاس حضوری",
    excerpt:
      "تو این مقاله تفاوت‌های کلاس آنلاین و حضوری رو بررسی می‌کنیم و می‌فهمیم کدوم بهتره.",
    date: "۱۵ فروردین ۱۴۰۴",
  },
];

export default function BlogPreview() {
  const [readMoreStates, setReadMoreStates] = useState(posts.map(() => false));

  const toggleReadMore = (index: number) => {
    const newStates = [...readMoreStates];
    newStates[index] = !newStates[index];
    setReadMoreStates(newStates);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">مطالب آموزشی</h2>
          <p className="text-gray-500 mt-2">
            نکاتی برای یادگیری بهتر و انتخاب هوشمندانه‌تر
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition bg-yellow-50"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <CalendarDays size={16} />
                <span>{post.date}</span>
              </div>

              <Link
                href="/blogs/blog1"
                className="bg-white text-blue-600  hover:bg-blue-100 transition flex items-center gap-2"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-500 transition">
                  {post.title}
                </h3>
              </Link>

              <p className="text-sm text-gray-600">
                {readMoreStates[index]
                  ? post.excerpt
                  : post.excerpt.slice(0, 80) + "..."}
              </p>
              <div
                className="mt-4 flex items-center gap-2 text-blue-500 cursor-pointer hover:underline text-sm"
                onClick={() => toggleReadMore(index)}
              >
                <BookText size={16} />

                <span>
                  {readMoreStates[index] ? " نمایش کمتر" : "ادامه مطلب "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
