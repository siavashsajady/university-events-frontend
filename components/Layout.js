import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
import styles from '@/styles/Layout.module.css';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keywords' content={keywords}></meta>
      <Header />
      {router.pathname === '/' && <Showcase />}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title:
    'University Events | Find the Academic-related Event or a High Impact Event',
  description:
    'All such events that take place on the University campus are considered University events ',
  keywords:
    'University, event, academic, outdoor space , campus,students,meetings, holiday party, picnic',
};
