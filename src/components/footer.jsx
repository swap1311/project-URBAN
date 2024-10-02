function Footer (){
    return(
      <div className="w-[100%] bg-[#F0F0F0] flex justify-center items-center h-[282px] gap-[67px]">
      <div className="w-[300px] font-[poppins]  h-[115px] bg-[#F0F0F0] flex justify-flex flex-col gap-[25px]">
        <span className="text-[33.5px] font-[700]"> Urban Nest</span>
        {<span className="text-[14px] font-full" style={{ color: '#00000099' }}>Transform your home into an urban oasis with Urban Nest  where comfort meets style</span>}
      </div>
      <div className="w-[148px]  bg-[#F0F0F0] justify-between justify-self-auto flex h-[28px] ">
      <img src="https://www.pngitem.com/pimgs/m/366-3662072_twitter-icon-transparent-outline-twitter-logo-black-and.png"
        alt="twitter-icon" className="h-[28px] rounded-[50%] border-[1px] border-[gray]" />
      <img src="https://www.citypng.com/public/uploads/preview/-115953274687awrbhh8j7.png?v=2023051004"
        alt="facebook-icon" className="h-[28px] rounded-[50%] border-[1px] border-[gray]" />
      <img src="https://i.pinimg.com/736x/7d/bd/0b/7dbd0b51c20a695901a84c4c083500f6.jpg"
        alt="instagram-icon" className="h-[28px] rounded-[50%] border-[1px] border-[gray]" />
      <img src="https://th.bing.com/th/id/OIP.3GspeQLCpVpgrx4hEivApwAAAA?w=256&h=256&rs=1&pid=ImgDetMain"
        alt="github-icon" className="h-[28px] rounded-[50%] border-[1px] border-[gray]" />
    </div>         
  </div>
    )
}
export default Footer;