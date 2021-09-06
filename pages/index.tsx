import Header from "../components/CreateCustomRing/Header";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import CTA from '../components/Home/CTA/CTA';
import CTACollage from "../components/Home/CTACollage";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <CTA/>
      <CTACollage/>
    </>
  );
};

export default Home;
