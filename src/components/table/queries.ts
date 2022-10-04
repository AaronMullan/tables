import { graphql } from 'gatsby';

// const TableTemplateQuery = graphql`
// {
//   allContentfulTable {
//     nodes {
//       id
//       title
//     }
//   }
// }
// `

// const TableTemplateQuery = graphql`
//   fragment ContentfulTemplateTableNode on Node {
//     id
//     ... on ContentfulTemplateTable {
//       title
//       isAlternatingColumnsAreGray
//       isComparison
//       isFootnoteLeftAligned
//       isRegularTableFirstColumnSticky
//       nodeLocale: node_locale
//       footnote {
//         raw
//       }
//       columnHeaders {
//         cellValueType
//         comparisonTableCustomText
//         comparisonDropdownValueText
//         name
//         regularTableText {
//           raw
//         }
//         customizableAsset {
//           id
//           title
//           url
//         }
//       }
//       rows {
//         tableCells {
//           cellValueType
//           name
//           comparisonTableCustomText
//           progressBarColor
//           progressBarDenominator
//           progressBarNumerator
//           progressBarAsStars
//           regularTableText {
//             raw
//           }
//         }
//       }
//     }
//   }
// `;

// export { TableTemplateQuery };
