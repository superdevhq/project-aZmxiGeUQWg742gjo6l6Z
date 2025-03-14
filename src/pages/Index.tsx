
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import FeaturedCourses from "@/components/features/FeaturedCourses";
import HowItWorks from "@/components/features/HowItWorks";
import AIFeatures from "@/components/features/AIFeatures";
import Testimonials from "@/components/features/Testimonials";
import CallToAction from "@/components/features/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCourses />
        <HowItWorks />
        <AIFeatures />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
