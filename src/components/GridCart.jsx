import React from 'react'

const GridCart = ({heading,imgurl,name,price}) => {
  return (
    <div className="w-[305px] h-[444px] bg-[#F0F0F0] flex flex-col justify-center items-center gap-[40px] rounded-[9px]">
        <div className="w-[224px] font-[poppins] h-[27px]  bg-[#F0F0F0] gap-[40px] text-[18px] font-[400] flex justify-center">
          {heading}
        </div>
        <div className="w-[258px] h-[258px] bg-[#F0F0F0]">
          <img
            src={imgurl}
            alt="chair"className="w-[258px] h-[258px]"
          />
        </div>
        <div
          style={{
            backgroundColor: "#F0F0F0",
            width: "100%",
            color: "#000000BD:",
            display: "flex",
            justifyContent: "space-between",
            paddingInline: "20px",
          }}
        >
          <div className="text-18[px] font-[400] font-[poppins]">{name}</div>
          <div>{price}</div>
        </div>
      </div>
  )
}

export default GridCart
