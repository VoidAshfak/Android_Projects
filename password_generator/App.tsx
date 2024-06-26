import {
    SafeAreaView,
    Text,
    StyleSheet
} from 'react-native'

import * as Yup from 'yup'
import React, { useState } from 'react'

const genretePasswordString = (passwordLength: string) => {

}

const createPassword = (charecters: string, passwordLength: number) => {
    let result = ''
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

    }
}

const resetPassword = () => {

}

const PasswordSchema = Yup.object().shape({
    passwordLength:
        Yup.number()
            .min(4, 'Minimum length is 4')
            .max(16, 'Maximum length is 16')
            .required('Length is required')
})


export default function App() {
    const [password, setPassword] = useState('')
    const [isPassGenerated, setIsPassGenerated] = useState(false)

    const [lowerCase, setLowerCase] = useState(true)
    const [upperCase, setupperCase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)


    return (
        <SafeAreaView>
            <Text>Password Generator</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    formContainer: {
        margin: 8,
        padding: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 2,
    },
    description: {
        color: '#758283',
        marginBottom: 8,
    },
    heading: {
        fontSize: 15,
    },
    inputWrapper: {
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    inputColumn: {
        flexDirection: 'column',
    },
    inputStyle: {
        padding: 8,
        width: '30%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
    },
    errorText: {
        fontSize: 12,
        color: '#ff0d10',
    },
    formActions: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    primaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#5DA3FA',
    },
    primaryBtnTxt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    secondaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#CAD5E2',
    },
    secondaryBtnTxt: {
        textAlign: 'center',
    },
    card: {
        padding: 12,
        borderRadius: 6,
        marginHorizontal: 12,
    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    generatedPassword: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 12,
        color: '#000'
    },
});