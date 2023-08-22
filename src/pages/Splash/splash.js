import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { SplashGif } from '../../assets'

export default function SplashScreen({navigation}) {

useEffect(() => {
setTimeout(() => {
navigation.replace('LoginScreen');
}, 4800)

},[])

  return (
    <View style={styles.container}>
    <View style={styles.contaier_main1}>
      <Image style={{left:-50, height:450, width:450}} source={SplashGif} />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

container: {
    flex:1,
    backgroundColor:'black',

},

contaier_main1: {
    padding:10,
    marginTop:50,

}



})