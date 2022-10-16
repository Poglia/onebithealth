import React from "react";
import {View, Text, Share, TouchableOpacity} from 'react-native';
import styles from "./style";


export default function ResultIMC(props){

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.ResultIMC
        })
    }
    return(
        <View style={styles.resultImc}>
            <View style={styles.boxShareButton}>
            <Text style={styles.information}>{props.messageResultImc}</Text>   
            <Text style={styles.numberImc}>{props.resultImc}</Text>   
                <TouchableOpacity 
                style={styles.shared}
                onPress={onShare}>
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>  
            </View>
           
        </View>
    )
}