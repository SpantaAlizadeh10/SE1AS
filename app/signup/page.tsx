"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

const formSchema = z.object({
  email: z.string().email({ message: "ایمیل معتبر نیست" }),
  password: z.string().min(6, { message: "رمز باید حداقل ۶ کاراکتر باشد" }),
});

type FormData = z.infer<typeof formSchema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setFirebaseError("");
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User created:", userCred.user);
      router.push("/welcome");
    } catch (err: any) {
      setFirebaseError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-10">
          {/* سمت چپ - تبلیغات */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              با SE1A مسیر یادگیریتو بساز
            </h2>
            <p className="text-gray-600 leading-7">
              به دنیای یادگیری زبان خوش اومدی! ما بهت کمک می‌کنیم معلم مناسب
              پیدا کنی، برنامه‌ریزی شخصی داشته باشی و مسیر رشدتو با قدرت پیش
              ببری.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>دسترسی به بهترین معلم‌ها</li>
              <li>یادگیری با برنامه‌ریزی شخصی</li>
              <li>جامعه فعال زبان‌آموزها</li>
              <li>سیستم پیشرفت و پاداش</li>
            </ul>
          </div>

          {/* سمت راست - فرم ثبت‌نام */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              فرم ثبت‌ نام
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 text-gray-600"
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="ایمیل"
                  className="w-full pl-10 pr-4 py-3 border border-transparent rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 bg-white/70 backdrop-blur"
                  {...register("email")}
                />
                <Mail
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={20}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="رمز عبور"
                  className="w-full pl-10 pr-4 py-3 border border-transparent rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 bg-white/70 backdrop-blur"
                  {...register("password")}
                />
                <Lock
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={20}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
              </button>

              {firebaseError && (
                <p className="text-red-500 text-sm mt-2">{firebaseError}</p>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
