import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

export default function EventPage() {
  const Router = useRouter();
  console.log(Router.query.slug);
  return (
    <Layout>
      <h1>My Event </h1>
      <h3>{Router.query.slug}</h3>
      <button
        onClick={() => {
          Router.push('/');
        }}
      >
        Click
      </button>
    </Layout>
  );
}
