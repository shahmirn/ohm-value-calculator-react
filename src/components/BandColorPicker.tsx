// sources: https://material-ui.com/demos/selects/
import * as React from "react";

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const styles = ({ spacing }: Theme) => createStyles({
    formControl: {
        margin: spacing.unit,
        minWidth: 120,
        width: '100%'
    }
});

interface IProps extends WithStyles<typeof styles> {
    onChange: () => any;
    colors: string[];
    label: string;
    value: string;
}

export const BandColorPicker = withStyles(styles)(
    class extends React.Component<IProps> {
        public render() {
            const { classes, colors, onChange } = this.props;

            return (
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="bandColor">{this.props.label}</InputLabel>
                    <Select
                        native={true}
                        value={this.props.value}
                        onChange={onChange()}
                        inputProps={{
                            id: 'bandColor',
                            name: 'bandColor',
                        }}
                    >
                    {colors.map(color => {
                        const label = color && color[0].toUpperCase() + color.slice(1).toLowerCase();
                        return <option value={color} key={color}>{label}</option>;
                    })}
                    </Select>
                </FormControl>
            );
        }
    }
);
