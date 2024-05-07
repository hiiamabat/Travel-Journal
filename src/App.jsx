import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import data from "../data";

function App() {
  const posts = data.map((post) => {
    return <Posts key={post.id} post={post} />;
  });

  return (
    <>
      <Header />
      <main>
        <section className="posts">{posts}</section>
      </main>
    </>
  );
}

export default App;
