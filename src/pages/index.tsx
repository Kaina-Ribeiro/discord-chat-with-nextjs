import Head from 'next/head';
import { ReactElement } from 'react';
import Layout from '../components/Layout';
import ServerList from '../components/ServerList';
import ServerName from '../components/ServerName';

const Home = () => {
  return (
    <>
      <ServerList />
      <ServerName />
    </>
  );
};

export default Home;
Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Discord</title>
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};
