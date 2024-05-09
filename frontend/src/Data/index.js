import {gql} from "graphql-tag";
const DATA_QUERY = gql`
{
  assets {
    homeComponent {
      carousal1Heading
      carousal1Content
    }
    aboutUs {
      aboutUsHeading
    }
  }
}
`;
export default DATA_QUERY;