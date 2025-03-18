const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 mb-14">
      <p className="text-lg text-orange-300">------{subHeading}------</p>
      <div className="divider w-1/3 mx-auto "></div>
      <h3 className="text-2xl font-medium uppercase ">{heading}</h3>
      <div className="divider  w-1/3 mx-auto "></div>
    </div>
  );
};

export default SectionHeading;
