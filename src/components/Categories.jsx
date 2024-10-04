import React from "react";

const Categories = () => {
  return (
    <>
      <div className="text-[36px] bg-[white] w-full font-[poppins] font-[500]">
          Top Categories
      </div>
      <div className="w-[100%] h-[666px] bg-[white] flex justify-center gap-[10px]">
        <div className="w-[50%] bg-[white]">
          <img
            src="https://s3-alpha-sig.figma.com/img/634b/f6ec/fb5bd7e7568eabe04dca37c4ff360c88?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOj41b-aAQxMeC~pUcHTjP370PsPbAVKazrwfHnC9~ddDdj0de1mVEQ78-3sQPG~fUd3S5pG-sE3eXwa1w0IQcBbZbSzHHkF1srPR~r2LjN-foYLse8IppGOUF6k5LhPP-58YTVYvUXoHxWKhuosZJ7AfxkPPgQOahOYd~bi6WImy7N8qxbNc8HRvZR9xb9tF3xVZnUjGSBB6IlCbCPqabcKh2wGzSQ-BW6F0eh39g5TgtCZATKUuNeUCuHhdGzi0bzPIW3fQU8hByDs8TqFWVcLgd0-LiBSLnbdwJMDIebzW83FbZrXoHZjPJ5Oy6vnjOoQ0VAt0j3FE3KPB8kYhg__"
            alt="kitchen"
            className="w-[100%] h-[100%] rounded-[29px]"
          />
        </div>
        <div className="w-[50%] bg-[white] flex flex-col gap-[19px]">
          <div className="h-[50%] bg-[white]">
            <img
              src="https://s3-alpha-sig.figma.com/img/4638/6328/6a82ab1a0e01e467b321b561b01cb772?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HmJwFM0-VT-7Zi8JKPzNpMj31QTd3BHpyvj2omGTyXn-VmZzC2Zdp5jyj4Kcwph0tDRR3sV3Do6E4T-WrQNqh570MJzcPjmj02pcm6q6ekT3B3XSvJz3aELUWQjBLXB7cpdnjRzLBaFMa971YE~-J9-kUkp8y67oYE0lRa3TSY06fHZJqIad7UgVSPXtukq~jCprKdt-4U5lxOG6T2GcNajVQPn-r8vF31mohAvVl6PMpjbySdhR1qZvKKMl0xG9Q2mX97XMENxZokKuzvkahcDCIsco2ScTfaq~LvPmtMGMiO6N~BUne0ojm4EvQ64vY1hGu6hdlUffeMOu1PTfRA__"
              alt="hall"
              className="w-full h-[100%] rounded-[29px]"
            />
          </div>
          <div className="h-[50%] bg-[white]">
            <img
              src="https://s3-alpha-sig.figma.com/img/2a35/acbe/6b4994a4ae422eedff524a63b05d38fb?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZGpS5GqSgPbKnNHJFdp4dj~KpH7f4sGVeaoydUcEUJYx2IXHoeDdTAQxHuBSJ4UckzoTw2cwTSYQQuxUXvKUZg7gb80b4TKxmGWHXf67NbBH1b8JBjDyfES5hHZyJUd-2vpEUIhVJaS7Vp~CmdgKCerseh6moYt81bStjHRnPUlI8BVyMbEkcFemXwkfumSqL4-4Hs7qQxynOe0ww8XoMAN9vfmVLGi3E7fbfxycieFZ-VFPd71ooJEg0TZjxnBXmaDzUcSGqvF~0R-w4NzqQAxXtM33vYpi-uQ0P1Bm3oilizhBRvE7TgoJRHXb8gSEN0scxaevwDvGPP-n65Xy9g__"
              alt="bedroom"
              className="w-[100%] h-[100%] rounded-[29px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
