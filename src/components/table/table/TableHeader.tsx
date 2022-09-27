/** @jsx jsx */
import { jsx } from 'theme-ui';
import { RichText } from '@sprinklr/shared-lib';

const TableHeader = ({ cellValueType, url, comparisonTableCustomText, regularTableText, comparisonDropdownValueText }) => {
  switch (cellValueType) {
    case 'Regular Table Text':
      return (
        <th
          sx={{
            textAlign: 'left',
            p: {
              mb: 0,
              fontSize: ['14px', '16px'],
              lineHeight: ['1.4', '1.6'],
              fontWeight: 'inherit',
              color: 'white',
            },
          }}
        >
          <RichText richTextObject={regularTableText} />
        </th>
      );
    case 'Comparison Table Custom Text':
      return (
        <th sx={{ verticalAlign: 'middle' }}>
          <p>{comparisonTableCustomText}</p>
        </th>
      );
    case 'Customizable Asset':
      return (
        <th
          sx={{
            verticalAlign: 'middle',
          }}
        >
          <img src={url} alt={comparisonDropdownValueText} />
        </th>
      );
    case 'Blank':
      return <th></th>;
    default:
      return <th>defualt</th>;
  }
};

export default TableHeader;
