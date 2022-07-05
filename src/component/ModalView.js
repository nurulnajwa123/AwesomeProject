import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import styles from '../styles/styles';

const ModalView = ({ children, onSubmit, cancelable, visible = false, onDismiss, submitText = "Ok" }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onDismiss={onDismiss}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                        {children}
                    </View>
                    <View style={{ alignSelf: 'flex-end', alignItems: 'center',flexDirection: 'row', }}>
                        {cancelable && (
                        <TouchableOpacity
                            style={{ ...styles.button, backgroundColor: 'white' }}
                            onPress={onDismiss}>
                            <Text style={[styles.textStyle, { color: '#f44' }]}>Cancel</Text>
                        </TouchableOpacity>)}
                        
                        {onSubmit && (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onSubmit}>
                            <Text style={styles.textStyle}>{submitText}</Text>
                        </TouchableOpacity>)}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalView;