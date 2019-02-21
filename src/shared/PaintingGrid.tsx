import React from "react";
import {
  withStyles,
  WithStyles,
  Theme,
  StyleRulesCallback
} from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    height: "auto",
    width: "1200px"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

export interface Painting {
  author: string;
  img: string;
  title: string;
}

export interface Props extends WithStyles {
  paintings: Painting[];
}

const PaintingGrid: React.StatelessComponent<Props> = ({
  classes,
  paintings
}) => (
  <div className={classes.root}>
    <GridList cellHeight={180} className={classes.gridList} cols={3}>
      <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
        <ListSubheader component="div">December</ListSubheader>
      </GridListTile>

      {paintings.map(({ author, img, title }) => (
        <GridListTile key={title}>
          <img src={img} alt={title} />
          <GridListTileBar
            title={title}
            subtitle={<span>by: {author}</span>}
            actionIcon={
              <IconButton className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  </div>
);

export default withStyles(styles as StyleRulesCallback)(PaintingGrid);
