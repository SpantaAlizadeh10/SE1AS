"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const schema = z.object({
  fullName: z.string().min(2, "نام را وارد کنید"),
  age: z.number().min(5, "سن معتبر نیست"),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  goal: z.string().min(2, "هدف را بنویسید"),
  language: z.string().min(2, "زبان مورد نظر را بنویسید"),
});

type FormData = z.infer<typeof schema>;

export default function WelcomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      await addDoc(collection(db, "users"), data);

      if (data.level === "advanced") {
        router.push("/dashboard/teacher");
      } else {
        router.push("/dashboard/student");
      }
    } catch (error) {
      console.error("خطا در ذخیره اطلاعات:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-50 to-white p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            خوش‌اومدی! 😄
          </h2>
          <p className="text-gray-500 text-center mb-6">
            لطفاً اطلاعات تکمیلی‌ات رو وارد کن تا بهتر کمکت کنیم
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-800">
                نام کامل
              </label>
              <input
                type="text"
                {...register("fullName")}
                className="w-full border rounded-xl p-2 text-gray-600"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-800">سن</label>
              <input
                type="number"
                {...register("age", { valueAsNumber: true })}
                className="w-full border rounded-xl p-2 text-gray-600"
              />
              {errors.age && (
                <p className="text-red-500 text-sm">{errors.age.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-800">
                سطح زبان
              </label>
              <select
                {...register("level")}
                className="w-full border rounded-xl p-2 text-gray-700"
              >
                <option value="">انتخاب سطح</option>
                <option value="beginner">مبتدی</option>
                <option value="intermediate">متوسط</option>
                <option value="advanced">پیشرفته</option>
              </select>
              {errors.level && (
                <p className="text-red-500 text-sm">{errors.level.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-800">
                هدف از یادگیری
              </label>
              <input
                type="text"
                {...register("goal")}
                className="w-full border rounded-xl p-2 text-gray-700"
                placeholder="مثلاً مهاجرت، کار، تحصیل..."
              />
              {errors.goal && (
                <p className="text-red-500 text-sm">{errors.goal.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-800">
                زبان مورد نظر
              </label>
              <input
                type="text"
                {...register("language")}
                className="w-full border rounded-xl p-2 text-gray-700"
                placeholder="مثلاً انگلیسی، آلمانی، فرانسوی..."
              />
              {errors.language && (
                <p className="text-red-500 text-sm">
                  {errors.language.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-xl w-full hover:bg-blue-700 transition"
            >
              ثبت اطلاعات و ادامه
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
