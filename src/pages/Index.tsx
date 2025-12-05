import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TipsSection from "@/components/TipsSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutSection />
        <TipsSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
