import FeatureContent from "@components/Feature/FeatureContent";

const DATA = [
  {
    title: "Para instrumentadores",
    content: `Tenha acesso a diversas cirurgias que encaixem na sua agenda.`,
    icon: "carbon:scalpel",
    link: "/pricing",
    linkTitle: "",
  },
  {
    title: "Para hospitais",
    content: `A Freelamed oferece acesso imediato a instrumentadores cirúrgicos altamente qualificados para resolver emergências de falta de última hora.`,
    icon: "lucide:mouse-pointer",
    link: "/get-started",
    linkTitle: "",
  },
  {
    title: "Poucas vagas",
    content: `Na Freelamed, somos mais do que uma simples conexão. Por isso, nessa fase inicial contaremos com um número reduzido de profissionais.`,
    icon: "ri:hourglass-fill",
    link: "/quem-somos",
    linkTitle: "",
  },
];

const Feature = () => {
  return (
    <section className="feature-container py-24 bg-badge">
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
