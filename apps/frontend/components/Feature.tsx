import FeatureContent from "@components/Feature/FeatureContent";

const DATA = [
  {
    title: "Para Instrumentador",
    content: `Tenha acesso a diversas cirurgias que encaixem na sua agenda.`,
    icon: "ph:lightning",
    link: "/pricing",
    linkTitle: "Em breve",
  },
  {
    title: "Acesso para Empresas",
    content: `Tenha acesso aos melhores profissionais no seu tempo.`,
    icon: "lucide:mouse-pointer",
    link: "/get-started",
    linkTitle: "Em breve",
  },
  {
    title: "Faça parte do nosso grupo",
    content: `Duis malesuada faucibus est. Ut pulvinar gravida sapien sed efficitur.`,
    icon: "ph:lightning",
    link: "/quem-somos",
    linkTitle: "Em breve",
  },
];

const Feature = () => {
  return (
    <section className="feature-container my-24 py-24 bg-badge">
      <div className="feature-content wrap wrap-px">
        <div className="feature-content-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 gap-8">
            {DATA.map((item, index) => (
              <FeatureContent
                key={index}
                title={item.title}
                content={item.content}
                link={item.link}
                linkTitle={item.linkTitle}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
