import React from 'react';
import classes from './Page.module.scss';

interface PageProps {
  children?: React.ReactNode; 
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <section className={classes.Page}>
      {children}
    </section>
  );
};

export default Page;