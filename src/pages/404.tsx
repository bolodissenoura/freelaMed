import React from "react";
const Page404 = () => {
  return (
    <>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Oops, parece que o bisturi escapou!
                </h1>
                <p className="my-2 text-gray-800">
                  A página que você procura não foi encontrada, mas nossa equipe
                  está em uma busca minuciosa. Por favor, tente novamente ou volte para a home!
                </p>
                <a
                  href="/"
                  className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-primary-500 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                  Ir para a home
                </a>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </>
  );
};

export default Page404;
