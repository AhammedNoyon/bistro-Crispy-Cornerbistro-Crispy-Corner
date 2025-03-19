import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="bg-featured bg-no-repeat bg-cover bg-center w-full mx-auto mb-24 pb-32 relative bg-fixed">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm mix-blend-multiply"></div>
      <div className="relative text-white">
        <div className="pt-14 mt-24">
          <SectionHeading heading="from our menu" subHeading="check it out " />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8  w-2/3 mx-auto  ">
          <img className="w-2/5 mx-auto " src={featuredImg} alt="" />
          <div className="">
            <h4>March 20, 2023</h4>
            <h4>WHERE CAN I GET SOME?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div className="">
              <button className="uppercase text-lg  mt-12  border-b-2 border-white p-2 rounded-lg hover:bg-black hover:text-white">
                view full menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
