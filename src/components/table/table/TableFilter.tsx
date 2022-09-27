/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import Dropdown from '@sprinklr/shared-lib/components/Dropdown';

type TableFilterTypes = {
  options: any;
  value: string;
  setValue: any;
};

const TableFilter: React.FC<TableFilterTypes> = ({ options, value, setValue }) => {
  const filterOptions = options.slice(2).map(el => ({ value: el, label: el }));

  return (
    <Flex
      sx={{
        display: filterOptions?.length > 1 ? ['flex', null, 'none'] : 'none',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Dropdown
        labelSx={{
          flexDirection: ['column', 'row'],
          textAlign: 'left',
          color: 'spaceGrey',
          margin: '5px auto',
          width: ['100%', 'auto'],
          span: { padding: '12px 15px 12px 0px' },
        }}
        dropdownSx={{ minWidth: '315px' }}
        value={value}
        setValue={setValue}
        customDropdownLabel={'Compare'}
        options={filterOptions}
      />
    </Flex>
  );
};

export default TableFilter;
