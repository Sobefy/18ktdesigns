import Hero from "@components/Home/Hero";
import Services from "@components/Home/Services";
import CTACollage from "@components/Home/CTACollage";
import Newsletter from "@components/Home/NewsLetter/Newsletter";
import Testimonials from "@components/Home/Testimonials";
import RecentProjects from "@components/Home/RecentProjects/RecentProjects";
import TabGroup from "@components/Home/TabGroup/TabGroup";
import CTA from "@components/Common/CTA";

import {
  CTACollageSection,
  CTASection,
  DynamicSection,
  HeroSection,
  NewsletterSection,
  RecentProjectsSection,
  ServicesSection,
  TestimonialsSection,
} from "@lib/types/interfaces";
import { SectionTypes } from "@lib/types/enums";

interface SectionRenderer {
  sections: DynamicSection[];
}

const SectionRenderer = ({ sections }: SectionRenderer) => {
  const RenderSection = ({ section }: { section: DynamicSection }) => {
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
        return <CTACollage data={section as CTACollageSection} />;
      case SectionTypes.jewelryTypeSection:
        return <TabGroup />;
      case SectionTypes.newsletterSection:
        return <Newsletter data={section as NewsletterSection} />;
      default:
        return null;
    }
  };

  return (
    <>
      {sections.map((section) => (
        <RenderSection key={section.sys.id} section={section} />
      ))}
    </>
  );
};

export default SectionRenderer;
