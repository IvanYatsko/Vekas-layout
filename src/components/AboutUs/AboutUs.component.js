const AboutUs = () => {
  return (
    <div className="bg-[url('./images/bg-about-us.png')] mt-[150px] py-[100px] mx-auto max-w-[1600px] w-full flex flex-col items-center text-center">
      <h3 className="text-green text-3xl font-medium leading-[36px]">About Us</h3>
      <h2 className="text-[50px] leading-[70px] mt-[30px]">VEKAS – We are always here to protect your brand</h2>
      <p className="mt-[270px] font-medium text-xl leading-6 w-full max-w-[856px]">
        VEKAS system allows anyone to instantly verify the authenticity of
        various products. Applying a DataMatrix code to your products is a
        solution that protects manufacturers' brands and keeps their consumers
        safe.
      </p>
      <button className="bg-green px-8 py-4 rounded-[5px] mt-[50px] font-medium text-xl">
        Submit a request
      </button>
    </div>
  );
};

export default AboutUs;
