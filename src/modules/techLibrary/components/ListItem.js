import React, {Component} from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager, Platform } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './../../components/common';
import * as actions from './../../../actions';

class ListItem extends Component {

    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        if (this.props.expanded) {
            return (
                <Text style={style.descriptionStyle}>{this.props.library.description}</Text>
            );
        }
    };

    render() {
        // console.log(this.props);
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.selectLibrary(this.props.library.id);
                }}
            >
                <View>
                    <CardSection>
                        <Text style={style.textStyle}>{this.props.library.title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const style = {
    textStyle: {
        fontSize: 18,
        padding: 10,
        color: '#de4ec5'
    },
    descriptionStyle: {
        fontSize: 16,
        padding: 15,
        color: '#633991',
        backgroundColor: '#f2f2f2',
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
