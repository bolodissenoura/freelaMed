import React from "react";
import Image from "next/image";

const ImageSectionPix = () => {
  return (
    <div className="flex justify-center content-between w-full">
      <div className="flex justify-center content-between px-10 md:w-8/12 flex-col md:flex-row text-center align-middle">
        <Image
          src="/images/mockup3.png"
          alt="Demonstração do pagamento via pix"
          className="w-auto"
          quality={100}
          height={500}
          width={550}
        />
        <div className="md:mt-64">
          <p className="text-4xl font-extrabold w-full md:text-left ">
            Sem complicações na hora de{" "}
            <span className="text-primary-500 bolder-1">
              sacar o seu dinheiro
            </span>
            .
          </p>
          <p className="text-2xl w-full md:text-left">
            Valide a sua conta, e receba o seu dinheiro{" "}
            <span className="text-primary-500 bolder-1">via pix</span> sem a
            necessidade de verificar a sua identidade toda vez que for
            transferir seu saldo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageSectionPix;
