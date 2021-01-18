import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import GTranslate from '@material-ui/icons/GTranslate';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useSelector } from 'react-redux';
import Drawer from './Drawer';
import Alert from './SnackBar';
import { appBarStyles } from './styles';
import { languagesList, supportedLanguages, languages } from '../languages';

const useStyles = appBarStyles();

export default function PrimarySearchAppBar(props) {
  const { setLanguage, isDrawer } = props;
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const language = useSelector(({ systemReducer }) => systemReducer.language);

  const [anchorEl, setAnchorEl] = useState({
    profileAnchor: false,
    languageAnchor: false,
  });
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const isMenuOpen = anchorEl;
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const chooseLanguage = (lang) => {
    let pathName = location.pathname;
    if (supportedLanguages.includes(location.pathname.substr(1, 2))) pathName = location.pathname.slice(3);
    if (location.pathname.substr(0, 3) === lang) return;
    if (!lang) {
      if (!supportedLanguages.includes(location.pathname.substr(1, 2))) return;
      pathName = location.pathname.substr(3);
    }
    history.push(`${lang}${pathName}`);
    setLanguage((config) => config.map((c) => {
      if (!lang || supportedLanguages.includes(location.pathname.substr(1, 2))) return ({ ...c, path: `${lang}${c.path.slice(3)}` });
      return ({ ...c, path: `${lang}${c.path}` });
    }));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuOpen = (event, name) => {
    setAnchorEl({ ...anchorEl, [name]: event.currentTarget });
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (name) => {
    setAnchorEl({ ...anchorEl, [name]: false });
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl.languageAnchor}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='primary-search-account-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen.languageAnchor}
      onClose={() => handleMenuClose('languageAnchor')}
    >
        {languagesList.map(({ name, language }, key) => <MenuItem key={key} onClick={() => chooseLanguage(language)}>{name}</MenuItem>)}
    </Menu>
  );

  const renderProfileMenu = (
    <Menu
      anchorEl={anchorEl.profileAnchor}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='primary-search-account-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen.profileAnchor}
      onClose={() => handleMenuClose('profileAnchor')}
    >
        <MenuItem>
          <Link to={`${languages[language].link}/profile`}>{languages[language]['app-bar'].account}</Link>
        </MenuItem>
        <MenuItem>
           <Link to={`${languages[language].link}/orders`}>{languages[language]['app-bar'].myGoods}</Link>
        </MenuItem>
        <MenuItem>
           <Link to={`${languages[language].link}/wish-list`}>{languages[language]['app-bar'].wishList}</Link>
        </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={(event) => handleMenuOpen(event, 'languageAnchor')}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <GTranslate />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={clsx(classes.root, { [classes.grow]: true })}>
      <Alert/>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
       {isDrawer && <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>}
          <Typography className={classes.title} variant="h6" noWrap>
            React.Material-UI by vit9
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls='primary-search-account-menu'
              aria-haspopup="true"
              onClick={(event) => handleMenuOpen(event, 'languageAnchor')}
              color="inherit"
            >
              <GTranslate />
            </IconButton>
            {isDrawer && <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={(event) => handleMenuOpen(event, 'profileAnchor')}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {isDrawer && <Drawer open={open} handleDrawerClose={handleDrawerClose}/>}
      {renderMobileMenu}
      {renderMenu}
      {renderProfileMenu}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
