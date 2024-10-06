const Preorder = () => {
  return (
    <>
      <div className="w-full h-[74px] bg-[white] p-4 md:p-[10px]">
        <span className="text-[24px] md:text-[36px] w-full text-left font-[poppins] font-[500]">
          Interiors by Urban Nest
        </span>
      </div>

      <div
        className="w-full min-h-[400px] md:min-h-[598px]  flex flex-col md:flex-row px-4 md:px-[149px] py-[50px] md:py-[70px]"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/312c/963f/8fb64923e056e79a5d52f7419897d7d1?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YP6R8SUH5WTQv5~RIflCOfFSE6dntLThjbZhzLykdo2lc3DTJeaGnaJ8NvuLM9lzFSTEHtxEM1RGVuR8wuDT9W0g2nRnM1T56wtRx9HpZLKPaR5W45NhyOk-bl8iJf~3w9Rj31J6kauyp89YMFno8-4PvJDBSLRAzhkIkAuFKwXES1sb~3Z0Y6tGL1cogDbuzCj6w-dT5hJDWHqIWH4BUsXEw1dRFn3usefucYrT6tfBTrkijMBw1MmlAr1l~H5WBYn8aeheS6h-MyMWVrz~HokrS6wwmAvZ6eAAJ~eZZPOaQ3CrakFJnLq7n03gH2-PLF2F4sGsjpxYuzj-0GLdrA__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full  bg-transparent flex flex-col flex-wrap gap-[19px] md:items-start text-center md:text-left">
          <div className="bg-transparent">
            <span className="text-[36px] md:text-[54px] font-[500] font-[poppins] text-[white] leading-tight">
              Craft Your Ideal Furniture Masterpieces Today
            </span>
          </div>

          <div className="min-h-[50px] bg-transparent">
            <span className="text-[14px] md:text-[16px] font-[500] font-[poppins] text-[white]">
              Whether it's a sleek wooden chair, a plush sofa, or a functional
              table with drawers, our platform offers endless possibilities. Our
              team of skilled artisans uses only the finest materials to create
              bespoke pieces that are both functional and beautiful.
            </span>
          </div>

          <div className="w-[138px] h-[38px] bg-[#3C3228] text-[white] font-[500] text-[14px] font-[poppins] flex justify-center items-center rounded-md cursor-pointer">
            Pre-Order Now
          </div>
        </div>
      </div>
    </>
  );
};

export default Preorder;
