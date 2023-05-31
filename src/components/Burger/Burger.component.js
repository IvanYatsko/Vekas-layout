const Burger = ({ changeVisible, open }) => {
  return (
    <div onClick={changeVisible} className={`burger ${open ? 'burger__active ' : ''}ml-7 sm:ml-16 z-20`}>
      <span className="burger__item" />
    </div>
  );
};

export default Burger;
