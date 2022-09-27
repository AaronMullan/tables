/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx, Box } from 'theme-ui';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableFilter from './TableFilter';
import { getTableStyles, getFootnoteStyles } from './styles';
import RichText from '../RichText/RichText';
import { useBreakpointIndex } from '@theme-ui/match-media';

const Table = (props) => {
  const {
    isAlternatingColumnsAreGray,
    isComparison,
    isFootnoteLeftAligned,
    isRegularTableFirstColumnSticky,
    footnote,
    columnHeaders,
    rows,
  } = props;

  const dropDownOptions =
    columnHeaders && columnHeaders.map((el) => el?.comparisonDropdownValueText);
  const [comparisonValue, setComparisonValue] = useState(dropDownOptions?.[2]);
  const [comparisonIndex, setComparisonIndex] = useState(2);
  const bpIndex = useBreakpointIndex();
  const enableFilter = isComparison && bpIndex < 2 && columnHeaders.length > 3;

  useEffect(() => {
    setComparisonIndex(
      dropDownOptions && dropDownOptions.indexOf(comparisonValue)
    );
  }, [comparisonValue]);

  let filteredHeaders, filteredRows;

  if (enableFilter)
    filteredHeaders = [
      columnHeaders[0],
      columnHeaders[1],
      columnHeaders[comparisonIndex],
    ];
  const displayHeaders = enableFilter ? filteredHeaders : columnHeaders;
  if (enableFilter)
    filteredRows = rows.map((el) => ({
      tableCells: [
        el?.tableCells[0],
        el?.tableCells[1],
        el?.tableCells[comparisonIndex],
      ],
    }));
  const displayRows = enableFilter ? filteredRows : rows;

  const shouldEnableFirstColumnSticky =
    !isComparison && isRegularTableFirstColumnSticky;
  const tableStyles = getTableStyles(
    isAlternatingColumnsAreGray,
    shouldEnableFirstColumnSticky,
    isComparison,
    columnHeaders
  );
  const footnoteStyles = getFootnoteStyles(isFootnoteLeftAligned);

  return (
    <Box sx={{ mt: 5 }}>
      {enableFilter && (
        <TableFilter
          options={dropDownOptions}
          value={comparisonValue}
          setValue={setComparisonValue}
        />
      )}
      <Box
        sx={{
          borderRadius: '10px',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          width: isComparison ? ['auto', 'auto', 'fit-content'] : 'auto',
        }}
      >
        <Box sx={tableStyles}>
          <Box sx={{ justifyContent: 'center', height: 'auto' }}>
            <Box sx={{ borderRadius: '10px', boxShadow: 0 }}>
              <table sx={{ boxShadow: 0 }}>
                {displayHeaders?.map((element) => (
                  <TableHeader
                    cellValueType={element?.cellValueType}
                    url={element?.customizableAsset?.url}
                    comparisonTableCustomText={
                      element?.comparisonTableCustomText
                    }
                    regularTableText={element?.regularTableText}
                    comparisonDropdownValueText={
                      element?.comparisonDropdownValueText
                    }
                  />
                ))}
                <tbody>
                  {displayRows?.map((element) => (
                    <TableRow row={element} />
                  ))}
                </tbody>
              </table>
            </Box>
          </Box>
        </Box>
      </Box>
      {footnote && (
        <Box sx={footnoteStyles}>
          <RichText richTextObject={footnote} />
        </Box>
      )}
    </Box>
  );
};

export default Table;
