import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { color } from 'react-native-reanimated'
import { counterDecrement, counterIncrement } from '../redux/action/counter.action'



const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter)

    const handleIncrement = () => {
        dispatch(counterIncrement())
    }

    const handleDecrement = () => {
        dispatch(counterDecrement())
    }

    console.log(count.count1);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleIncrement()} style={styles.box}>
                <Text style={{ fontSize: 25, color: 'white' }}> + </Text>
            </TouchableOpacity>
            <Text style={styles.CountText}>
                {count.count1}
            </Text>
            <TouchableOpacity onPress={() => handleDecrement()} style={styles.box2}>
                <Text style={{ fontSize: 25, color: 'white' }}> - </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '20%',
        height: '10%',
        backgroundColor: 'blue'
    },
    box2: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '20%',
        height: '10%',
        backgroundColor: 'red'
    },
    CountText: {
        fontSize: 30,
        padding: 20,
        fontWeight: 'bold',
    },
})

// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Counter() {
//   return (
//     <View>
//       <Text>Counter</Text>
//     </View>
//   )
// }