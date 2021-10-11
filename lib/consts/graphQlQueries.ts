export const heroSection = `
... on HeroSection {
    sys {
      id
    }
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
    sys {
      id
    }
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
    sys {
      id
    }
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
    sys {
      id
    }
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
    sys {
      id
    }
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
    sys {
      id
    }
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
    sys {
      id
    }
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
  sys {
    id
  }
  title
  type
  heading
  description
  input {
    label
    type
    placeholder
  }
  button {
    text
    primary
  }
}
`;

export const accordionSection = `
... on AccordionSection {
  sys {
    id
  }
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
  sys {
    id
  }
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
  sys {
    id
  }
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
  sys {
    id
  }
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
  sys {
    id
  }
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

export const HowItWorksPageSections = `
  ${rotatingRingSection}
  ${gridSection}
  ${budgetingSection}
  ${imageGridSection}
  ${accordionSection}
  ${ctaSection}
`;
