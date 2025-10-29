import SplashScreen from "@/components/SplashScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SplashScreen />
      <Navigation />
      <Hero />
      <Services />
      <CaseStudies />
      <Process />
      <BlogPreview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
