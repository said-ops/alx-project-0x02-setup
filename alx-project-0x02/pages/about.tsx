import Head from 'next/head';
import React from 'react';
import Button from '@/components/common/Button';
import Header from '../components/layout/Header';

const About: React.FC = () => {
  return (
    <div className="p-6">
      <Header />
      <Head>
        <title>About</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <div className="flex flex-col space-y-4">
        <Button size="small" shape="rounded-sm">
          Small Rounded Button
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Rounded Button
        </Button>
        <Button size="large" shape="rounded-full">
          Large Rounded Button
        </Button>
      </div>
    </div>
  );
};

export default About;
