import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/modules/components/common';
import LibraryList from './src/modules/techLibrary/components/LibraryList';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={styles.container}>
                    <Header headerText="Tech Stack" />
                    <LibraryList />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
});
