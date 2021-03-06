import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper>
                            <h1>Battle Simulator</h1>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Footer
