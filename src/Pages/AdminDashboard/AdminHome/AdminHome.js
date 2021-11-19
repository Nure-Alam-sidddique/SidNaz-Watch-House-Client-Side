import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@mui/icons-material/Add";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProducts from '../AddProducts/AddProducts';
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from '../ManageProducts/ManageProducts';
import UpdateProduct from "../UpdateProduct/UpdateProduct";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function AdminHome(props) {
  const { user,logOut, admin, isLoading } = useAuth();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const logOutFromDashboard = () => {
    logOut(history);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      {user?.photoURL ? (
        <img
          style={{ margin: " auto 50px", borderRadius: "50%" }}
          src={`${user.photoURL}`}
          alt="userPhoto"
        />
      ) : (
        <h4 style={{textAlign:"center"}}> {user.displayName}</h4>
      )}
      {/* <Divider /> */}
      <List>
        <ListItem button>
          <Link style={{ textDecoration: "none" }} to="/home">
            <ListItemIcon>
              <HomeIcon color="action" style={{ marginRight: "25px" }} />
              <ListItemText
                style={{ fontSize: "20px", fontWeight: 100 }}
                primary="Home"
              />
            </ListItemIcon>
          </Link>
        </ListItem>
        <ListItem button>
          <Link style={{ textDecoration: "none" }} to={`${url}`}>
            <ListItemIcon>
              <DashboardIcon color="action" style={{ marginRight: "25px" }} />
              <ListItemText
                style={{ fontSize: "20px", fontWeight: 100 }}
                primary="Dashboard"
              />
            </ListItemIcon>
          </Link>
        </ListItem>
        {admin && (
          <Box>
            <ListItem button>
              <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
                <ListItemIcon>
                  <AddModeratorIcon
                    color="action"
                    style={{ marginRight: "25px" }}
                  />
                  <ListItemText
                    style={{ fontSize: "20px", fontWeight: 100 }}
                    primary="Make Admin"
                  />
                </ListItemIcon>
              </Link>
            </ListItem>
            <ListItem button>
              <Link
                style={{ textDecoration: "none" }}
                to={`${url}/manageProduct`}
              >
                <ListItemIcon>
                  <MonitorWeightIcon
                    color="action"
                    style={{ marginRight: "25px" }}
                  />
                  <ListItemText
                    style={{ fontSize: "20px", fontWeight: "20px" }}
                    primary="Manage Prouduct"
                  />
                </ListItemIcon>
              </Link>
            </ListItem>
            <ListItem button>
              <Link style={{ textDecoration: "none" }} to={`${url}/addProduct`}>
                <ListItemIcon>
                  <AddIcon color="action" style={{ marginRight: "25px" }} />
                  <ListItemText
                    style={{ fontSize: "20px", fontWeight: "20px" }}
                    primary="Add Product"
                  />
                </ListItemIcon>
              </Link>
            </ListItem>
            <ListItem button>
              <Link
                style={{ textDecoration: "none" }}
                to={`${url}/manageOrder`}
              >
                <ListItemIcon>
                  <LibraryAddIcon
                    color="action"
                    style={{ marginRight: "25px" }}
                  />
                  <ListItemText
                    style={{ fontSize: "20px", fontWeight: "20px" }}
                    primary="Manage Order"
                  />
                </ListItemIcon>
              </Link>
            </ListItem>
          </Box>
        )}
        <ListItem button onClick={logOutFromDashboard}>
          <Link style={{ textDecoration: "none" }} to={`${url}/logout`}>
            <ListItemIcon>
              <LogoutIcon color="action" style={{ marginRight: "25px" }} />
              <ListItemText
                style={{ fontSize: "20px", fontWeight: "20px" }}
                primary="Logout"
              />
            </ListItemIcon>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          {user?.displayName}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path={path}>
           <DashboardHome></DashboardHome>
          </Route>
          <Route  path={`${path}/update/:updatedId`}>
           <UpdateProduct></UpdateProduct>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
           <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrder`}>
           <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
           <AddProducts></AddProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProduct`}>
           <ManageProducts></ManageProducts>
          </AdminRoute>
        </Switch>
        {/* <DashboardHome></DashboardHome> */}
      </main>
    </div>
  );
}

AdminHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminHome;
