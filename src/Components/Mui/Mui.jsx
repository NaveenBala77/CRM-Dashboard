import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Pagination, Box, Button, Typography
} from '@mui/material';

const data = [
  { customerName: 'Jane Cooper', company: 'Microsoft', phoneNumber: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
  { customerName: 'Floyd Miles', company: 'Yahoo', phoneNumber: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
  { customerName: 'Ronald Richards', company: 'Adobe', phoneNumber: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
  { customerName: 'Marvin McKinney', company: 'Tesla', phoneNumber: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
  { customerName: 'Jerome Bell', company: 'Google', phoneNumber: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', status: 'Active' },
  { customerName: 'Kathryn Murphy', company: 'Microsoft', phoneNumber: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: 'Active' },
  { customerName: 'Jacob Jones', company: 'Yahoo', phoneNumber: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'Active' },
  { customerName: 'Kristin Watson', company: 'Facebook', phoneNumber: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', status: 'Inactive' },
  { customerName: 'Alice Johnson', company: 'Amazon', phoneNumber: '(123) 555-0190', email: 'alice@amazon.com', country: 'United States', status: 'Active' },
  { customerName: 'Bob Smith', company: 'Apple', phoneNumber: '(234) 555-0189', email: 'bob@apple.com', country: 'Canada', status: 'Inactive' },
  { customerName: 'Cynthia Lee', company: 'Netflix', phoneNumber: '(345) 555-0178', email: 'cynthia@netflix.com', country: 'United Kingdom', status: 'Active' },
  { customerName: 'David Brown', company: 'IBM', phoneNumber: '(456) 555-0167', email: 'david@ibm.com', country: 'Australia', status: 'Inactive' },
  { customerName: 'Emily Davis', company: 'Tesla', phoneNumber: '(567) 555-0156', email: 'emily@tesla.com', country: 'Germany', status: 'Active' },
  { customerName: 'Frank Wilson', company: 'Google', phoneNumber: '(678) 555-0145', email: 'frank@google.com', country: 'France', status: 'Inactive' },
  { customerName: 'Grace Kim', company: 'Samsung', phoneNumber: '(789) 555-0134', email: 'grace@samsung.com', country: 'South Korea', status: 'Active' },
  { customerName: 'Henry White', company: 'Intel', phoneNumber: '(890) 555-0123', email: 'henry@intel.com', country: 'Japan', status: 'Inactive' },
  { customerName: 'Isabella Martinez', company: 'Spotify', phoneNumber: '(901) 555-0112', email: 'isabella@spotify.com', country: 'Spain', status: 'Active' },
  { customerName: 'Jack Johnson', company: 'Adobe', phoneNumber: '(012) 555-0101', email: 'jack@adobe.com', country: 'Italy', status: 'Inactive' },
];

export default function CustomerTable() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedData = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const totalEntries = data.length;
  const startEntry = (page - 1) * rowsPerPage + 1;
  const endEntry = Math.min(page * rowsPerPage, totalEntries);

  return (
    <Box sx={{ paddingTop: 0, paddingBottom: 0, width: '100%' }}>
      <TableContainer component={Paper} sx={{ marginTop: 0 }}>
        <Table stickyHeader sx={{ tableLayout: 'fixed', minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ color: '#B5B7C0',  }}>Customer Name</TableCell>
              <TableCell align="left" sx={{ color: '#B5B7C0',  }}>Company</TableCell>
              <TableCell align="left" sx={{ color: '#B5B7C0',  }}>Phone Number</TableCell>
              <TableCell align="left" sx={{ color: '#B5B7C0', }}>Email</TableCell>
              <TableCell align="left" sx={{ color: '#B5B7C0', }}>Country</TableCell>
              <TableCell align="left" sx={{ color: '#B5B7C0',}}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontWeight: 'bold' }} >{row.customerName}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{row.company}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{row.phoneNumber}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{row.email}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{row.country}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    
                    sx={{ 
                      width: '80px', // Set a fixed width
                      height: '30px', // Set a fixed height
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor:row.status === 'Active' ? 'rgba(22, 192, 152, 0.5)' : 'rgba(255, 197, 197, 0.5)',
                      border:row.status === 'Active' ? '1px solid green' : '1px solid red',
                      color:row.status === 'Active' ? '#008767' : '#DF0404',
                      textTransform: 'none',
                    }}
                  >
                    {row.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2, marginLeft:2, }}>
      <Typography sx={{ fontSize: '14px', color: '#B5B7C0' }}>
          Showing data {startEntry} to {endEntry} of {totalEntries.toLocaleString()} entries
        </Typography>
      <Pagination
        count={Math.ceil(data.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        
        sx={{ display: 'flex', justifyContent: 'flex-end', }}
      />
      </Box>
    </Box>
  );
}
