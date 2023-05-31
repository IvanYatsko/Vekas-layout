const AboutUs = () => {
  return (
    <div className="bg-[url('./images/bg-about-us.png')] px-[30px] md:px-[50px] py-[100px] mx-auto max-w-[1600px] w-full flex flex-col items-center text-center">
      <h3 className="text-green sm:text-3xl text-xl font-medium sm:leading-[36px]">About Us</h3>
      <h2 className="sm:text-[50px] text-3xl sm:leading-[70px] leading-[42px] lg:font-normal font-medium mt-[30px]">VEKAS – We are always here to protect your brand</h2>
      <p className="mt-[270px] sm:font-medium font-normal text-base sm:text-xl sm:leading-6 w-full max-w-[856px]">
        VEKAS system allows anyone to instantly verify the authenticity of
        various products. Applying a DataMatrix code to your products is a
        solution that protects manufacturers' brands and keeps their consumers
        safe.
      </p>
      <button className="bg-green hover:bg-[#16DB33] active:bg-[#16DB33] px-8 py-4 rounded-[5px] mt-[50px] font-medium text-xl">
        Submit a request
      </button>
    </div>
  );
};

export default AboutUs;
