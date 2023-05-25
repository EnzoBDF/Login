import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
      <StatusBar style="auto" />
      <View style={styles.logo}>
        <Image source={(require('./assets/logo.png'))} style={{width:70, height: 70, resizeMode:'contain'}}/>
        <Text style={{color:'#0b0a0c', fontSize:19,fontWeight:'700'}}>Boas Vindas!</Text>
        <Text style={{color:'#a8a6aa', fontSize:12,fontWeight:'600'}}>Crie sua conta e use o espaço para comprar {'\n'}itens variados e vender seus produtos</Text>

        </View>
        
        <View style={styles.inputsHolder}>
          <Image source={(require('./assets/logocadastro.png'))} style={{width:100, height:100, resizeMode:'contain'}}/>
          <TextInput placeholder='  Nome' style={styles.inputs} placeholderTextColor='#cccace'></TextInput>
          <TextInput placeholder='  E-mail' style={styles.inputs} placeholderTextColor='#cccace'></TextInput>
          <TextInput placeholder='  Telefone' style={styles.inputs} placeholderTextColor='#cccace'></TextInput>
          <TextInput placeholder='  Senha' style={styles.inputs} placeholderTextColor='#cccace'></TextInput>
          <TextInput placeholder='  Confirmar Senha' style={styles.inputs} placeholderTextColor='#cccace'></TextInput>
          <TouchableOpacity style={styles.touch2}>Entrar</TouchableOpacity>
          </View>
          <View style={styles.Cadastro}>
          <Text style={{fontSize:14, color:'#a8a6aa', fontWeight:600}}>
            Já tem uma conta?
          </Text>
          <TouchableOpacity style={styles.botaoCadastro}>Ir para o login</TouchableOpacity>

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
    marginTop:15,
    fontSize:16,
    fontWeight:500
  },
  inputsHolder:{
      display:'flex',
      flexDirection:'column',
      textAlign:'center',
      alignItems:'center',

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
    backgroundColor:'#1a181b',
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
    marginBottom: 20,

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
