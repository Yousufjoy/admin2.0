import type { NextPage } from "next";
import Login from "./screens/logIn";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Login />
      </main>
    </div>
  );
};
export default Home;
