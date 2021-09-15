import Header from "../components/CreateCustomRing/Header";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import CTACollage from "../components/Home/CTACollage";
import Newsletter from "../components/Home/NewsLetter/Newsletter";
import Footer from "@components/Home/Footer";
import Testimonials from "../components/Home/Testimonials";
import RecentProjects from "@components/Home/RecentProjects/RecentProjects";
import TabGroup from "../components/Home/TabGroup/TabGroup";
import CTA from "@components/Common/CTA";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <RecentProjects />
      <CTA
        textTitleSize="lg"
        titleText="let's build your ring."
        primarySubtitle="Drop us a line, and we'll get in touch."
        secondarySubtitle="'ll see if we're a match and how we can help each other."
        btnText="Start a Project"
        onClick={() => {}}
      />
      <CTACollage />
      <TabGroup />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
