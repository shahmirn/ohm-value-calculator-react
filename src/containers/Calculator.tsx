// based on: https://github.com/reduxjs/redux/blob/fa3b2e4b56aa522de99d8848a0c13ea6fa860541/examples/todos/src/containers/VisibleTodoList.js

import { connect } from 'react-redux';
import { calculate, setBandColor } from '../actions';
import { Calculator } from '../components/Calculator';
import { IBandColor } from '../models/IBandColor';
import { IState } from '../models/IState';

const mapStateToProps = (state: IState) => ({
    bandColors: state.bandColors,
    calculation: state.calculation
});

const mapDispatchToProps = (dispatch: any) => ({
    calculate: (bandColors: {[key: string]: IBandColor}) => {
        dispatch(calculate(bandColors));
    },
    setBandColor: (band: string, color: string) => {
        dispatch(setBandColor(band, color));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);
