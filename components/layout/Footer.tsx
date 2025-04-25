"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-20 pt-12 pb-8 rounded-t-3xl shadow-inner  ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-cols-3 gap-10">
        {/* لوگو و توضیح */}
        <div>
          <h3 className="text-3xl font-black text-white mb-3 tracking-tight">
            SE1A
          </h3>
          <p className="text-white-100 leading-6 text-sm">
            پلتفرمی برای یادگیری و تدریس آنلاین، ساده، پویا و با کیفیت. به دنیای
            آموزش آنلاین خوش آمدی!
          </p>
        </div>

        {/* لینک‌ها */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">
            لینک‌های مهم
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/about"
                className="text-green-100 hover:text-white transition flex items-center gap-1"
              >
                <ArrowRight size={16} /> درباره ما
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-green-100 hover:text-white transition flex items-center gap-1"
              >
                <ArrowRight size={16} /> تماس با ما
              </Link>
            </li>
            <li>
              <Link
                href="/rules"
                className="text-green-100 hover:text-white transition flex items-center gap-1"
              >
                <ArrowRight size={16} /> قوانین
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-green-100 hover:text-white transition flex items-center gap-1"
              >
                <ArrowRight size={16} /> بلاگ
              </Link>
            </li>
          </ul>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">
            ما را دنبال کن
          </h4>
          <div className="flex gap-5 text-white text-xl">
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="hover:text-pink-400 transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="hover:text-sky-400 transition" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="hover:text-blue-500 transition" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Youtube className="hover:text-red-500 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="text-center text-xs text-green-100 mt-12 border-t border-green-700 pt-4">
        © 2025 SE1A — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
