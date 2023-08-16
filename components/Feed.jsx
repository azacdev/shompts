"use client";

import { useEffect, useMemo, useState } from "react";
import PromptCard from "@components/PromptCard";

const PromptCardList = ({ data, handleToggleClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleToggleClick={handleToggleClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const filteredPost = useMemo(
    () =>
      posts.filter(
        (post) =>
          post.prompt.toLowerCase().includes(searchText.toLowerCase()) ||
          post.tag.toLowerCase().includes(searchText.toLowerCase())
      ),
    [posts, searchText]
  );

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleToggleClick = (tag) => {
    setSearchText(tag);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        data={filteredPost}
        handleToggleClick={handleToggleClick}
      />
    </section>
  );
};

export default Feed;
