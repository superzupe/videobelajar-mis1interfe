import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header type="main" />
      <main>
      <HeroSection />
      <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
  