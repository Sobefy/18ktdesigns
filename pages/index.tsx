import Header from "@components/CreateCustomRing/Header";
import Hero from "@components/Home/Hero";
import Services from "@components/Home/Services";
import CTACollage from "@components/Home/CTACollage";
import Newsletter from "@components/Home/NewsLetter/Newsletter";
import Footer from "@components/Home/Footer";
import Testimonials from "@components/Home/Testimonials";
import RecentProjects from "@components/Home/RecentProjects/RecentProjects";
import TabGroup from "@components/Home/TabGroup/TabGroup";
import CTA from "@components/Common/CTA";

import ContentfulApi from "@lib/contentful";
import { HomeSections } from "@lib/consts/graphQlQueries";
import {
  CTASection,
  DynamicPage,
  DynamicSection,
  HeroSection,
  RecentProjectsSection,
  ServicesSection,
  TestimonialsSection,
} from "@lib/types/interfaces";
import { SectionTypes } from "@lib/types/enums";

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

  console.log(data);

  const RenderSection = (section: DynamicSection) => {
    switch (section.type) {
      case SectionTypes.heroSection:
        return <Hero data={section as HeroSection} />;
      case SectionTypes.servicesSection:
        return <Services data={section as ServicesSection} />;
      case SectionTypes.testimonials:
        return <Testimonials data={section as TestimonialsSection} />;
      case SectionTypes.recentProjects:
        return <RecentProjects data={section as RecentProjectsSection} />;
      case SectionTypes.cta:
        return <CTA data={section as CTASection} onClick={() => {}} />;
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
