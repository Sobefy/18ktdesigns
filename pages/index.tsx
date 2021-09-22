import Header from "../components/CreateCustomRing/Header";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import CTA from "../components/Home/CTA/CTA";
import CTACollage from "../components/Home/CTACollage";
import Newsletter from "../components/Home/NewsLetter/Newsletter";
import Footer from "@components/Home/Footer";
import Testimonials from "../components/Home/Testimonials";
import RecentProjects from "@components/Home/RecentProjects/RecentProjects";
import TabGroup from "../components/Home/TabGroup/TabGroup";
import ContentfulApi from "@lib/contentful";
import { HomeResponse } from "@lib/types/contentful";

interface HomeProps {
  data: HomeResponse;
}

// export const getStaticProps = async () => {
//   const data = await ContentfulApi.getHomePageData();

//   return {
//     props: {
//       data,
//     },
//   };
// };

const Home = () => {
  // console.log(data.pageCollection.items);
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <RecentProjects />
      <CTA />
      <CTACollage />
      <TabGroup />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
