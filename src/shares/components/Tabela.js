import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'titulo', headerName: 'TITULO', width: 300 },
  { field: 'episodio', headerName: 'Seasion/EP', width: 130 },
  { field: 'genero', headerName: 'Genero', width: 130 },


  {
    field: 'data',
    headerName: 'DATA',
    type: 'date',
    width: 100,
  },


  {
    field: 'nota',
    headerName: 'Nota',
    type: 'number',
    width: 90,
  },

];

const rows = [

  { id: 1, titulo: 'Fate/Kaleid Liner Prisma Illya', genero: 'Mahō shōjo', nota: '10', data: '01/08/2022', episodio: 'S01E01' },

];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}

      />
    </div>
  );
}
