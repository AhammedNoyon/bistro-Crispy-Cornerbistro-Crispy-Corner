const MenuList = ({ singleMenu }) => {
  const { name, recipe, image, price } = singleMenu;
  return (
    <div className="flex justify-between gap-8">
      <img
        className="rounded-s-3xl w-full object-cover"
        src={image}
        alt="menu"
      />
      <div>
        <h3 className="text-xl mb-2 uppercase">{name}------</h3>
        <p className="text-justify">{recipe}</p>
      </div>
      <p className="text-orange-400 text-lg">${price}</p>
    </div>
  );
};

export default MenuList;
