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
    </div>
  );
};

export default OurMenu;
