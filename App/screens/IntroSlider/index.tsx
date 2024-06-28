import React from 'react';
import { View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Colors } from '../../helper';
import { styles } from './style';

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

const IntroScreen = ({ navigation }: { navigation: any }) => {

    const gotoLogin = () => { navigation.replace('login'); }

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );


    const renderButton = (text: string) => (
        <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <AppIntroSlider
                data={data}
                renderItem={renderItem}
                renderNextButton={() => renderButton("Next")}
                renderSkipButton={() => renderButton("Skip")}
                renderDoneButton={() => renderButton("Done")}
                showSkipButton={true}
                dotStyle={{ backgroundColor: Colors.secondary }}
                activeDotStyle={{ backgroundColor: Colors.ButtonBackground }}
                onDone={gotoLogin}
            />
        </View>
    );
};

export default IntroScreen;