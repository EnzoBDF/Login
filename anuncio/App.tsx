import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={(require('./assets/avatar.png'))} style={{width:40, height:40, resizeMode:'contain', left:30, position:'absolute',}}/>
        <Image source={(require('../Cadastro/assets/logo.png'))} style={{width:40, height:40, resizeMode:'contain'}}/>
        <Text style={styles.textHeader}>marketspace</Text>
      </View>
      <View style={styles.anuncio}>
        <Image source={(require('./assets/produtoSofa.png'))} style={styles.anuncioImagem}/>
        <Text style={styles.nomeProduto}>Nome do Produto</Text>
        <Text style={styles.descricaoProduto}>Descriçao do produto</Text>
        <View style={{display:'flex', flexDirection:'row'}}>
        <Text style={styles.precoProduto}>Preço R$</Text><TouchableOpacity style={styles.button}>Conferir</TouchableOpacity>
        </View>
      </View>
      <View style={styles.anuncio}>
        <Image source={(require('./assets/produtoSofa.png'))} style={styles.anuncioImagem}/>
        <Text style={styles.nomeProduto}>Nome do Produto</Text>
        <Text style={styles.descricaoProduto}>Descriçao do produto</Text>
        <View style={{display:'flex', flexDirection:'row'}}>
        <Text style={styles.precoProduto}>Preço R$</Text><TouchableOpacity style={styles.button}>Conferir</TouchableOpacity>
        </View>
      </View>
      <View style={styles.anuncio}>
        <Image source={(require('./assets/produtoSofa.png'))} style={styles.anuncioImagem}/>
        <Text style={styles.nomeProduto}>Nome do Produto</Text>
        <Text style={styles.descricaoProduto}>Descriçao do produto</Text>
        <View style={{display:'flex', flexDirection:'row'}}>
        <Text style={styles.precoProduto}>Preço R$</Text><TouchableOpacity style={styles.button}>Conferir</TouchableOpacity>
        </View>
      </View>
      <View style={styles.anuncio}>
        <Image source={(require('./assets/produtoSofa.png'))} style={styles.anuncioImagem}/>
        <Text style={styles.nomeProduto}>Nome do Produto</Text>
        <Text style={styles.descricaoProduto}>Descriçao do produto</Text>
        <View style={{display:'flex', flexDirection:'row'}}>
        <Text style={styles.precoProduto}>Preço R$</Text><TouchableOpacity style={styles.button}>Conferir</TouchableOpacity>
        </View>
      </View>
      <View style={styles.anuncio}>
        <Image source={(require('./assets/produtoSofa.png'))} style={styles.anuncioImagem}/>
        <Text style={styles.nomeProduto}>Nome do Produto</Text>
        <Text style={styles.descricaoProduto}>Descriçao do produto</Text>
        <View style={{display:'flex', flexDirection:'row'}}>
        <Text style={styles.precoProduto}>Preço R$</Text><TouchableOpacity style={styles.button}>Conferir</TouchableOpacity>
        </View>
      </View>
      <View style={styles.anuncio}>
        <Image source={(require('./assets/produtoSofa.png'))} style={styles.anuncioImagem}/>
        <Text style={styles.nomeProduto}>Nome do Produto</Text>
        <Text style={styles.descricaoProduto}>Descriçao do produto</Text>
        <View style={{display:'flex', flexDirection:'row'}}>
        <Text style={styles.precoProduto}>Preço R$</Text><TouchableOpacity style={styles.button}>Conferir</TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}><TouchableOpacity style={styles.button2}>Perto de Você</TouchableOpacity><TouchableOpacity style={styles.button2}>Anunciar</TouchableOpacity></View>
      <StatusBar style="auto" />
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
  
  header:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    top:0,
    position:'fixed',
    height:60,
    width:'100%',
    backgroundColor:'#a39fa4',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    zIndex:2,
  },
  footer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    bottom:0,
    position:"fixed",
    height:50,
    width:'100%',
    backgroundColor:'#a39fa4',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    zIndex:2,
  },
  textHeader:{
      fontSize:16,
      fontWeight:'700',
      fontFamily:'monospace',
  },
  anuncio:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#d9d8da',
    width:290,
    borderRadius:20,
    justifyContent:'center',
    textAlign:'left',
    marginTop:25,
  
    
  },
  anuncioImagem:{
    width:'90%',
    height:200,
    resizeMode:'contain',
    margin:'auto',
    borderRadius:20,
  },
  nomeProduto:{
    fontSize:20,
    fontWeight:'700',
    marginLeft:10,
  },
  descricaoProduto:{
    fontSize:14,
    color:'#a5a2a6',
    fontWeight:'700',
    marginLeft:10,
    marginBottom:15,
  },
  precoProduto:{
    fontSize:18,
    color:'black',
    fontWeight:'800',
    marginLeft:10,
    marginBottom:15,
  },
  button:{
    backgroundColor:'#1a181b',
    width:150,
    height:30,
    color:'#e3e3e5',
    display:'flex',
    textAlign:'center',
    justifyContent:'center',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:6,
    fontSize:18,
    fontFamily:'Arial',
    fontWeight:'700',
    position:'absolute',
    right:0
  },
  button2:{
    backgroundColor:'#1a181b',
    width:150,
    height:30,
    color:'#e3e3e5',
    display:'flex',
    textAlign:'center',
    justifyContent:'center',
    fontSize:14,
    fontFamily:'Arial',
    fontWeight:'700',
    borderRadius:5,
    marginLeft:10,
  }
});
