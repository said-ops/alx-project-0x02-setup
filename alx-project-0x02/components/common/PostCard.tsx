import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <p className="text-sm text-gray-500 mt-2">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
