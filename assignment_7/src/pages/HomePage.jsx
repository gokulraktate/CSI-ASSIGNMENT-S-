import HeroSlider from "../components/HeroSlider";
import TopCategories from "../components/TopCategories";

const HomePage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <HeroSlider />
      <TopCategories/>
      {/* Add other sections here */}
    </div>
  );
};

export default HomePage;
