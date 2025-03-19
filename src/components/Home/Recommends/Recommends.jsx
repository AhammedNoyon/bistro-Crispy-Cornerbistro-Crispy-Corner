import FoodCard from "../../../Shared/FoodCard/FoodCard";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";

const Recommends = () => {
  return (
    <div>
      <SectionHeading heading="Should Try" subHeading="chef recommends" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};

export default Recommends;
