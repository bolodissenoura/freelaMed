import SectionContent from "@components/Section/SectionContent";
import ButtonGroup from "@components/ButtonGroup";
import SectionImage from "@components/Section/SectionImage";
import BadgeGroup from "@components/BadgeGroup";
import Button, { ButtonVariant } from "@components/Button/Button";
import BadgeContext from "@components/Badge/BadgeContext";
import BadgeMessage from "@components/Badge/BadgeMessage";
import BadgeIcon from "@components/Badge/BadgeIcon";
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
          <BadgeGroup alignment={alignment}>
            <BadgeContext>Oportunidade limitada</BadgeContext>
            Freelamed
            <BadgeIcon icon="maki:doctor" />
          </BadgeGroup>
          <SectionContent
            title="Conectando Instrumentadores às Cirurgias com Excelência"
            alignment={alignment}
            isBigHeader={true}>
            <p>
              Cadastre-se na Freelamed agora e faça parte da revolução cirúrgica
            </p>
          </SectionContent>
          <ButtonGroup className="wrap-sm wrap-px" alignment={alignment}>
            <Button
              text="Fazer parte"
              link="/quem-somos"
              icon="ph:arrow-right-bold"
              variant={ButtonVariant.primary}
            />
          </ButtonGroup>
        </div>
      </section>
    </section>
  );
};

export default Hero;
