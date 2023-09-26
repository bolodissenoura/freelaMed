import React from "react";
import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="flex justify-center content-between w-full">
      <div className="flex justify-center content-between px-10 md:w-8/12 flex-col md:flex-row">
        <div>
          <p className="text-4xl font-extrabold text-center w-full md:text-left ">
            Crie sua agenda, <br /> do seu jeito.
          </p>
          <p className="text-2xl text-center w-full md:text-left ">
            <span className="text-primary-500 bolder-1">+</span> Aceite{" "}
            <span className="text-primary-500 bolder-1">
              cirurgias a todo momento
            </span>
            , em qualquer lugar.
          </p>
          <p className="text-2xl text-center w-full md:text-left ">
            <span className="text-primary-500 bolder-1">+</span> Acesso a uma
            ampla <span className="text-primary-500 bolder-1">rede</span> de
            hospitais e cirurgiões.
          </p>
          <p className="text-2xl text-center w-full md:text-left ">
            <span className="text-primary-500 bolder-1">+</span> Maior
            flexibilidade para escolher os tipos de cirurgias, locais e horários
            de trabalho, permitindo um{" "}
            <span className="text-primary-500 bolder-1">melhor equilíbrio</span>{" "}
            entre vida pessoal e profissional.
          </p>
        </div>
        <Image
          src="/images/mockup1.png"
          alt="mockup do app"
          className="w-auto"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default ImageSection;
