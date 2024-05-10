import {gql} from "graphql-tag";
const DATA_QUERY = gql`
{
  assets {
    homeComponent {
      id
      carousal1Heading
      carousal1Content
      carousal2Heading
      carousal2Content
    }
    aboutUs {
      id
      aboutUsHeading
    }
  }
}
`;
export default DATA_QUERY;