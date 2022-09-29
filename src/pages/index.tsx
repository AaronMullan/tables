import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Box } from 'theme-ui';
import Table from '../components/table';
import { graphql, useStaticQuery } from 'gatsby';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const IndexPage = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTable {
        nodes {
          id
          title
          footnote {
            raw
          }
          isAlternatingColumnsAreGray
          isFootnoteLeftAligned
          rows {
            id
            tableCells {
              cellValueType
              progressBarDenominator
              progressBarNumerator
              progressBarColor
              progressBarAsStars
              regularTableText {
                raw
              }
              comparisonTableCustomText
            }
          }
        }
      }
    }
  `);
  const tables = data?.allContentfulTable?.nodes;
  tables.forEach((e) => console.log(e));

  return (
    <main style={pageStyles}>
      <Box>hello</Box>
      {tables.map(({ id, footnote, rows }) => (
        <Table key={id} footnote={footnote} rows={rows} />
      ))}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Tables</title>;
