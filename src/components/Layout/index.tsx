import { ReactNode } from 'react';
import { Grid } from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Grid>{children}</Grid>
    </>
  );
};

export default Layout;
