import axios from "axios";

const apiCall = async (data: string) => {
  let res: any = await axios({
    url: "https://allusiondb.hasura.app/v1/graphql",
    method: "post",
    headers: {
      "x-hasura-admin-secret":
        "StXrciDZFfqn1mAYf1UxmbTcfLz9uq9doE7p6AAh1293YZcHcwEsXQcVxkI07mgU",
    },
    data: {
      query: `query MyQuery {${data}}`,
    },
  });

  let result = await res.data;

  return result;
};

export default apiCall;
