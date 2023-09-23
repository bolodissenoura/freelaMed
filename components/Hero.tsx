import ButtonGroup from "@components/ButtonGroup";
import Button, { ButtonVariant } from "@components/Button/Button";

const Hero = () => {
  const alignment = "center";

  return (
    <section
      className="hero-container"
      style={{ backgroundImage: "url(hero.jpg)" }}>
      <section
        className="hero-container"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
        <div className="hero-content-container py-16 ">
          <h1 className="mx-auto mb-6 max-w-[844px] text-4xl font-extrabold md:text-center md:text-5xl">
            Conectando instrumentadores às cirurgias com excelência
          </h1>
          <p className="mx-auto mb-16 max-w-[844px] text-lg text-zinc-700 md:mb-10 md:text-center">
            A <strong>FreelaMed</strong> é uma plataforma de cadastro gratuito,
            criada com o objetivo de conectar instrumentadores cirúrgicos a
            hospitais de forma eficiente e prática.
          </p>
          <ButtonGroup className="wrap-sm wrap-px" alignment={alignment}>
            <Button
              text="Fazer parte"
              link="/quem-somos"
              icon="carbon:scalpel"
              variant={ButtonVariant.primary}
            />
          </ButtonGroup>
          <div className="mx-auto my-8 w-fit rounded-full bg-zinc-900 px-4 py-1 text-center text-[10px] font-semibold text-white md:text-xs">
            ✨ Seja um dos 500 primeiros instrumentadores e ganhe prioridade!
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
