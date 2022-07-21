import { View, Text, Button, SafeAreaView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useStripe } from '@stripe/stripe-react-native';

export default function CheckoutScreen(props,{navigation}) {
    navigation = props.n
    
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);
    const [clientSecretKey, setClientSecretKey] = useState('')

    const fetchPaymentSheetParams = async () => {
        const response = await fetch(`http://192.168.1.10:4242/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const { clientSecret } = await response.json();

        setClientSecretKey(clientSecret)

        return {
            clientSecret,
        };
    };

    const initializePaymentSheet = async () => {
        const {
            clientSecret,
        } = await fetchPaymentSheetParams();

        console.log(clientSecret);
        const { error } = await initPaymentSheet({
            paymentIntentClientSecret: clientSecret,
            allowsDelayedPaymentMethods: true,
            merchantDisplayName: 'Demo'
        });

        if (!error) {
            setLoading(true);
        }
    };

    const openPaymentSheet = async () => {
        const { error } = await presentPaymentSheet({
            client_secret: clientSecretKey
        });

        console.log(error);
        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'Your order is confirmed!');
            navigation.navigate('Welc')
        }
    };

    useEffect(() => {
        initializePaymentSheet();
    }, []);

    return (
        <SafeAreaView>
        <View style={{marginTop: 100}}>
            <Button
                variant="primary"
                disabled={!loading}
                title="Checkout"
                onPress={openPaymentSheet}
            />
        </View>
        </SafeAreaView>
    );
}