import { GraphQLClient, gql } from "graphql-request";

const fetchURL = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`;
const graphQLClient = new GraphQLClient(fetchURL, {
  headers: {
    authorization: `Bearer ${process.env.CDA_TOKEN}`,
  },
});

export default class ContentfulApi {
  static async callContentful(
    query: string,
    variables: {} | undefined = undefined
  ) {
    try {
      const data = await graphQLClient.request(query, variables);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getDynamicPageData(id: string, dataQuery: string) {
    const query = gql`
      query ($id: String!) {
        page(id: $id) {
          title
          sectionsCollection(limit: 10) {
            items {
              ${dataQuery}
            }
          }
        }
      }
    `;

    const variables = {
      id,
    };

    const data = await this.callContentful(query, variables);

    return data;
  }
}
