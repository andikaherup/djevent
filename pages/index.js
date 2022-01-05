import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>DJ event</title>
        <meta name='description' content='Welcome to DJ event' />
      </Head>
      <h1>Homepage</h1>
      <Link href='/about'>About</Link>
    </div>
  )
}
