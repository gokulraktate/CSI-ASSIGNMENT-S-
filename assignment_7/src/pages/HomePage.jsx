import HeroSlider from "../components/HeroSlider";
import TopCategories from "../components/TopCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import TopBrands from "../components/TopBrands";
import DealsBanner from "../components/DealsBanner";
import BenefitsSection from "../components/BenefitsSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <HeroSlider />
      <TopCategories/>
      <FeaturedProducts/>
      <TopBrands />
      <DealsBanner />
      <BenefitsSection />
      <Newsletter />
      <Footer />
      {/* Add other sections here */}
    </div>
  );
};

export default HomePage;
