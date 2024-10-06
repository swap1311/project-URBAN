const Footer = () => {
  return (
    <div className="w-full bg-[#F0F0F0] flex flex-col md:flex-row justify-center items-center h-auto md:h-[282px] p-6 md:p-0 gap-[30px] md:gap-[67px]">
      <div className="w-full md:w-[300px] font-[poppins] h-auto md:h-[115px] bg-[#F0F0F0] flex flex-col items-center md:items-start gap-[15px] md:gap-[25px]">
        <span className="text-[24px] md:text-[33.5px] font-[700]">
          Urban Nest
        </span>
        <span
          className="text-[12px] md:text-[14px] text-center md:text-left font-normal"
          style={{ color: "#00000099" }}
        >
          Transform your home into an urban oasis with Urban Nest where comfort
          meets style.
        </span>
      </div>

      <div className="w-full md:w-[148px] h-auto md:h-[28px] bg-[#F0F0F0] flex justify-center md:justify-between gap-4 md:gap-0 items-center md:justify-self-auto">
        <img
          src="https://www.pngitem.com/pimgs/m/366-3662072_twitter-icon-transparent-outline-twitter-logo-black-and.png"
          alt="twitter-icon"
          className="w-[26px] h-[26px] rounded-full border border-gray-400"
        />
        <img
          src="https://www.citypng.com/public/uploads/preview/-115953274687awrbhh8j7.png?v=2023051004"
          alt="facebook-icon"
          className="w-[26px] h-[26px] rounded-full border border-gray-400"
        />
        <img
          src="https://i.pinimg.com/736x/7d/bd/0b/7dbd0b51c20a695901a84c4c083500f6.jpg"
          alt="instagram-icon"
          className="w-[26px] h-[26px] rounded-full border border-gray-400"
        />
        <img
          src="https://th.bing.com/th/id/OIP.3GspeQLCpVpgrx4hEivApwAAAA?w=256&h=256&rs=1&pid=ImgDetMain"
          alt="github-icon"
          className="w-[26px] h-[26px] rounded-full border border-gray-400"
        />
      </div>
    </div>
  );
};

export default Footer;
