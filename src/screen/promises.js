import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect} from 'react'

const promises = () => {
    const one = () => {
        return "One value"
    }
    const two = () => {
        return 
        setTimeout(() => {
        return "Two value"
        }, 2000);
    }
    const three = () => {
        return "Three value"
    }
    const all = async () => {
        let oneval = one()
        console.log(oneval);

        let twoval = await two()
        console.log(twoval);

        let threeval = three()
        console.log(threeval);
    }

    useEffect(() => {
    all()
    },[])
    
  return (
    <View>
      <Text>promises</Text>
    </View>
  )
}

export default promises

const styles = StyleSheet.create({})