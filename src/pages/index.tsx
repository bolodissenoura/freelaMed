import Hero from "@components/Hero";
import Feature from "@components/Feature";
import CTA from "@components/CallToAction";
import SEO from "@components/SEO";
import ImageSection from "@components/ImageSection";
import ImageSectionMockup from "@components/ImageSectionMockup";
import ImageSectionPix from "@components/ImageSectionPix";

const Home = () => {
  const pageTitle = `FreelaMed | Entre na lista de instrumentadores.`;
  return (
    <div className="main-content-container">
      <SEO
        title={pageTitle}
        description="Encontre o instrumentador de cirurgia certo para o seu hospital com nossa plataforma de conexão"
      />
      <Hero />
      <ImageSectionPix />
      <ImageSection />
      <Feature />
      <ImageSectionMockup />
      <CTA />
    </div>
  );
};
// 00020126330014BR.GOV.BCB.PIX011151514514800520400005303986540510.005802BR5907danizin6007jacapau62110507asasasa63048A6A
export default Home;
