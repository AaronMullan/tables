import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Box } from 'theme-ui';
import Table from '../components/table';
import { graphql, useStaticQuery } from 'gatsby';
import useGetData from '../hooks/getData';

const IndexPage = () => {
  const data = useGetData();

  const tables = data?.allContentfulTable?.nodes;
  tables.forEach((e) => console.log(e));

  return (
    <main style={{ fontFamily: '-apple-system, Roboto, sans-serif, serif' }}>
      <Box
        sx={{
          padding: '20px',
          width: '100%',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1>Customizable Tables</h1>
        <h2>Fully Responsive</h2>
        <p>Content being provided by Contentful CMS.</p>
        <p>
          <strong>Cell Types:</strong>
        </p>
        <ul>
          <li>Plain Text</li>
          <li>Rich Text</li>
          <li>Check Mark or X Mark</li>
          <li>Progress Bar</li>
          <li>"Out-of-five-stars" rating</li>
          <li>Custom Image</li>
        </ul>
      </Box>
      {tables.map(
        ({
          id,
          footnote,
          rows,
          columnHeaders,
          title,
          isComparison,
          isFootnoteLeftAligned,
          isAlternatingColumnsAreGray,
          isRegularTableFirstColumnSticky,
        }) => (
          <Table
            key={id}
            title={title}
            footnote={footnote}
            isFootnoteLeftAligned={isFootnoteLeftAligned}
            rows={rows}
            columnHeaders={columnHeaders}
            isComparison={isComparison}
            isAlternatingColumnsAreGray={isAlternatingColumnsAreGray}
            isRegularTableFirstColumnSticky={isRegularTableFirstColumnSticky}
          />
        )
      )}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return <title>Tables</title>;
};
