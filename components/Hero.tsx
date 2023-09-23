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
    <section className="hero-container">
      <div className="hero-content-container py-16 ">
        <BadgeGroup alignment={alignment}>
          <BadgeContext>
            <span>pre-acesso</span>
          </BadgeContext>
          <BadgeMessage>boas-vindas ao freelamed!</BadgeMessage>
          <BadgeIcon icon="tabler:leaf" />
        </BadgeGroup>
        <SectionContent
          title="Conectando instrumentadores aos procedimentos cirúrgicos."
          alignment={alignment}
          isBigHeader={true}>
          <p>otimize seus resultados agora mesmo - cadastre-se!</p>
        </SectionContent>
        <ButtonGroup className="wrap-sm wrap-px" alignment={alignment}>
          <Button
            text="Sou instrumentador"
            link="/quem-somos"
            icon="ph:arrow-right-bold"
            variant={ButtonVariant.primary}
          />
          <Button
            text="Sou empresa"
            link="/contact"
            variant={ButtonVariant.secondary}
          />
        </ButtonGroup>
      </div>
    </section>
  );
};

export default Hero;
