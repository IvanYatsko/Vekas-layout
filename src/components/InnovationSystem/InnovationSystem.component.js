const InnovationSystem = () => {
  return (
    <main className="wrapper pt-[70px]">
      <div className="bg-[url('./images/main-bg.png')] h-[500px]">
        <p>Track and trace</p>
        <p>Innovative end-to-end traceability system</p>
      </div>
      <div className="flex gap-[60px] mt-[70px]">
        <p>No more fakes</p>
        <p className="before:content-[''] before:absolute before:w-0.5 before:h-[30px] before:bg-green before:-left-[30px] relative">
          Our clients' safety and reputation are our major concerns. We minimize
          the possibility of counterfeiting your product.
        </p>
      </div>
    </main>
  );
};

export default InnovationSystem;
