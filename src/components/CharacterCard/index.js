import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import placeholder from "./img/150.png";
import { withStyles } from '@material-ui/styles';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '100%', 
    },
  });

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "rgb(42, 46, 40)",
      color: '#fff',
      maxWidth: 220,
      fontSize: "12px",
      border: '1px solid #2eb375',
      textAlign: 'center'
    },
  }))(Tooltip);
export class CharacterCard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="characterCard">
                <HtmlTooltip
                        title={
                            <React.Fragment>
                                <Typography color="inherit">{this.props.name}</Typography>
                                <p>{this.props.description}</p>
                            </React.Fragment>
                        }
                        placement={this.props.placement}
                        interactive
                >
                    <Paper>
                        <Card>
                            <CardHeader title={this.props.name}/>
                            <CardMedia image={this.props.pic} className={classes.media}/>
                        </Card>
                    </Paper>
                </HtmlTooltip>
            </div>
        )
    }
}

export default withStyles(styles)(CharacterCard)
