// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials/SlickCarousel";
import Footer from "@/components/layout/Footer";
import HowItWorks from "@/components/HowItWorks";
import BlogPreview from "@/components/BlogPreview";
import CallToAction from "@/components/CallToAction";
import TeacherList from "@/components/TeacherList";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <HowItWorks />
      <CallToAction />
      <BlogPreview />
      <TeacherList />
      <Footer />
    </>
  );
}
