import Banner from "../../components/Home/Banner/Banner";
import CategorySlider from "../../components/Home/Category/CategorySlider";

const Home = () => {
  return (
    <div>
      <div className="w-full lg:w-5/6 mx-auto">
        <Banner />
      </div>
      <div className="w-2/3 mx-auto">
        <CategorySlider />
      </div>
    </div>
  );
};

export default Home;
