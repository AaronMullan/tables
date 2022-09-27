/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { RichText } from '@sprinklr/shared-lib';
import ProgressBar from './ProgressBar';
import BlueCheck from '../assets/svgs/blueCheck.svg';
import GreyX from '../shared-lib/assets/svgs/greyX.svg';

type TableCellTypes = {
  data: {
    progressBarDenominator?: number;
    progressBarNumerator?: number;
    progressBarColor?: string;
    progressBarAsStars?: boolean;
    url?: string;
    cellValueType?: string;
    regularTableText?: any;
    comparisonTableCustomText?: string;
  };
};

const TableCell: React.FC<TableCellTypes> = props => {
  const {
    url,
    cellValueType,
    progressBarColor,
    progressBarDenominator,
    progressBarNumerator,
    progressBarAsStars,
    regularTableText,
    comparisonTableCustomText,
  } = props.data;

  switch (cellValueType) {
    case 'Regular Table Text':
      return (
        <td
          sx={{
            p: {
              m: 0,
              fontSize: ['14px', '16px'],
              lineHeight: ['1.4', '1.6'],
              fontWeight: 'inherit',
            },
            px: '20px',
            py: '10px',
            backgroundColor: 'inherit',
          }}
        >
          <RichText richTextObject={regularTableText} />
        </td>
      );
    case 'Comparison Table Custom Text':
      return (
        <td sx={{ fontSize: ['14px', '16px'], px: '20px', py: '10px' }}>
          <p>{comparisonTableCustomText}</p>
        </td>
      );
    case 'Customizable Asset':
      return (
        <td>
          <img src={url} sx={{ verticalAlign: 'middle' }} />
        </td>
      );
    case 'Progress Bar':
      return (
        <td sx={{ verticalAlign: 'middle' }}>
          <ProgressBar
            progressBarNumerator={progressBarNumerator}
            progressBarColor={progressBarColor}
            progressBarDenominator={progressBarDenominator}
            progressBarAsStars={progressBarAsStars}
          />
        </td>
      );
    case 'Blue Check':
      return (
        <td
          sx={{
            textAlign: 'center',
            svg: {
              verticalAlign: 'middle',
            },
          }}
        >
          <BlueCheck />
        </td>
      );
    case 'Gray X':
      return (
        <td
          sx={{
            textAlign: 'center',
            svg: {
              verticalAlign: 'middle',
            },
          }}
        >
          <GreyX />
        </td>
      );
    case 'Blank':
      return <td>''</td>;
    default:
      return <td>default</td>;
  }
};

export default TableCell;
