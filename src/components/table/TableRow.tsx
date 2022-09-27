/** @jsx jsx */
import { jsx } from 'theme-ui';
import TableCell from './TableCell';

const TableRow = ({ row }) => {
  return (
    <tr>
      {row.tableCells.map((element) => (
        <TableCell data={element} />
      ))}
    </tr>
  );
};

export default TableRow;
