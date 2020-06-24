import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CharacterCard from "../../components/CharacterCard";
export class Character extends Component {
    render() {
        return (
            <div className="character">
               <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper>
                            <h2>Choose Your Fighter</h2>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={10}>
                    <Grid item xs={2} />
                    <Grid item xs={4}>
                        <CharacterCard placement="left-start" name="Thief" description="It's a THIEF! He gets double focus!"/>
                    </Grid>
                    <Grid item xs={4}>
                        <CharacterCard placement="right-start" name="Mage" description="It's a MAGE! He gets double attack power!"/>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
                <Grid container spacing={10}>
                    <Grid item xs={2} />
                    <Grid item xs={4}>
                        <CharacterCard placement="left-start" name="Knight" description="It's a KNIGHT! He gets double defense power!"/>
                    </Grid>
                    <Grid item xs={4}>
                        <CharacterCard name="Giant" placement="right-start" description="It's a GIANT! He gets double health points!"/>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </div>
        )
    }
}

export default Character
