import { HomeResponse } from "@lib/types/contentful";
import { GraphQLClient, gql } from "graphql-request";

const fetchURL = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`;
const graphQLClient = new GraphQLClient(fetchURL, {
  headers: {
    authorization: `Bearer ${process.env.CDA_TOKEN}`,
  },
});

export default class ContentfulApi {
  static async callContentful(query: string) {
    try {
      const data = await graphQLClient.request(query);
      return data;
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
  }

  static async getHomePageData() {
    const query = gql`
      {
        pageCollection(limit: 10) {
          items {
            type
            sectionsCollection(limit: 10) {
              items {
                type
                title
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
                  url
                  title
                  description
                  width
                  height
                }
              }
            }
          }
        }
      }
    `;
    const data: HomeResponse = await this.callContentful(query);
    return data;
  }
}
