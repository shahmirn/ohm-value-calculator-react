// sources:
// https://material-ui.com/layout/grid/
// https://material-ui.com/demos/cards/
// https://material-ui.com/demos/buttons/
// https://material-ui.com/guides/typescript/

// tslint:disable:jsx-no-lambda

import * as React from "react";

import {
    Button,
    Card,
    CardActions,
    CardContent,
    createStyles,
    Grid,
    Typography,
    WithStyles,
    withStyles
} from "@material-ui/core";
import { IBandColor } from "../models/IBandColor";
import { BandColorPicker } from "./BandColorPicker";

const styles = createStyles({
    card: {
        margin: '16px'
    },
    result: {
        marginTop: 24,
    }
});

interface IProps extends WithStyles<typeof styles> {
    bandColors: {[key: string]: IBandColor};
    calculation: {[key: string]: any};
    setBandColor: (band: string, color: string) => any;
    calculate: (bandColors: {[key: string]: IBandColor}) => any;
}

export const Calculator = withStyles(styles)(
    class extends React.Component<IProps> {

        public handleChange = (band: string) => (event: React.FormEvent<HTMLSelectElement>) => {
            const target = event.target as HTMLSelectElement;
            this.props.setBandColor(band, target.value);
        };

        public calculate() {
            this.props.calculate(this.props.bandColors);
        };

        public render() {
            const {
                bandColors,
                classes,
                calculation
            } = this.props

            return (
                <div>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography gutterBottom={true} variant="headline" component="h2">
                                Calculator
                            </Typography>
                            <Grid container={true} spacing={8}>
                                <Grid item={true} xs={12} sm={3}>
                                    <BandColorPicker
                                        onChange={() => this.handleChange('A')}
                                        colors={['', 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white']}
                                        label="1st Digit"
                                        value={bandColors.A && bandColors.A.color}
                                    />
                                </Grid>
                                <Grid item={true} xs={12} sm={3}>
                                    <BandColorPicker
                                        onChange={() => this.handleChange('B')}
                                        colors={['', 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white']}
                                        label="2nd Digit"
                                        value={bandColors.B && bandColors.B.color}
                                    />
                                </Grid>
                                <Grid item={true} xs={12} sm={3}>
                                    <BandColorPicker
                                        onChange={() => this.handleChange('C')}
                                        colors={['', 'pink', 'silver', 'gold', 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white']}
                                        label="Multiplier"
                                        value={bandColors.C && bandColors.C.color}
                                    />
                                </Grid>
                                <Grid item={true} xs={12} sm={3}>
                                    <BandColorPicker
                                        onChange={() => this.handleChange('D')}
                                        colors={['', 'silver', 'gold', 'brown', 'red', 'yellow', 'green', 'blue', 'violet', 'gray']}
                                        label="Tolerance"
                                        value={bandColors.D && bandColors.D.color}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container={true} spacing={8} className={classes.result}>
                                <Grid item={true} xs={12}>
                                    Resistance: {calculation.resistance} {calculation.resistance !== undefined ? 'ohms' : ''}
                                </Grid>
                                <Grid item={true} xs={12}>
                                    Minimum: {calculation.minimum} {calculation.minimum !== undefined ? 'ohms' : ''}
                                </Grid>
                                <Grid item={true} xs={12}>
                                    Maximum: {calculation.maximum} {calculation.maximum !== undefined ? 'ohms' : ''}
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary" onClick={() => this.calculate()}>
                                Calculate
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }
);
