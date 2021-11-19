import Button from "@mui/material/Button";
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
  const [action, setAction] = React.useState(' ');
  const handleCancle = (id) => {
    setAction("Canclled");
  }

  const handleApproval = id => {
    const actionId = userOrder.map(actionid => (actionid._id));
    const newArray = [...actionId];
    console.log("comes from found", newArray);
    const singleId=newArray.find(elementId=>elementId===id)
    if (singleId) {
      return setAction("Approval");
    }
    setAction(' ');
   
  }
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
            <TableCell align="right">Product Status</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Admin Action</TableCell>

            {/* <TableCell align="right">ProductStatus</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {userOrder.map((order) => (
            <TableRow key={order.name}>
              <TableCell component="th" scope="row">
                {order.brandName}
              </TableCell>
              <TableCell align="right">
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={order.imageURL}
                  alt="photo"
                />
              </TableCell>
              <TableCell align="right">{order.price}</TableCell>
              <TableCell align="right">{action}</TableCell>
              <TableCell align="right">{order._id}</TableCell>
              {/* <TableCell align="right"></TableCell>  */}
              <TableCell align="right">
                <Button onClick={() => handleCancle(order._id)} variant="text">
                  Cancle
                </Button>
                <Button onClick={()=>handleApproval(order._id)} variant="text">
                  Approval
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


    
