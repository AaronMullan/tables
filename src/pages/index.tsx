import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Box } from 'theme-ui';
import Table from '../components/table';
import { graphql, useStaticQuery } from 'gatsby';
import useGetData from '../hooks/getData';

const IndexPage = () => {
  const data = useGetData();

  const tables = data?.allContentfulTable?.nodes;

  return (
    <main style={{ fontFamily: '-apple-system, Roboto, sans-serif, serif' }}>
      <Box
        sx={{
          padding: '20px',
          width: '100%',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          color: 'white',
          background: 'black',
          borderRadius: '10px',
        }}
      >
        <h1>Customizable Tables</h1>
        <h2>Fully Responsive</h2>

        <p>
          <strong>Content being provided by Contentful CMS.</strong>
        </p>
        <p>
          <strong>Features:</strong>
        </p>
        <ul>
          <li>Table Title</li>
          <li>Can alternate columns or rows as gray</li>
          <li>Footnote (can be left aligned)</li>
          <li>
            Responsive Options:
            <ul>
              <li>"Regular" table can have first column sticky</li>
              <li>
                "Comparison" table switches to dropdown-controlled 3 column view
                at tablet and mobile sizes
              </li>
            </ul>
          </li>
        </ul>
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
