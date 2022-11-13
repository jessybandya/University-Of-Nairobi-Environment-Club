import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { db } from '../../../components/firebase';
import Post from './Post';
import SearchBar from "material-ui-search-bar";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';



export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);

  const [users, setUsers] = React.useState([])
  React.useEffect(() => {
    db.collection('users').onSnapshot(snapshot => {
      setUsers(snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data(),
        })));
    })
  }, []);

  const [data, setData] = React.useState()
  React.useEffect(() => {
    db.collection('users').onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => doc.data()))
    })
})


   const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("University Of Nairobi Environmental Club Members List", 20, 10);
    const columns = [
      "First Name",
      "Last Name",
      "Phone",
      "Reg. No.",
      "Course",
      "Email",
    ];
    const rows = [];
    data.map((item) =>
      rows.push([
        item.firstName,
        item.lastName,
        item.phone,
        item.registrationNumber,
        item.course,
        item.email,
      ])
    );
    doc.autoTable(columns, rows);
    doc.save("University Of Nairobi Environmental Club Members List");
  }

  console.log("Users: ",users)

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <div>
    <SearchBar
  />
  <div align='right'>
  <PictureAsPdfIcon onClick={downloadPdf} style={{fontSize:20, marginTop:5,cursor:'pointer'}}/>
  </div>
    </div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell
            style={{minWidth: 70}}
            >
            First Name
            </TableCell>

            <TableCell
            align="right"
            style={{minWidth: 70}}
            >
            Last Name
            </TableCell>
            <TableCell
            align="right"
            style={{minWidth: 70}}
            >
            Phone No.
            </TableCell>
            <TableCell
            align="right"
            style={{minWidth: 70}}
            >
            Reg. No.
            </TableCell>
            <TableCell
            align="right"
            style={{minWidth: 70}}
            >
            Course
            </TableCell>

            <TableCell
            align="right"
            style={{minWidth: 70}}
            >
            Email
            </TableCell>
            <TableCell
            align="right"
            style={{minWidth: 70}}
            >
            Date Registered
            </TableCell>
            <TableCell
            align="right"
            style={{minWidth: 70}}
            >
            Action
            </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
          {
            users.map(({ id, post }) => (
              <Post 
              key={id} 
              userId={id}
              course={post?.course}
              email={post?.email} 
              timestamp={post?.timestamp} 
              firstName={post?.firstName} 
              lastName={post?.lastName} 
              phone={post?.phone} 
              registrationNumber={post?.registrationNumber}   
              />
              )
            )
          }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
