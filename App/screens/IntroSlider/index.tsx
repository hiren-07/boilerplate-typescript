import React from 'react';
import { View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Colors } from '../../helper';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';



const IntroScreen = () => {
    const { t } = useTranslation()

    const data = [
        {
            title: t("splash_title_one"),
            text: t("splash_text_one"),
        },
        {
            title: t("splash_title_two"),
            text: t("splash_text_two"),
        },
        {
            title: t("splash_title_three"),
            text: t("splash_text_three"),
        },
    ];


    const navigation = useNavigation()
    const gotoLogin = () => {
        navigation.replace('login');
    }

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
                renderNextButton={() => renderButton(t('str_next'))}
                renderSkipButton={() => renderButton(t('str_skip'))}
                renderDoneButton={() => renderButton(t('str_done'))}
                showSkipButton={true}
                dotStyle={{ backgroundColor: Colors.secondary }}
                activeDotStyle={{ backgroundColor: Colors.ButtonBackground }}
                onDone={gotoLogin}
            />
        </View>
    );
};

export default IntroScreen;