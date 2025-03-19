import { useEffect, useState } from "react";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import MenuList from "../../../Shared/MenuList/MenuList";

const OurMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);
  return (
    <div className="mb-24">
      <SectionHeading heading="from our menu" subHeading="Check it out" />
      <div className="grid md:grid-cols-2 gap-8">
        {menu.slice(0, 6).map((singleMenu) => (
          <MenuList key={singleMenu._id} singleMenu={singleMenu} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="uppercase text-lg  mt-12  border-b-2 border-black p-2 rounded-lg hover:bg-black hover:text-white">
          view full menu
        </button>
      </div>
    </div>
  );
};

export default OurMenu;
