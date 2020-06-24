import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export class Main extends Component {
    render() {
        return (
            <div className="main">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper>
                            <h2>Welcome to Battle Simulator</h2>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper>
                            <p>Test your mettle against the fiercest champions in the realm. Do you have what it takes to be Battle Champion?</p>
                            <Link to="/character"><Button>TO BATTLE!</Button></Link>
                        </Paper>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

export default Main
