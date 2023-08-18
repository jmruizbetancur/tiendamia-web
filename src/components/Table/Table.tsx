'use client'
import { useState } from 'react';
import { Table as TableMUI, TableCell, TableContainer, TableHead, TableRow, TableBody, TablePagination } from '@mui/material';
import TableRowCell from './TableRowCell/TableRowCell';

type ColumnDefinition = {
  field: string, 
  headerName: string,
  imgUrl?: boolean,
}

type Props = {
  columns: ColumnDefinition[],
  rows: any[],
  pageSize: number,
  className?: string
}

const Table = ({ columns, rows, pageSize, className }: Props) => {
  const [ page, setPage ] = useState(0);
  const [ rowsPerPage, setRowsPerPage ] = useState(pageSize);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <div className={`${className ?? ''} table`}>
      <TableContainer>
        <TableMUI stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column, idx) => <TableCell key={idx} className='table__header'>{column.headerName}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {!rows?.length ?
              <TableRow>
                <TableCell>{'No Data Found'}</TableCell>
              </TableRow> :
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => 
                  <TableRow hover key={idx}>
                    {columns.map((column, idx2) => <TableRowCell 
                      key={idx2} 
                      columnField= {column.field} 
                      value={row[column.field]} 
                      imgUrl={column.imgUrl && row.url} 
                    />)}
                  </TableRow>
                )
            }
          </TableBody>
        </TableMUI>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20, 25]}
        component="div"
        count={rows?.length ?? 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default Table;
