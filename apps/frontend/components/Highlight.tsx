import SectionContent from "@components/Section/SectionContent";
import ButtonGroup from "@components/ButtonGroup";
import SectionHighlight from "@components/Section/SectionHighlight";
import Button, { ButtonVariant } from "@components/Button/Button";

const DATA = [
  {
    title: "#1 Garantia para empresas",
    content: `Sabemos que qualidade é a chave do sucesso. Para isso contaremos com um sistema de avaliações para os instrumentadores, assim você como empresa pode escolher o que mais encaixa com suas necessidades.`,
    image: "/images/Hero.jpg",
    imageAltTag: "highlight-1",
    icon: "ph:lightning",
    link: "/pricing",
    linkTitle: "Saber mais",
    reversed: false,
  },
  {
    title: "#2 Segurança para o Instrumentador",
    content: `Saiba como e quando vamos te pagar! A nossa transparência é a chave do sucesso. Seu dinheiro via Pix instantaneamente assim que realizar a cirurgia.`,
    image: "/images/highlight-2.jpg",
    imageAltTag: "highlight-2",
    icon: "material-symbols:attach-money",
    link: "/get-started",
    linkTitle: "Cadastrar minha chave PIX",
    reversed: true,
  },
  {
    title: "#3 Clube de Bônus",
    content: `Cashback instantâneo via PIX, premiações, gamification e diversas maneiras de te premiar por sua fidelidade conosco.`,
    image: "/images/Hero.jpg",
    imageAltTag: "highlight-3",
    icon: "mdi:people-group",
    link: "/quem-somos",
    linkTitle: "Saber mais",
    reversed: false,
  },
];

const Highlight = () => {
  const alignment = "left";
  return (
    <section className="highlight-container my-24">
      <div className="highlight-content mb-16">
        <SectionContent
          title="Saiba como revolucionaremos o mercado e faça parte !"
          subheading="Nova proposta"
          alignment={alignment}
          isBigHeader={false}>
          <p>Somos uma plataforma completa. </p>
          <p>
            Que conecta instrumentadores cirurgicos qualificados as empresas e
            hospitais.
          </p>
        </SectionContent>
      </div>
      <div className="highlight-image-container">
        {DATA.map((item, index) => (
          <SectionHighlight
            key={index}
            title={item.title}
            content={item.content}
            image={item.image}
            imageAlt={item.imageAltTag}
            linkTitle={item.linkTitle}
            link={item.link}
            icon={item.icon}
            isReversed={item.reversed}
          />
        ))}
      </div>
    </section>
  );
};

export default Highlight;
