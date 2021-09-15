import Header from "../components/CreateCustomRing/Header";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import CTACollage from "../components/Home/CTACollage";
import Newsletter from "../components/Home/NewsLetter/Newsletter";
import Footer from "@components/Home/Footer";
import Testimonials from "../components/Home/Testimonials";
import RecentProjects from "@components/Home/RecentProjects/RecentProjects";
import TabGroup from '../components/Home/TabGroup/TabGroup';
import CTABuildYourRing from '../components/Home/CTABuildYourRing/CTABuildYourRing';


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <RecentProjects />
      <CTABuildYourRing/>
      <CTACollage />
      <TabGroup/>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
