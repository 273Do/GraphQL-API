import { gql, useQuery } from "@apollo/client";
import "./App.css";

const POSTS = gql`
  query {
    test {
      title
      body
    }
  }
`;

console.log(POSTS);

function Posts() {
  const { loading, error, data } = useQuery(POSTS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  // map関数のdata.testの部分は、GraphQLのクエリで取得したデータの構造に合わせる
  return data.test.map(({ title, body }) => (
    <div key={title}>
      <p>
        {title}: {body}
      </p>
    </div>
  ));
}

function App() {
  return (
    <>
      <div className="App">
        <h2>GraphQL Client</h2>
        <Posts />
      </div>
    </>
  );
}

export default App;
