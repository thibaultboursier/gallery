import React, { useCallback, useState } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { inherits } from "util";

const styles = createStyles({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

export interface Props extends WithStyles<typeof styles> {}

const Nav: React.StatelessComponent<Props> = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback(
    ({ currentTarget }) => setAnchorEl(currentTarget),
    []
  );

  const handleClose = useCallback(() => setAnchorEl(null), []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="Menu"
            className={classes.menuButton}
            color="inherit"
            onClick={handleClick}
          >
            <Menu
              anchorEl={anchorEl}
              id="simple-menu"
              onClose={handleClose}
              open={Boolean(anchorEl)}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/about" className={classes.link}>About</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/paintings" className={classes.link}>Paintings</Link>
              </MenuItem>
            </Menu>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Gallery
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Nav);
