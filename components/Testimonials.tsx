import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "سارا محمدی",
    image: "/images/users/sara.jpg",
    text: "واقعا تجربه خیلی خوبی بود! معلمی که پیدا کردم خیلی حرفه‌ای و مهربون بود.",
    rating: 5,
  },
  {
    name: "علی رضایی",
    image: "/images/users/ali.jpg",
    text: "خیلی سریع تونستم معلم مناسب پیدا کنم. محیط سایت هم خیلی ساده‌ست.",
    rating: 4,
  },
  {
    name: "نسترن احمدی",
    image: "/images/users/nastaran.jpg",
    text: "من همیشه از کلاس‌های آنلاین فراری بودم ولی اینجا واقعا فرق داره.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        نظر کاربران ما
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{t.name}</h3>
                <div className="flex">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400"
                      fill="#facc15"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
