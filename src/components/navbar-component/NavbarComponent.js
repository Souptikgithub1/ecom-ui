import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Badge, Icon, IconButton, InputBase, Link, Menu, MenuItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {AccountCircle, AccountCircleOutlined} from "@mui/icons-material";
import MoreIcon from "@mui/icons-material/MoreVert";
import {alpha, styled} from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";

import './NavbarComponent.css'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    /*backgroundColor: alpha(theme.palette.common.white, 0.15),*/
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: '20px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        backgroundColor: 'transparent',

        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: {
            backgroundColor: trigger ? '#fff' : 'transparent',
            color: '#111'
        }
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
}


const NavbarComponent = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle  />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

  return (
      <React.Fragment>
          <CssBaseline />
          <ElevationScroll {...props}>
              <AppBar style={{ color: '#111'}}>
                  <Toolbar style={{paddingLeft: '5rem', paddingRight: '5rem'}}>
                      <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="open drawer"
                          sx={{ mr: 2 }}
                      >
                          <img src="/ecom-logo1.png" alt="none" style={{width: '6.4rem', height: '3rem'}}/>
                      </IconButton>
                      <Box sx={{display: "flex", alignItems: "center"}}>
                          {["Electronics", "Tvs & Appliances", "Men's Wear", "Women's Wear"]
                              .map(x => <Link underline='none' className='nav-bar-link dropdown'
                                              sx={{color: '#111',
                                                  padding: '2rem 0.6rem',
                                                  fontSize: '14px !important',
                                                  fontWeight: '600 !important',
                                                  textTransform: 'uppercase',
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  '&:hover': {
                                                    cursor: 'pointer'
                                                  },
                                                  '&:first-child': {
                                                    marginLeft: 0
                                                  }
                                              }}>
                                  <span className='dropbtn'>{x} <Icon sx={{fontSize: '1rem', marginLeft: '2px'}}>keyboard_arrow_down</Icon></span>
                                  <div className="dropdown-content">
                                        <Icon className='dropdown-arrow-up'>arrow_drop_up</Icon>
                                      <div></div>
                                  </div>
                              </Link>)
                          }
                      </Box>
                      <Box sx={{ flexGrow: 2 }} />
                      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                          <Search >
                          <SearchIconWrapper>
                              <SearchIcon />
                          </SearchIconWrapper>
                          <StyledInputBase
                              placeholder="Search…"
                              inputProps={{ 'aria-label': 'search' }}
                          />
                            </Search>
                      </Box>
                      <Box sx={{ flexGrow: 1 }} />
                      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                          <IconButton
                              size="large"
                              edge="end"
                              aria-label="account of current user"
                              aria-controls={menuId}
                              aria-haspopup="true"
                              onClick={handleProfileMenuOpen}
                              color="inherit"
                          >
                              <AccountCircleOutlined />
                          </IconButton>
                      </Box>
                      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                          <IconButton
                              size="large"
                              aria-label="show more"
                              aria-controls={mobileMenuId}
                              aria-haspopup="true"
                              onClick={handleMobileMenuOpen}
                              color="inherit"
                          >
                              <MoreIcon />
                          </IconButton>
                      </Box>
                  </Toolbar>
              </AppBar>
          </ElevationScroll>
          {renderMobileMenu}
          {renderMenu}
      </React.Fragment>
  )
}

export default NavbarComponent