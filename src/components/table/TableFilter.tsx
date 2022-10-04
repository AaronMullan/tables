/** @jsx jsx */
import { jsx, Flex, Select, Label } from 'theme-ui';

type TableFilterTypes = {
  options: any;
  value: string;
  setValue: any;
};

const TableFilter: React.FC<TableFilterTypes> = ({
  options,
  value,
  setValue,
}) => {
  // We only want the options after the second column to be available
  const filterOptions = options
    .slice(2)
    .map((el: any) => ({ value: el, label: el }));

  return (
    <Flex
      sx={{
        display: filterOptions?.length > 1 ? ['flex', null, 'none'] : 'none',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Label
        sx={{
          flexDirection: ['column', 'row'],
          textAlign: 'left',
          color: 'spaceGrey',
          margin: '5px auto',
          width: ['100%', 'auto'],
          span: { padding: '12px 15px 12px 0px' },
        }}
      >
        <span sx={{ mb: 2 }}>Compare</span>
        <Select
          sx={{ minWidth: '315px' }}
          value={value}
          onChange={(el) => setValue(el.target.value)}
        >
          {filterOptions &&
            filterOptions.map((filterOption, i) => (
              <option
                value={filterOption?.value}
                key={`${filterOption?.value} + ${i}`}
              >
                {filterOption?.label}
              </option>
            ))}
        </Select>
      </Label>
    </Flex>
  );
};

export default TableFilter;
