const HeroSection = () => {
  return (
    <div className="w-full bg-[white] flex flex-col lg:flex-row justify-between items-center py-[40px] gap-[50px]">
      <div className="w-full lg:max-w-[791px] bg-[white] flex flex-col gap-[30px]">
        <div className="w-full bg-[white] font-[600] text-[30px] md:text-[43px] font-[Poppins] flex flex-col gap-[25px]">
          <p>
            Elevate your space with sleek minimalist furniture designs that
            inspire
          </p>
          <p className="font-[300] text-[16px] md:text-[20px] font-[Poppins]">
            Discover the beauty of minimalism. Transform your home with stylish
            sofas, streamlined dining tables, chic storage, and elegant decor
            for a modern, minimalist look.
          </p>

          <div className="bg-[white] w-full flex flex-col md:flex-row gap-4 md:gap-0 md:w-[313px] h-[48px] justify-between items-center">
            <div className="w-[131px] h-full bg-[#3C3228] rounded-[9px] text-[white] font-[500] text-[18px] font-[Poppins] flex justify-center items-center">
              Shop Now
            </div>
            <div className="w-auto md:w-[118px] h-[28px] font-[500] text-[18px] font-[Poppins] self-center md:self-end">
              <u>Watch Demo</u>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center bg-[white] gap-[20px] md:gap-[38px]">
          <div className="flex flex-col items-center bg-[white]">
            <span className="font-[400] text-[22px] md:text-[25px]">2500+</span>
            <div className="w-full text-[16px] font-[300] font-[Poppins]">
              Unique styles
            </div>
          </div>
          <div className="flex flex-col items-center bg-[white]">
            <span className="font-[400] text-[22px] md:text-[25px]">3000+</span>
            <div className="w-full text-[16px] font-[Poppins]">
              Happy customers
            </div>
          </div>
          <div className="flex flex-col items-center bg-[white]">
            <span className="font-[400] text-[22px] md:text-[25px]">1000+</span>
            <div className="w-full text-[16px] font-[Poppins]">
              Certified Outlets
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:max-w-[499px] rounded-[29px] bg-[white]">
        <img
          src="https://s3-alpha-sig.figma.com/img/0632/724b/907c4765ebe7798cd7418085eb1cb0b2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OiGmPz5zdsk4GzlK-pwCicKNnTwlT93uKsj~qCcKbLPzCB7L1ewwQLwEr6533jQwkSv-qlWS66SrjKmo6WLVsb5h6jJr0XqQT65Y1uyZKhviMgdkWlWDJfbUmixCh1PysGZ~UQ7ctZ355D8Mx7dzg5tjnE5eJQAqTp-~alaTSY9lFgzAhoozM7bAftop8Q4MlZvXXk0P6RcfcaZ1loudDkp53c1jYe7tlSqhSnps~GGJg98R2OF8qsrIQddF6FhLyxkEXLKFLFKb-rWi02gcp4CDIdkQofl5CRPnmoT56bIi-Q2G42mP-RGZJKAzCWiduXERmmTaEfIZdDbIRg4k6A__"
          alt="furniture"
          className="w-full rounded-[29px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
