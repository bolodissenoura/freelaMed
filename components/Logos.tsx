import LogoItems from "@components/Logos/LogoItems";
import LogoContainer from "@components/Logos/LogoContainer";
const DATA = [
  {
    title: "vivalle",
    logo: "/images/logos/vivalleLogo.png",
  },
  {
    title: "dortmed",
    logo: "/images/logos/dortmed.png",
  },
  {
    title: "vivalle",
    logo: "/images/logos/vivalleLogo.png",
  },
  {
    title: "dortmed",
    logo: "/images/logos/dortmed.png",
  },
  {
    title: "vivalle",
    logo: "/images/logos/vivalleLogo.png",
  },
  {
    title: "dortmed",
    logo: "/images/logos/dortmed.png",
  },
  {
    title: "vivalle",
    logo: "/images/logos/vivalleLogo.png",
  },
  {
    title: "dortmed",
    logo: "/images/logos/dortmed.png",
  },
];
const Logos = () => {
  return (
    <section className="logos-container wrap wrap-px">
      <div className="logos-content-container p-8 md:p-16 rounded-2xl my-24 bg-badge gap-y-8">
        <div className="content-container text-black/60 text-center">
          <p>
            Tenha acesso as diversas cirurgias por diversos hospitais do país.
          </p>
        </div>
        <LogoContainer>
          {DATA.map((item, index) => (
            <LogoItems logo={item.logo} title={item.title} key={index} />
          ))}
        </LogoContainer>
      </div>
    </section>
  );
};

export default Logos;
