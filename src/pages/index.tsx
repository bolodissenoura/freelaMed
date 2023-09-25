import Hero from "@components/Hero";
import Feature from "@components/Feature";
import CTA from "@components/CallToAction";
import SEO from "@components/SEO";

const Home = () => {
  const pageTitle = `FreelaMed | Entre na lista de instrumentadores.`;
  return (
    <div className="main-content-container">
      <SEO
        title={pageTitle}
        description="Encontre o instrumentador de cirurgia certo para o seu hospital com nossa plataforma de conexão"
      />
      <Hero />
      {/* <Logos /> */}
      {/* <Highlight /> */}
      <Feature />
      <CTA />
    </div>
  );
};

export default Home;
