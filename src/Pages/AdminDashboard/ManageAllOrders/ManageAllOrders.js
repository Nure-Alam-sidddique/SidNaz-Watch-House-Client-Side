import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from 'axios';
import * as React from "react";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

export default function AcccessibleTable() {
  const [userOrder, setUserOrder] = React.useState([]);
  const orderLoading = async () => {
    try {
      await axios("http://localhost:5000/orders").then(res => setUserOrder(res.data));
    }
    catch (error) {
      console.log(error.message);
    }
   
  }
  React.useEffect(() => {
    orderLoading();

  }, [])
    console.log( "Mange Order come form",userOrder);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>ProductName</TableCell>
            <TableCell align="right">ProductImage</TableCell>
            <TableCell align="right">Price </TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">UserEmail</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">ProductStatus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userOrder.map((order) => (
            <TableRow key={order.name}>
              <TableCell component="th" scope="row">{ order.brandName}</TableCell>
              <TableCell align="right"><img style={{width: "30px", height: "30px"}} src={ order.imageURL} alt="photo"/></TableCell>
              <TableCell align="right">{ order.price}</TableCell>
              <TableCell align="right">{order.displayName}</TableCell>
              <TableCell align="right">{ order.email}</TableCell>
              <TableCell align="right">{ order.gender}</TableCell>
              <TableCell align="right">Active</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


    
