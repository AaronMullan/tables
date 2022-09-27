export const getTableStyles = (isAlternatingColumnsAreGray, shouldEnableFirstColumnSticky, isComparison, columnHeaders) => {
  const theGreyness = isAlternatingColumnsAreGray
    ? {
        'tbody td:nth-child(odd)': {
          backgroundColor: '#F8F8FA',
        },
        'tbody td:nth-child(even)': {
          backgroundColor: 'inherit',
        },
      }
    : {
        'tbody tr:nth-child(even)': {
          backgroundColor: '#F8F8FA',
        },
        'tbody tr:nth-child(odd)': {
          backgroundColor: 'inherit',
        },
      };

  const theStickiness = shouldEnableFirstColumnSticky && { position: 'sticky', left: '0px' };

  let comparisonFirstColumnWidth = '50%';
  if (columnHeaders?.length > 4) comparisonFirstColumnWidth = '35%';
  if (columnHeaders?.length > 6) comparisonFirstColumnWidth = '25%';

  return {
    mt: 0,
    p: { fontSize: [0, 2] },
    // width: isComparison ? 'fit-content' : 'auto',
    width: isComparison ? ['100%', 'fit-content'] : 'auto',
    borderCollapse: 'collapse',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    background: 'white',
    borderRadius: '10px',
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
    table: {
      borderSpacing: 0,
      tableLayout: isComparison ? 'fixed' : 'auto',
      lineHeight: 1.3,
      borderRadius: '10px',
      width: isComparison ? ['100%', '100%', 'revert-layer'] : null,
    },

    th: {
      background: 'spaceGrey',
      color: 'white',
      textAlign: 'center',
      px: ['5px', '20px'],
      py: '12px',
      borderLeft: '1px solid #4C565F',
      minWidth: '75px',
      img: {
        verticalAlign: 'middle',
        width: ['33px', '75px', '100px'],
        minWidth: ['33px', '75px', '100px'],
        height: 'auto',
      },
    },
    td: {
      background: 'inherit',
      borderLeft: '1px solid #E7E7ED',
      px: ['5px', '20px'],
      py: '20px',
      maxWidth: '50%',
      minWidth: '75px',
      textAlign: isComparison ? 'center' : 'left',
      p: { margin: 0 },
    },
    ...theGreyness,
    'th:first-child': {
      textAlign: 'left',
      borderLeft: 'none',
      borderRight: shouldEnableFirstColumnSticky ? '1px solid #E7E7ED' : 'none',
      ...theStickiness,
      width: isComparison ? ['50%', comparisonFirstColumnWidth] : 'auto',
    },
    'td:first-child': {
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      textAlign: 'left',
      borderLeft: 'none',
      borderRight: shouldEnableFirstColumnSticky ? '1px solid #E7E7ED' : 'none',
      ...theStickiness,
    },
    'th:nth-of-type(3)': {
      borderRadius: isComparison ? ['0 10px 0 0', 'revert-layer'] : null,
    },
    'td:nth-of-type(3)': {
      borderRadius: isComparison ? ['0 0 10px 0', 'revert-layer'] : null,
    },
    tbody: { backgroundColor: 'white' },
  };
};

export const getFootnoteStyles = isFootnoteLeftAligned => {
  return {
    width: '100%',
    textAlign: isFootnoteLeftAligned ? 'left' : 'center',
    mt: '50px',
    p: {
      fontSize: ['14px', '16px'],
      color: 'hsla(240, 6%, 42%, 1)',
      a: { color: 'hsla(240, 6%, 42%, 1)' },
    },
    maxWidth: '800px',
  };
};
