import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.text())
      .then((res) => setPosts([res]));
  }, []);

  return <>{posts}</>;
};

export default Home;
