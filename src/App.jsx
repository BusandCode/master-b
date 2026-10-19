import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyDifferent from "./components/Why";
import MeetTutor from "./components/MeetTutor";
// import WhyDifferent from "./components/WhyDifferent";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import BookDemo from "./components/BookDemo";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <MeetTutor />
        <WhyDifferent />
        <HowItWorks />
        <Testimonials />
        <BookDemo />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  );
}