import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Box } from 'theme-ui';
import Table from '../components/table';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Box>hello</Box>
      <Table />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
