import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const InputField = ({value, onChangeText, placeholder}) => {
    return (
        <TextInput 
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    )
};

const styles = StyleSheet.create({
    input: {
        height: 45,
        borderColor: '#ccc',
        boderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        paddingHorizontal: 15,
        width: '100%'
    }
});

export default InputField;