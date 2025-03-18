import Banner from "../../components/Home/Banner/Banner";
import CallUs from "../../components/Home/CallUs/CallUs";
import CategorySlider from "../../components/Home/Category/CategorySlider";
import OurMenu from "../../components/Home/OurMenu/OurMenu";
import Boss from "../../Shared/Boss/Boss";

const Home = () => {
  return (
    <div>
      <div className="w-full lg:w-5/6 mx-auto">
        <Banner />
      </div>
      <div className="w-2/3 mx-auto">
        <CategorySlider />
        <Boss />
        <OurMenu />
        <CallUs />
      </div>
    </div>
  );
};

export default Home;
