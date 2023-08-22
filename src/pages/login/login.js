import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { LoginGif } from '../../assets'
import colors from '../../utils/colors/colors'

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
    <ScrollView>
        <View style={styles.container_header}>
            <Text style={styles.welcome_text}>HI, WELCOME EVERYONE!</Text>
        </View>

        <View style={styles.container_1}>
            <Image style={{height:200, width:'100%', marginTop:50,}} source={LoginGif} />
                <View style={styles.container_sub_1}>
                    <Text style={{color:'white', 
                    fontFamily:'Poppins-SemiBold', 
                    fontSize:15, 
                    textAlign:'center'}}>Hi, Register</Text>
                            <Text style={{
            color:'white',
            fontFamily:'Poppins-Regular',
            fontSize:15,
            textAlign:'center',
            
        }}>Silahkan Untuk Login,{'\n'}
        Agar Terhubung Dengan Orang Lain</Text>
                </View>
        </View>



        <View style={{
            padding:10,
            top:-50}}>
            <Text style={{
                color:'white',
                fontFamily:'Poppins-Regular',
                padding:10,
                
            }}>Email</Text>
            <TextInput style={{
                backgroundColor:'#dedede', 
                height:40, 
                borderRadius:5, 
                borderWidth:2, 
                borderColor:'white',
                color:'black',
                fontFamily:'Poppins-SemiBold', 
                fontSize:12,
                paddingRight:10, 
                paddingLeft:10}} placeholder='Masukan Email' placeholderTextColor='gray' />

                        <Text style={{
                color:'white',
                fontFamily:'Poppins-Regular',
                padding:10,
                marginTop:10,
                
            }}>Password</Text>
            <TextInput style={{
                backgroundColor:'#dedede',
                height:40,
                borderRadius:5,
                borderWidth:2,
                borderColor:'white',
                color:'black',
                fontFamily:'Poppins-SemiBold',
                fontSize:12,
                paddingRight:10,
                paddingLeft:10,
                }} placeholder='Masukan Password' placeholderTextColor='gray' secureTextEntry={true}/>

                <TouchableOpacity style={{
                padding:10,
                backgroundColor:colors.success,
                marginTop:15,
                borderRadius:5,
                borderWidth:1,
                borderColor:'white'
                }}>
                    <Text style={{
                        color:'white',
                        textAlign:'center',
                        fontFamily:'Poppins-SemiBold',
                        fontSize:12
                    }}>Masuk Sekarang</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                    <Text style={{
                        color:'white',
                        fontFamily:'Poppins-Regular',
                        fontSize:10,
                        textAlign:'right',
                        marginTop:10,
                    }}>Belum punya akun?Daftar</Text>
                </TouchableOpacity>

        </View>
    </ScrollView>

        <Text style={{
            top:-10,
            color:'white',
            textAlign:'center',
            fontFamily:'Poppins-Regular',
            fontSize:10,
        }}>Application By : @fdhlan21</Text>

    </View>
  )
}

const styles = StyleSheet.create({

container: {
    flex:1,
    backgroundColor:'black',
},

container_header: {
    backgroundColor:colors.warnaketiga,
    padding:10,
    alignItems:'center',
    borderBottomWidth:2,
    borderColor:'white',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    
},

welcome_text: {
    color: 'white',
    fontWeight:'bold',
    
},

container_1:{
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    top:-50,
  
},

container_sub_1: {
    padding:10,
    top:-0,
}



})