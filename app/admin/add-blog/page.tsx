"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const schema = z.object({
  title: z.string().min(3, "عنوان باید حداقل ۳ کاراکتر باشد"),
  slug: z.string().min(3, "اسلاگ باید حداقل ۳ کاراکتر باشد"),
  author: z.string().min(2, "نام نویسنده را وارد کنید"),
  excerpt: z.string().min(10, "خلاصه باید حداقل ۱۰ کاراکتر باشد"),
  content: z.string().min(20, "محتوای مقاله باید حداقل ۲۰ کاراکتر باشد"),
});

type FormData = z.infer<typeof schema>;

export default function AddBlogPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      await addDoc(collection(db, "blogs"), {
        ...data,
        createdAt: serverTimestamp(),
      });
      alert("✅ مقاله با موفقیت اضافه شد!");
      router.push("/blogs");
    } catch (error) {
      console.error("خطا در افزودن مقاله:", error);
      alert("❌ مشکلی پیش آمد!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        افزودن مقاله جدید
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-gray-700">عنوان</label>
          <input
            {...register("title")}
            className="w-full p-2 border rounded-md text-gray-600"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-700">slug</label>
          <input
            {...register("slug")}
            placeholder="مثلاً my-awesome-article"
            className="w-full p-2 border rounded-md rounded-md text-gray-600"
          />
          {errors.slug && <p className="text-red-500">{errors.slug.message}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-700">نویسنده</label>
          <input
            {...register("author")}
            className="w-full p-2 border rounded-md rounded-md text-gray-600"
          />
          {errors.author && (
            <p className="text-red-500">{errors.author.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-700">خلاصه</label>
          <textarea
            {...register("excerpt")}
            rows={3}
            className="w-full p-2 border rounded-md rounded-md text-gray-600"
          />
          {errors.excerpt && (
            <p className="text-red-500">{errors.excerpt.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-700">محتوا</label>
          <textarea
            {...register("content")}
            rows={8}
            className="w-full p-2 border rounded-md"
          />
          {errors.content && (
            <p className="text-red-500">{errors.content.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {isSubmitting ? "در حال ارسال..." : "افزودن مقاله"}
        </button>
      </form>
    </div>
  );
}
