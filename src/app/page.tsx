import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import AboutSection from "@/components/about-section/AboutSection";
import AboutBottomImage from "@/components/about-bottom-image/AboutBottomImage";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services-section/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import ContactUs from "@/components/contact-us/ContactUs";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <AboutBottomImage/>
      <Portfolio/>
      <Services/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
