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
import { heroSection, HomeSections } from "@lib/consts/graphQlQueries";
import {
  DynamicPage,
  DynamicSection,
  DynamicSections,
  HeroSection,
  SectionTypes,
} from "@lib/types/contentful";

interface HomeProps {
  data: DynamicPage;
}

export const getStaticProps = async () => {
  const data = await ContentfulApi.getDynamicPageData(
    process.env.CONTENTFUL_DYNAMIC_PAGE_HOME || "",
    HomeSections
  );

  return {
    props: {
      data,
    },
  };
};

const Home = ({ data }: HomeProps) => {
  const {
    page: {
      sectionsCollection: { items: PageSections },
    },
  } = data;

  const RenderSection = (section: DynamicSection) => {
    switch (section.type) {
      case SectionTypes.heroSection:
        return <Hero data={section as HeroSection} />;
      case SectionTypes.servicesSection:
        return <Services />;
      case SectionTypes.testimonials:
        return <Testimonials />;
      case SectionTypes.recentProjects:
        return <RecentProjects />;
      case SectionTypes.cta:
        return <CTA />;
      case SectionTypes.ctaCollage:
        return <CTACollage />;
      case SectionTypes.jewelryTypeSection:
        return <TabGroup />;
      case SectionTypes.newsletterSection:
        return <Newsletter />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      {PageSections.map((section) => RenderSection(section))}
      <Footer />
    </>
  );
};

export default Home;
