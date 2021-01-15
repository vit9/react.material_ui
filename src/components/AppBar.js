import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import GTranslate from '@material-ui/icons/GTranslate';
import MoreIcon from '@material-ui/icons/MoreVert';
import { appBarStyles } from './styles';

import { languagesList, supportedLanguages } from '../languages';

const useStyles = appBarStyles();

export default function PrimarySearchAppBar(props) {
  const { setLanguage } = props;
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
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

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='primary-search-account-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        {languagesList.map(({ name, language }, key) => <MenuItem key={key} onClick={() => chooseLanguage(language)}>{name}</MenuItem>)}
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
      <MenuItem onClick={handleProfileMenuOpen}>
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
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
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
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <GTranslate />
            </IconButton>
            <Typography className={classes.language} variant="h6" noWrap>
                  {/* {languagesList.find((el) => el.routeName === (lang === '' ? lang : `/${lang}`)).name} */}
            </Typography>
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
      {renderMobileMenu}
      {renderMenu}
      {props.children}
    </div>
  );
}
