import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.text())
      .then((res) => setPosts([res]));
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography>Posts: {posts}</Typography>
      </CardContent>
    </Card>
  );
};

export default Home;
