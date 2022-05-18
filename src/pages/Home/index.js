import { StyleSheet, Text, View, FlatList } from 'react-native'

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '139,00',
        date: '12/08/2022',
        type: 0 //ref retirada
    },
    {
        id: 2,
        label: 'Pix recebido Jessica F G',
        value: '1.439,00',
        date: '02/09/2022',
        type: 1 //ref receita
    },
    {
        id: 3,
        label: 'Compras online',
        value: '1.109,00',
        date: '22/08/2022',
        type: 0 //ref retirada
    },
    {
        id: 4,
        label: 'Boleto conta luz',
        value: '139,00',
        date: '17/08/2022',
        type: 0 //ref retirada
    },
    {
        id: 5,
        label: 'Vivo Cel',
        value: '130,00',
        date: '10/08/2022',
        type: 0 //ref retirada
    },
    {
        id: 6,
        label: 'Dep salario',
        value: '8.135,00',
        date: '01/09/2022',
        type: 1 //ref receita
    }
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name='MyFinance' />
            <Balance saldo='15.000,00' gastos='390,00' />
            <Text style={styles.title}>Últimas movimentações:</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item}/>}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    }
});
