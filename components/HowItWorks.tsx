"use client";

import { UserPlus, Search, BookOpen } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={32} className="text-blue-500" />,
    title: "ثبت‌نام کن",
    description: "به راحتی در چند ثانیه ثبت‌نام کن و وارد دنیای یادگیری شو.",
  },
  {
    icon: <Search size={32} className="text-green-500" />,
    title: "معلمتو پیدا کن",
    description: "بر اساس نیازت بین معلم‌های مختلف جستجو و فیلتر کن.",
  },
  {
    icon: <BookOpen size={32} className="text-purple-500" />,
    title: "شروع یادگیری!",
    description: "کلاس‌هاتو رزرو کن و آموزش حرفه‌ای رو شروع کن.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50 ;">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-800">
          چطور کار می‌کنه؟
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
