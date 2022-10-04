/** @jsx jsx */
import { jsx } from 'theme-ui';
import TableCell from './TableCell';

const TableRow = ({ row }) => {
  return (
    <tr>
      {row.tableCells.map((element, i: number) => (
        <TableCell data={element} key={`${element?.id} + ${i}`} />
      ))}
    </tr>
  );
};

export default TableRow;
