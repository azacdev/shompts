"use client";

import { useEffect, useMemo, useState } from "react";
import PromptCard from "@/components/prompt-card";
import { CardsList } from "./cards-list";

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
      <form className="relative w-full flex-center max-w-2xl px-4 lg:px-8">
        <input
          type="text"
          placeholder="Search for prompt or a tag"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <CardsList data={filteredPost} handleToggleClick={handleToggleClick} />
    </section>
  );
};

export default Feed;
