import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
      <StatusBar style="auto" />
      <View style={styles.logo}>

        <Image source={(require('./assets/logo.png'))} style={{resizeMode:'contain', width:100, height:100}}/>
        <Text style={{color:'#0b0a0c', fontSize:34,fontWeight:'600'}}>marketspace</Text>
        <Text style={{color:'#a8a6aa', fontSize:12,fontWeight:'600'}}>Seu  espaço  de  compra  e  venda</Text>

        </View>
        
        <View style={styles.inputsHolder}>
        <Text style={{fontSize:14, color:'gray', fontWeight:'600'}}>Acesse sua conta</Text>
          <TextInput placeholder='  E-mail' style={styles.inputs} placeholderTextColor='#cccace'></TextInput>
          <TextInput placeholder='  Senha' style={styles.inputs} placeholderTextColor='#cccace'></TextInput>
          <TouchableOpacity style={styles.touch2}>Entrar</TouchableOpacity>
          </View>
          <View style={styles.Cadastro}>
          <Text style={{fontSize:14, color:'#a8a6aa', fontWeight:600}}>
            Ainda não tem acesso?
          </Text>
          <TouchableOpacity style={styles.botaoCadastro}>Criar uma conta</TouchableOpacity>

          </View>
        </View>
       
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edecee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs:{
    width:250,
    height:50,
    backgroundColor:'#f7f7f8',
    borderRadius: 5,
    marginTop:10,
    fontSize:16,
    fontWeight:500
  },
  inputsHolder:{
      display:'flex',
      flexDirection:'column',
      textAlign:'center',

  },
  Button:{
    display:'flex',
    flexDirection:'row',
    textAlign:'center',


  },
  touch2:{
    width:250,
    height:40,
    marginTop:15,
    display:'flex',
    textAlign:'center',
    backgroundColor:'#647ac6',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
    borderRadius:5,
    fontFamily:'Arial',
    fontWeight:'600',
  },
  logo:{
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    alignItems:'center',
    marginBottom: 70,

  },
  Cadastro:{
    marginTop:50,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height:200,
    backgroundColor:'#f7f7f8',
    width:'100%',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
  },
  botaoCadastro:{
    width:250,
    height:40,
    marginTop:15,
    display:'flex',
    textAlign:'center',
    backgroundColor:'#d9d8da',
    alignItems:'center',
    justifyContent:'center',
    color:'#534a57',
    borderRadius:5,
    fontFamily:'Arial',
    fontWeight:'600',
    fontSize:13,
  },


});
