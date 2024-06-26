import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { AppFonts, Colors, ScaleSize } from '../Helper';

const data = [
    {
        title: 'Welcome to MyApp',
        text: 'Discover amazing features and enhance your productivity.',
    },
    {
        title: 'Stay Organized',
        text: 'Keep track of your tasks and manage your time effectively.',
    },
    {
        title: 'Achieve Your Goals',
        text: 'Set goals and track your progress towards achieving them.',
    },
];

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        paddingHorizontal:ScaleSize.SPACING_50
    },
    text: {
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily:AppFonts.Regular
    },
    title: {
        fontSize: 22,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily:AppFonts.Regular
    },
});

const IntroScreen = ({ navigation }: { navigation: any }) => {

    const gotoLogin = () => { navigation.replace('login') }

    const renderItem = ({ item }: { item: any }) => (
        <View style={[styles.slide]}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <AppIntroSlider
                data={data}
                renderItem={renderItem}
                showSkipButton={true}
                dotStyle={{ backgroundColor: Colors.secondary }}
                activeDotStyle={{ backgroundColor: Colors.ButtonBackground }}
                onDone={gotoLogin}
            />
        </View>
    );
};

export default IntroScreen;