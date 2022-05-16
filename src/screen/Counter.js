import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count)

const handleIncrement = () => {
    dispatch(increment())
}

const handleDecrement = () => {
    dispatch(decreament())
}

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleIncrement()} style={{padding: 10,backgroundColor: 'blue'}}>
            <Text style={{fontSize: 25,}}> + </Text>
            </TouchableOpacity>
            <Text>
                {count.count}
            </Text>
            <TouchableOpacity onPress={() => handleDecrement()} style={{padding: 10,backgroundColor: 'blue'}}>
            <Text style={{fontSize: 25,}}> - </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

})