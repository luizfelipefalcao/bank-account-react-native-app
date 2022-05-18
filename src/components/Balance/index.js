import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default function Balance({ saldo, gastos}) {
    return (
        <View style={styles.container}>
            <View style={styles.balance}>
                <Text style={styles.balanceTitle}>Saldo: </Text>
                <View style={styles.balanceContent}>
                    <Text style={styles.balanceCurrency}>R$</Text>
                    <Text style={styles.balanceValue}>{saldo}</Text>
                </View>
            </View>
            <View style={styles.balance}>
                <Text style={styles.balanceTitle}>Gastos: </Text>
                <View style={styles.balanceContent}>
                    <Text style={styles.balanceCurrency}>R$</Text>
                    <Text style={styles.gastosValue}>{gastos}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -25,
        paddingStart: 18,
        paddingEnd: 18,
        marginLeft: 14,
        marginRight: 14,
        paddingTop: 22,
        paddingBottom: 22,
        borderRadius: 4,
        zIndex: 99
    },
    balanceTitle: {
        fontSize: 17,
        color: '#DADADA'
    }, 
    balanceCurrency: {
        marginRight: 7,
        color: '#DADADA'
    },
    balanceContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    balanceValue: {
        fontSize: 20,
        color: '#2ecc71'
    },
    gastosValue: {
        fontSize: 20,
        color: '#e74c3c'
    }
});