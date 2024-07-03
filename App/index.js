// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View, Image } from 'react-native';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const AlphabetCard = ({ letter }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.letter}>{letter}</Text>
            <Image
                source={{ uri: `https://picsum.photos/100/100?random=${letter}` }}
                style={styles.image}
            />
        </View>
    );
};

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Learn the Alphabet</Text>
            <FlatList
                contentContainerStyle={styles.list}
                data={alphabet}
                renderItem={({ item }) => <AlphabetCard letter={item} />}
                keyExtractor={(item) => item}
                numColumns={3}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    list: {
        alignItems: 'center',
    },
    card: {
        width: 100,
        height: 150,
        backgroundColor: '#87CEFA', // Light blue
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    letter: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
});