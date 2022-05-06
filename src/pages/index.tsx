import Head from 'next/head';
import { ReactElement } from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import ServerList from '../components/ServerList';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const Home = () => {
  return (
    <>
      <ServerList />
    </>
  );
};

export default Home;
Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
