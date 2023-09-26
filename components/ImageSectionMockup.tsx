import React from "react";
import Image from "next/image";

const ImageSectionMockup = () => {
  return (
    <div
      style={{ backgroundImage: "url(/images/wpp.png)" }}
      className="flex justify-center content-between w-full h-96 md:mb-80">
      <Image
        style={{ zIndex: 1 }}
        src="/images/homepage.png"
        alt="mockup do app"
        className="absolute rounded-2xl shadow-2xl mt-6"
        height={1000}
        width={1000}
      />
    </div>
  );
};

export default ImageSectionMockup;
