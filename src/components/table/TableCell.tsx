/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import RichText from '../RichText/RichText';
import ProgressBar from './ProgressBar';

type TableCellTypes = {
  data: {
    progressBarDenominator?: number;
    progressBarNumerator?: number;
    progressBarColor?: string;
    progressBarAsStars?: boolean;
    url?: string;
    cellValueType?: string;
    richText?: any;
    plainText?: string;
  };
};

const TableCell: React.FC<TableCellTypes> = (props) => {
  const {
    url,
    cellValueType,
    progressBarColor,
    progressBarDenominator,
    progressBarNumerator,
    progressBarAsStars,
    richText,
    plainText,
  } = props.data;

  switch (cellValueType) {
    case 'Rich Text':
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
          <RichText richTextObject={richText} />
        </td>
      );
    case 'Plain Text':
      return (
        <td sx={{ fontSize: ['14px', '16px'], px: '20px', py: '10px' }}>
          <p>{plainText}</p>
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
              margin: '0 auto'
            },
          }}
        >
          <div style={{display: 'grid'}}>
                <svg width="18" height="18" viewBox="0 0 18 18" aria-labelledby="blueCheckTitle" role="img">
  <title id="blueCheckTitle">Checkmark</title>
  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM13.7721 6.80336L8.10446 12.4704C7.92868 12.6462 7.69891 12.7341 7.46788 12.7341C7.24564 12.7341 7.02466 12.6525 6.85139 12.4893L4.24857 10.0384C3.88571 9.69747 3.86939 9.12807 4.20965 8.76583C4.54991 8.40485 5.11995 8.38728 5.48155 8.72754L7.44905 10.5795L12.499 5.5302C12.8506 5.17864 13.4206 5.17864 13.7721 5.5302C14.1237 5.88177 14.1237 6.4518 13.7721 6.80336Z"
              fill="#00BAE9"
            />
          </svg>
          </div>
        </td>
      );
    case 'Gray X':
      return (
        <td
          sx={{
            textAlign: 'center',
            svg: {
              verticalAlign: 'middle',
              margin: '0 auto'
            },
          }}
        >
          <div style={{display: 'grid'}}>
           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="greyXTitle" role="img">
          <title id="greyXTitle">X</title>
            <path
              d="M9.00002 0.131149C7.24629 0.131404 5.53201 0.651661 4.07394 1.62614C2.61588 2.60062 1.4795 3.98556 0.80849 5.60584C0.137484 7.22613 -0.0380156 9.00899 0.304183 10.729C0.646381 12.449 1.49091 14.029 2.73098 15.269C3.97106 16.5091 5.55099 17.3536 7.27101 17.6958C8.99103 18.038 10.7739 17.8625 12.3942 17.1915C14.0145 16.5205 15.3994 15.3841 16.3739 13.9261C17.3484 12.468 17.8686 10.7537 17.8689 9.00001C17.8689 7.83539 17.6395 6.68218 17.1937 5.60624C16.748 4.53029 16.0947 3.55268 15.2712 2.72923C14.4476 1.90578 13.4699 1.25263 12.3939 0.80707C11.3179 0.361508 10.1646 0.132266 9.00002 0.132435V0.131149ZM12.2053 11.1163C12.284 11.1861 12.3476 11.2712 12.3922 11.3665C12.4368 11.4618 12.4615 11.5652 12.4646 11.6704C12.4678 11.7755 12.4494 11.8802 12.4106 11.978C12.3718 12.0758 12.3134 12.1646 12.239 12.239C12.1646 12.3134 12.0758 12.3718 11.978 12.4106C11.8802 12.4494 11.7755 12.4678 11.6704 12.4646C11.5652 12.4614 11.4618 12.4368 11.3665 12.3922C11.2713 12.3476 11.1861 12.284 11.1163 12.2053L9.00002 10.0903L6.88373 12.2053C6.73664 12.3357 6.5453 12.405 6.34881 12.3991C6.15231 12.3933 5.96548 12.3126 5.82647 12.1736C5.68747 12.0345 5.60677 11.8477 5.60087 11.6512C5.59497 11.4547 5.66431 11.2634 5.79473 11.1163L7.90973 9.00001L5.79473 6.88501C5.66168 6.73834 5.59013 6.54613 5.59488 6.34816C5.59964 6.15019 5.68035 5.96164 5.82029 5.82153C5.96023 5.68142 6.14869 5.6005 6.34665 5.59551C6.54461 5.59052 6.73691 5.66184 6.88373 5.79472L9.00002 7.90972L11.1163 5.79472C11.2631 5.66184 11.4554 5.59052 11.6534 5.59551C11.8513 5.6005 12.0398 5.68142 12.1797 5.82153C12.3197 5.96164 12.4004 6.15019 12.4051 6.34816C12.4099 6.54613 12.3384 6.73834 12.2053 6.88501L10.0903 9.00001L12.2053 11.1163Z"
              fill="#A0A0A8"
            />
          </svg>
          </div>
        </td>
      );
    case 'Blank':
      return <td>''</td>;
    default:
      return <td>default</td>;
  }
};

export default TableCell;
