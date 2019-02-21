import React from "react";
import PropTypes from "prop-types";
import { withStyles, Theme, WithStyles, StyleRulesCallback } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

export interface Props extends WithStyles {}

const About: React.StatelessComponent<Props> = ({ classes }) => (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            This project what done by Henri Le Barrois d'Orgeval and Thibault
            Boursier.
          </Paper>
        </Grid>
      </Grid>
    </div>
  );

export default withStyles(styles as StyleRulesCallback)(About);
