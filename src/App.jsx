import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

     <div className="w-[100%] h-[100vh] bg-[#FFFFFF] flex flex-col items-start p-[50px]">
      <div className="w-[256px] h-[54px] bg-[#FFFFFF] flex justify-center p-[10px]">
          <div className="w-[277] font-[Poppins] h-[54px] flex justify-left">
            <span className="text-[36px] font-[500]">Top Categories</span>
            <div className="w-[665px] h-[666px] flex space-x-4 right ">
            <div className='left-side'/>
              <img src="https://s3-alpha-sig.figma.com/img/634b/f6ec/fb5bd7e7568eabe04dca37c4ff360c88?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOj41b-aAQxMeC~pUcHTjP370PsPbAVKazrwfHnC9~ddDdj0de1mVEQ78-3sQPG~fUd3S5pG-sE3eXwa1w0IQcBbZbSzHHkF1srPR~r2LjN-foYLse8IppGOUF6k5LhPP-58YTVYvUXoHxWKhuosZJ7AfxkPPgQOahOYd~bi6WImy7N8qxbNc8HRvZR9xb9tF3xVZnUjGSBB6IlCbCPqabcKh2wGzSQ-BW6F0eh39g5TgtCZATKUuNeUCuHhdGzi0bzPIW3fQU8hByDs8TqFWVcLgd0-LiBSLnbdwJMDIebzW83FbZrXoHZjPJ5Oy6vnjOoQ0VAt0j3FE3KPB8kYhg"
              alt="kitchen icon" className="h-[600px] border-[29px] round-[25%] p-[10px] "/>
              <div className='right-side p-[10px]'/>
              <img src="https://th.bing.com/th/id/OIP.0xi1RsPdaDmyncwrGfVOAwHaEo?rs=1&pid=ImgDetMain_"
              alt="hall icon" className="h-[320.5px] border-spacing-x-80 "/>
               <img src="https://s3-alpha-sig.figma.com/img/2a35/acbe/6b4994a4ae422eedff524a63b05d38fb?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZGpS5GqSgPbKnNHJFdp4dj~KpH7f4sGVeaoydUcEUJYx2IXHoeDdTAQxHuBSJ4UckzoTw2cwTSYQQuxUXvKUZg7gb80b4TKxmGWHXf67NbBH1b8JBjDyfES5hHZyJUd-2vpEUIhVJaS7Vp~CmdgKCerseh6moYt81bStjHRnPUlI8BVyMbEkcFemXwkfumSqL4-4Hs7qQxynOe0ww8XoMAN9vfmVLGi3E7fbfxycieFZ-VFPd71ooJEg0TZjxnBXmaDzUcSGqvF~0R-w4NzqQAxXtM33vYpi-uQ0P1Bm3oilizhBRvE7TgoJRHXb8gSEN0scxaevwDvGPP-n65Xy9g__"
               alt="bedroom" className="h-[320.5px] border-[29]  border-y-8"/>
              
            </div>
            </div>
      </div>
          <div className="w-[1340px] flex justify-center items-center h-[282px] gap-[57px] bg-[#F0F0F0]">
            <div className="w-[300px] font-[Poppins]  h-[24px] flex flex-col gap-[25px]">
              <span className="text-[33.5px] font-[700]"> Urban Nest</span>
              <span className="text-[14px] font-[400]">Transform your home into an urban oasis with Urban Nest  where comfort meets style</span>
              </div>
              <div className="w-[148px] justify-self-auto flex h-[28px]">
                  <img src="https://www.pngitem.com/pimgs/m/366-3662072_twitter-icon-transparent-outline-twitter-logo-black-and.png" 
                alt="twitter-icon" className="h-[28px] rounded-[50%] border-[1px]border-[gray]"/>
                  <img src="https://logodix.com/logo/14710.png"
                alt="facebook-icon" className="h-[28px] rounded-[50%] border-[1px]border-[gray]"/>
                  <img src="https://i.pinimg.com/736x/7d/bd/0b/7dbd0b51c20a695901a84c4c083500f6.jpg" 
                alt="instagram-icon" className="h-[28px] rounded-[50%] border-[1px]border-[gray]"/>
                  <img src="https://th.bing.com/th/id/OIP.3GspeQLCpVpgrx4hEivApwAAAA?w=256&h=256&rs=1&pid=ImgDetMain" 
                alt="github-icon" className="h-[28px] rounded-[50%] border-[1px]border-[black]"/>
                 <p></p>
          </div>
          </div>
          </div>
  )
}

export default App
