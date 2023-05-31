const CONTACTS_LIST = [
  {
    img: "./images/tg.svg",
    text: "Trajkovic 2v, 11010 Belgrade, Serbia",
  },
  {
    img: "./images/phone.svg",
    text: "+381 (65) 682 28 97",
  },
  {
    img: "./images/mess.svg",
    text: " info@vekas-automation.com",
  },
  {
    img: "./images/schedule.svg",
    text: "Mon -Fri  : 09:00 - 18:00 ",
  },
];

const LIST_LINKS = ["Home", "About us", "Аchievements", "Industries"];

const Footer = () => (
  <footer className="bg-gray bg-opacity-60 px-[30px] md:px-[50px]">
    <div className="wrapper grid sm:grid-cols-2 lg:grid-cols-4 py-[70px] gap-[30px] lg:flex lg:justify-between">
      <div className="max-w-[317px] lg:max-w-[330px]">
        <img src="./images/logo.svg" alt="logo" />
        <p className="mt-8">
          Our clients' safety and reputation are our major concerns. We minimize
          the possibility of counterfeiting your product.
        </p>
      </div>
      <div className="order-2 sm:order-none flex flex-col gap-[12.5px] sm:mt-20 lg:mt-0">
        {CONTACTS_LIST.map((item) => (
          <div key={item.text} className="flex">
            <img src={item.img} alt="connection" />
            <span className="ml-1 hover:text-green active:text-[#16DB33] cursor-pointer">{item.text}</span>
          </div>
        ))}
      </div>
      <div>
        <ul className="flex flex-col gap-[12.5px] sm:-mt-9 lg:mt-0">
          {LIST_LINKS.map((item) => (
            <li key={item}>
              <a className="hover:text-green active:text-[#16DB33]" href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="order-3">
        <span>Follow us on social media </span>
        <div className="flex gap-[10px] mt-3">
          <img src="./images/youtube.svg" alt="logo" />
          <img src="./images/insta.svg" alt="logo" />
          <img src="./images/linkedin.svg" alt="logo" />
          <img src="./images/tg-fill.svg" alt="logo" />
        </div>
      </div>
    </div>
    <div className="wrapper flex flex-col gap-[10px] sm:justify-between sm:flex-row text-right py-4 text-sm">
      <p className="hover:text-green active:text-[#16DB33] cursor-pointer">Privacy Policy</p>
      <p>Copyright 2023 © All Right Reserved Design by Digital Ant</p>
    </div>
  </footer>
);

export default Footer;
