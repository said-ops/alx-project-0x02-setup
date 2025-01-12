import Head from 'next/head';
import React, { useState } from 'react';

import Card from '../components/common/Card';
import PostModal from '../components/common/postModal';
import Header from '../components/layout/Header';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSavePost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <button onClick={handleOpenModal}>Create Post</button>
      <PostModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSavePost} />
      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Home;
