import foodCardImg from "../../assets/home/slide1.jpg";
const FoodCard = () => {
  return (
    <div className="  flex justify-center flex-col text-center bg-[#F3F3F3]">
      <div>
        <img
          className="w-full h-[341px] mx-auto object-cover"
          src={foodCardImg}
          alt=""
        />
      </div>
      <h3 className="text-2xl font-semibold mt-8 mb-2">Caeser Salad</h3>
      <p className="text-center mb-6 w-3/4 mx-auto">
        Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
      </p>
      <div className="text-xl text-orange-500 font-semibold py-3 px-8 rounded-xl border-b-2  border-b-orange-400 shadow-2xl mb-4 w-fit mx-auto bg-slate-100 text-center cursor-pointer">
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default FoodCard;
