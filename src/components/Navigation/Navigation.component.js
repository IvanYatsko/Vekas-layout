const LIST_LINKS = [
  "Home",
  "About us",
  "Аchievements",
  "Industries",
  "Contact Us",
];

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-[50px]">
        {LIST_LINKS.map((item) => (
          <li key={item}>
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
