import MenuItem from "../atoms/menu-item";

function MenuItems({ links }) {
  const listItems = links.map((link) => (
    <MenuItem key={link.id} icon={link.icon} text={link.text} to={link.to} />
  ));

  return (
    <nav
      className="
        absolute right-0 top-full
        w-[160px] sm:w-[200px]
        bg-black/85
        rounded
        shadow-lg list-none
        py-2 mt-2 -translate-y-2.5 transition-all duration-300 ease-in-out z-[1000]"
    >
      {listItems}
    </nav>
  );
}

export default MenuItems;
