import ContentfulApi from "@lib/contentful";
import { HowItWorksPageSections } from "@lib/consts/graphQlQueries";
import { DynamicPage } from "@lib/types/interfaces";
import Header from "@components/CreateCustomRing/Header";
import SectionRenderer from "@components/Common/SectionRenderer";
import Footer from "@components/Home/Footer";

interface HowItWorksProps {
  data: DynamicPage;
}

export const getStaticProps = async () => {
  const data = await ContentfulApi.getDynamicPageData(
    process.env.CONTENTFUL_DYNAMIC_PAGE_HOW_IT_WORKS || "",
    HowItWorksPageSections
  );

  return {
    props: {
      data,
    },
  };
};

const HowItWorks = ({ data }: HowItWorksProps) => {
  const {
    page: {
      sectionsCollection: { items: PageSections },
    },
  } = data;
  console.log(PageSections);

  // return (
  //   <>
  //     <div className="relative">
  //       <RotatingRing />
  //       <GridSection />
  //       <Budgeting />
  //       <ImageGrid />
  //       <Accordion />
  //       {/* <CTA
  //         textTitleSize="md"
  //         titleText="Ready to create a one-of-a-kind ring with us?"
  //         primarySubtitle="Drop us a line, and we'll get in touch."
  //         secondarySubtitle="We'll see if we're a match and how we can help each other."
  //         btnText="Sign up"
  //         onClick={() => {}}
  //       /> */}
  //     </div>
  //   </>
  // );
  return (
    <>
      <Header />
      <SectionRenderer sections={PageSections} />
      <Footer />
    </>
  );
};

export default HowItWorks;
