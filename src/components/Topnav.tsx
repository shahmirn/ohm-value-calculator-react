// sources: https://material-ui.com/demos/app-bar/

import * as React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

interface IProps {
    title: string;
}

export class Topnav extends React.Component<IProps> {
    public render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        {this.props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}
