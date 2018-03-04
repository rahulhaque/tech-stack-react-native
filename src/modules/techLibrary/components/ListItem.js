import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from './../../components/common'

class ListItem extends Component {
    render() {
        return (
            <CardSection>
                <Text style={style.textStyle}>{this.props.library.title}</Text>
            </CardSection>
        );
    }
}

const style = {
    textStyle: {
        fontSize: 18,
        padding: 10,
        color: '#de4ec5'
    }
};

export default ListItem;