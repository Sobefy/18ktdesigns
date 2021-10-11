import Header from "@components/CreateCustomRing/Header";
import Footer from "@components/Home/Footer";

import ContentfulApi from "@lib/contentful";
import { HomeSections } from "@lib/consts/graphQlQueries";
import { DynamicPage } from "@lib/types/interfaces";
import SectionRenderer from "@components/Common/SectionRenderer";

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

  return (
    <>
      <Header />
      <SectionRenderer sections={PageSections} />
      <Footer />
    </>
  );
};

export default Home;
