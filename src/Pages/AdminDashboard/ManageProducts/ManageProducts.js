import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ManageProducts() {
    const classes = useStyles();
  const [allProducts, setAllProducts] = useState([]);
  const { isloading } = useAuth()

  const loadingProduct = async () => {
    try {
      await axios('https://quiet-springs-91793.herokuapp.com/products').then(res => setAllProducts(res.data));
  
    }
    catch (error) {
      console.log(error.message);
    }
  }

    useEffect(() => {
      loadingProduct();
    },[])
    console.log(allProducts);
  const handleDelete = id => {
    const procceed = window.confirm('Are you sure you want to delete Product?');
    if (procceed) {
       const url = `https://quiet-springs-91793.herokuapp.com/products/${id}`;
       axios.delete(url).then((res) => {
         if (res.data.deletedCount > 0) {
           alert("Deleted Product Successfully");
           const remaining = allProducts.filter(
             (product) => product._id !== id
           );
           setAllProducts(remaining);
         }
         // console.log(res.data);
       });
    }
   
    // console.log(id);
  }
  

  return (
    <TableContainer component={Paper}>
      <Typography variant="h3" component="div" gutterBottom>
        Manage Products
      </Typography>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ fontSize: "18px" }}>
              ProductKey
            </StyledTableCell>
            <StyledTableCell
              style={{ textAlign: "center", fontSize: "18px" }}
              align="right"
            >
              BrandName
            </StyledTableCell>
            <StyledTableCell
              style={{ textAlign: "center", fontSize: "18px" }}
              align="right"
            >
              ProductImage
            </StyledTableCell>
            <StyledTableCell
              style={{ textAlign: "center", fontSize: "18px" }}
              align="right"
            >
              Price
            </StyledTableCell>
            <StyledTableCell
              style={{ textAlign: "center", fontSize: "18px" }}
              align="right"
            >
              titel
            </StyledTableCell>
            <StyledTableCell
              style={{ textAlign: "center", fontSize: "18px" }}
              align="right"
            >
              Admin Action
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProducts.map((product) => (
            <StyledTableRow key={product.key}>
              <StyledTableCell component="th" scope="row">
                {product.key}
              </StyledTableCell>
              <StyledTableCell style={{ textAlign: "center" }} align="right">
                {product.brandName}
              </StyledTableCell>
              <StyledTableCell style={{ textAlign: "center" }} align="right">
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={product.imageURL}
                  alt="Photo"
                />
              </StyledTableCell>
              <StyledTableCell style={{ textAlign: "center" }} align="right">
                {product.price}
              </StyledTableCell>
              <StyledTableCell style={{ textAlign: "center" }} align="right">
                {product.title}
              </StyledTableCell>
              <StyledTableCell style={{ textAlign: "center" }} align="right">
                <Button
                  variant="contained"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </Button>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/admin/update/${product._id}`}
                >
                  <Button style={{ marginLeft: "5px" }} variant="contained">
                    Update
                  </Button>
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
