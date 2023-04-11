import Hero from "@components/Hero";
import Highlight from "@components/Highlight";
import Feature from "@components/Feature";
import CTA from "@components/CallToAction";
import Logos from "@components/Logos";
import SEO from "@components/SEO";

const Home = () => {
  const pageTitle = `FreelaMed | Whitelist`;
  return (
    <div className="main-content-container">
      <SEO
        title={pageTitle}
        description="Encontre o instrumentador de cirurgia certo para o seu hospital com nossa plataforma de conexão"
      />
      <Hero />
      <Logos />
      <Highlight />
      <Feature />
      <CTA />
    </div>
  );
};

export default Home;
