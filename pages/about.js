import Layout from '../components/Layout';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <Layout title='About University Events'>
      <h1>about page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nihil
        minus accusantium vitae, molestiae consequuntur molestias esse? Tempora,
        dignissimos vero, velit culpa illo eius atque sunt beatae a, at quod!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        magnam beatae vitae consequatur adipisci nostrum illo consequuntur
        blanditiis eveniet expedita nam eligendi omnis
      </p>
      <Link href='/'>Home</Link>
    </Layout>
  );
}
