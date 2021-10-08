export const heroSection = `
... on HeroSection { 
    title
    type
    topHeading
    heading
    description
    primaryAction {
      text
      primary
    }
    secondaryAction {
      text
      primary
    }
    image {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
}
`;

export const servicesSection = `
... on ServicesSection {
    title
    type
    heading
    image {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
    leftIcon {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
    servicesCollection(limit: 10) {
      items {
        sys {
          id
        }
        title
        heading
        description
      }
    }
}
`;

export const testimonialsSection = `
... on TestimonialsSection {
    title
    type
    topHeading
    heading
    leftArrow {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
    rightArrow {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
    cardsCollection(limit: 10) {
      items {
        title
        heading
        subHeading
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        description {
          json
        }
      }
    }
}
`;

export const recentProjectsSection = `
... on RecentProjectsSection {
    title
    type
    topHeading
    heading
    leftArrow {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
    rightArrow {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
    recentProjectsCollection(limit: 10) {
      items {
        title
        heading
        excerpt
        featuredImage {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
}
`;

export const ctaSection = `
... on CtaSection {
    title
    type
    heading
    headingSize
    ctaDescription: description {
      json
    }
    button {
      text
      primary
    }
}
`;

export const ctaCollageSection = `
... on CtaCollageSection {
    title
    type
    topHeading
    heading
    headingSize
    ctaDescription: description {
      json
    }
    button {
      text
      primary
    }
    image {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
}
`;

export const jewerlyTypeSection = `
... on JewerlyTypeSection {
    title
    type
    heading
    jewerlyCardsCollection: cardsCollection(limit: 10) {
      items {
        title
        categoryButton {
          text
        }
        heading
        description
        button {
          text
          primary
        }
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
}
`;

export const newsletterSection = `
... on NewsletterSection {
    title
    type
    heading
    description
    subHeading
    inputDefault
    button {
      text
      primary
    }
}
`;

export const accordionSection = `
... on AccordionSection {
    title
    type
    accordionCardsCollection(limit: 10) {
      items {
        title
        heading
        description
        grayBg
        whiteBg
      }
    }
}
`;

export const budgetingSection = `
... on BudgetingSection {
    title
    type
    topHeading
    heading
    description
    budgetingCardsCollection(limit: 10) {
      items {
        title
        weight
        purity
        diamondCarat
        materialsAndGemstones
        complexity
        button {
          text
          primary
        }
      }
    }
}
`;

export const rotatingRingSection = `
... on RotatingRingSection {
    title
    type
    topHeading
    heading
    description
    button {
      text
      primary
    }
    mediaHolder {
      title
      description
      contentType
      fileName
      size
      url
      width
      height
    }
}
`;

export const gridSection = `
... on GridSection {
    title
    type
    gridCardsCollection(limit: 10) {
      items {
        title
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        heading
        description
      }
    }
}
`;

export const imageGridSection = `
... on ImageGridSection {
    title
    type
    topHeading
    heading
    button {
      text
      primary
    }
    imagesCollection(limit: 10) {
      items {
        title
        imageTitle
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
}
`;

export const HomeSections = `
    ${heroSection}
    ${servicesSection}
    ${testimonialsSection}
    ${recentProjectsSection}
    ${ctaSection}
    ${ctaCollageSection}
    ${jewerlyTypeSection}
    ${newsletterSection}
`;
