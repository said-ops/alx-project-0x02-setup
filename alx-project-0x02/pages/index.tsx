import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to alx-project-2</title>
      </Head>
      <Header />
      <main>
        <h1>Welcome to Next.js with TypeScript and Tailwind CSS</h1>
      </main>
    </div>
  );
}
