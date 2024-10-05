import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Categories from "./components/Categories";
import Preorder from "./components/Preorder";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100%] bg-[white] flex flex-col  justify-between  p-[50px] gap-[40px]">
      <Navbar />
      <div className="w-full bg-[white] h-[717px] flex justify-between py-[40px] gap-[50px]">
        <div className="w-[50%] h-full bg-[white] gap-[63px]">
          <div className="w-full h- bg-[white] font-[600] text-[43px] font-[poppins] flex flex-col gap-[25px]">
            <p>
              Elevate your space with sleek minimalist furniture designs that
              inspire
            </p>
            <p className="font-[300] text-[20px] font-[poppins]">
              Discover the beauty of minimalism. Transform your home with
              stylish sofas, streamlined dining tables, chic storage, and
              elegant decor for a modern, minimalist look
            </p>
            <div className="bg-[white] w-[313px] h-[48px] flex justify-between items-center">
              <div className="w-[131px] h-full bg-[#3C3228] text-[white] font-[500] text-[18px] font-[poppins] flex justify-center items-center">
                shop now
              </div>
              <div className="w-[118px] h-[28px] font-[500] text-[18px] font-[poppins] self-end">
                <u>Watch demo</u>
              </div>
              
                
            </div>
          </div>
          <div className="w-full h-[100px] bg-[white] flex jutsify-row"></div>
            {/* <div className="w-full h-[100px] bg-[yellow] flex jutsify-row">hello</div> */}
            <div class="w-[591px] h-[77px] flex flex-row flex-auto bg-[white] gap-[38px]">
        <div className="w-[75px] h-[38px]">
          2500+
          <div className="w-[104px] h-[24px] font-[300] font-[poppins]">
            Unique styles
          </div>
        </div>
        <div>
          3000+
          <div className="w-[141px] h-[full] font-[16px] font-[poppins]">
            Happy customers
          </div>
        </div>

        <div className="w-[50px] h-[33px]">
          1000+
          <div className=" w-[128px] h-[24px] font-[300] font-[poppins]">
            Certified Outlets
          </div>
        </div>
      </div>
        </div>
        <div className="w-[499px] rounded-[29px] flex full bg-[white] ]">
          <img
            src="https://s3-alpha-sig.figma.com/img/0632/724b/907c4765ebe7798cd7418085eb1cb0b2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OiGmPz5zdsk4GzlK-pwCicKNnTwlT93uKsj~qCcKbLPzCB7L1ewwQLwEr6533jQwkSv-qlWS66SrjKmo6WLVsb5h6jJr0XqQT65Y1uyZKhviMgdkWlWDJfbUmixCh1PysGZ~UQ7ctZ355D8Mx7dzg5tjnE5eJQAqTp-~alaTSY9lFgzAhoozM7bAftop8Q4MlZvXXk0P6RcfcaZ1loudDkp53c1jYe7tlSqhSnps~GGJg98R2OF8qsrIQddF6FhLyxkEXLKFLFKb-rWi02gcp4CDIdkQofl5CRPnmoT56bIi-Q2G42mP-RGZJKAzCWiduXERmmTaEfIZdDbIRg4k6A__"
            alt="furniture"
            className="w-[499px]"
          />
        </div>
      </div>
      {/* <div class="w-[591px] h-[77px] flex flex-row flex-auto bg-[white] gap-[38px]">
        <div className="w-[75px] h-[38px]">
          2500+
          <div className="w-[104px] h-[24px] font-[300] font-[poppins]">
            Unique styles
          </div>
        </div>
        <div>
          3000+
          <div className="w-[141px] h-[full] font-[16px] font-[poppins]">
            Happy customers
          </div>
        </div>

        <div className="w-[50px] h-[33px]">
          1000+
          <div className=" w-[128px] h-[24px] font-[300] font-[poppins]">
            Certified Outlets
          </div>
        </div>
      </div> */}

      <Categories />
      <Grid />
      <Preorder />
      <Footer />
    </div>
  );
}

export default App;
