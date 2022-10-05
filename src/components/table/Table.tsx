/** @jsx jsx */
import { useState, useEffect, Key } from 'react';
import { jsx, Box } from 'theme-ui';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableFilter from './TableFilter';
import { getTableStyles, getFootnoteStyles } from './styles';
import RichText from '../RichText/RichText';
import { useBreakpointIndex } from '@theme-ui/match-media';

type TableTypes = {
  title: string;
  isAlternatingColumnsAreGray: boolean;
  isComparison: boolean;
  isFootnoteLeftAligned: boolean;
  isRegularTableFirstColumnSticky: boolean;
  footnote: string;
  columnHeaders: any;
  rows: any;
};

const Table: React.FC<TableTypes> = (props) => {
  const {
    title,
    isAlternatingColumnsAreGray,
    isComparison,
    isFootnoteLeftAligned,
    isRegularTableFirstColumnSticky,
    footnote,
    columnHeaders,
    rows,
  } = props;

  const dropDownOptions =
    columnHeaders &&
    columnHeaders.map(
      (columnHeader: { comparisonValueDropdownText: string }) =>
        columnHeader?.comparisonValueDropdownText
    );

  //only show filter dropdown at tablet and below sizes, set state of selected column to compare
  const [comparisonValue, setComparisonValue] = useState(dropDownOptions?.[2]);
  const [comparisonIndex, setComparisonIndex] = useState(2);
  const bpIndex = useBreakpointIndex();
  const enableFilter = isComparison && bpIndex < 2 && columnHeaders?.length > 3;

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
    filteredRows = rows.map((row: { tableCells: any[] }) => ({
      tableCells: [
        row?.tableCells[0],
        row?.tableCells[1],
        row?.tableCells[comparisonIndex],
      ],
    }));
  const displayRows = enableFilter ? filteredRows : rows;

  const shouldEnableFirstColumnSticky =
    !isComparison && isRegularTableFirstColumnSticky;

  //get conditional styles
  const tableStyles = getTableStyles(
    isAlternatingColumnsAreGray,
    shouldEnableFirstColumnSticky,
    isComparison,
    columnHeaders
  );
  const footnoteStyles = getFootnoteStyles(isFootnoteLeftAligned);

  return (
    <Box
      sx={{
        mt: 5,
        width: !isComparison ? ['auto', null, 'fit-content'] : 'auto',
      }}
    >
      <h3>{title}</h3>
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
                <thead>
                  <tr>
                    {displayHeaders?.map(
                      (element: {
                        id: Key | null | undefined;
                        cellValueType: any;
                        customizableAsset: { url: any };
                        plainText: any;
                        richText: any;
                        comparisonDropdownValueText: any;
                        asset: any;
                      }) => (
                        <TableHeader
                          key={element?.id}
                          cellValueType={element?.cellValueType}
                          plainText={element?.plainText}
                          richText={element?.richText}
                          comparisonDropdownValueText={
                            element?.comparisonDropdownValueText
                          }
                          asset={element.asset}
                        />
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {displayRows?.map((element: any, i: number) => (
                    <TableRow row={element} key={`${element?.id} + ${i}`} />
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
