import { useStaticQuery, graphql } from "gatsby"

export default function useGetData () {
  const data = useStaticQuery(
    graphql`
    query {
        allContentfulTable {
          nodes {
            id
            title
            isComparison
            footnote {
              raw
            }
            isFootnoteLeftAligned
            isAlternatingColumnsAreGray
            isFootnoteLeftAligned
            isRegularTableFirstColumnSticky
            columnHeaders {
              cellValueType
              id
              plainText
              richText {
                raw
              }
              comparisonValueDropdownText
              asset {
                url
              }
            }
            rows {
              id
              tableCells {
                id
                cellValueType
                progressBarDenominator
                progressBarNumerator
                progressBarColor
                progressBarAsStars
                richText {
                  raw
                }
                plainText
                url
              }
            }
          }
        }
      }
    `);
  return data
}