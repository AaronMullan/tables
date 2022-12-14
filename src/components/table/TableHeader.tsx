/** @jsx jsx */
import { ContentfulRichTextGatsbyReference } from 'gatsby-source-contentful/rich-text';
import { jsx } from 'theme-ui';
import RichText from '../RichText/RichText';

type TableHeaderTypes = {
  cellValueType: string;
  plainText: string;
  richText: ContentfulRichTextGatsbyReference;
  comparisonDropdownValueText: string;
  asset: any;
};

const TableHeader: React.FC<TableHeaderTypes> = ({
  cellValueType,
  plainText,
  richText,
  comparisonDropdownValueText,
  asset,
}) => {
  switch (cellValueType) {
    case 'Rich Text':
      return (
        <th
          sx={{
            background: 'black',
            textAlign: 'left',
            p: {
              marginBottom: 0,
              fontSize: ['14px', '16px'],
              lineHeight: ['1.4', '1.6'],
              fontWeight: 'inherit',
              color: 'white',
            },
          }}
        >
          <RichText richTextObject={richText} />
        </th>
      );
    case 'Plain Text':
      return (
        <th style={{ verticalAlign: 'middle', background: 'black' }}>
          <p>{plainText}</p>
        </th>
      );
    case 'Asset':
      return (
        <th
          style={{
            verticalAlign: 'middle',
            background: 'black',
          }}
        >
          <img src={asset?.url} alt={comparisonDropdownValueText} />
        </th>
      );
    case 'Blank':
      return <th style={{ background: 'black' }}></th>;
    default:
      return <th style={{ background: 'black' }}>defualts</th>;
  }
};

export default TableHeader;
