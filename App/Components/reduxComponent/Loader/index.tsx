import { View, Modal, ActivityIndicator } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from './style';
import { Colors } from '../../../Helper/Colors';
import { ScaleSize } from '../../../Helper/ScaleSize';

const Loader = (props: any) => {
    const values = useSelector((state: any) => state.loader);

    return (
        <Modal visible={values} transparent={true}>
            <View style={styles.container}>
                <ActivityIndicator size={ScaleSize.SPACING_40} color={Colors.secondary} />
            </View>
        </Modal>
    );
};


export default Loader;
