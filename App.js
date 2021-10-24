import React from 'react';
import { StyleSheet, Text, View, Button,Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (
    
    <View style={styles.container}>
      {/* <Text style={{color:'white', backgroundColor:'#000',marginTop:-200,fontSize:40}}>HI-SPERHIT MOVIES</Text> */}
    
     {/* <Text  style={{color:'orange',alignContent:'center', margin:10,marginBottom:20, backgroundColor:'#000'}}>Welcome bhlaq, watch all the movies you have ever dreamed of watching!!!</Text> */}

     <Image style={styles.tinyLogo}
     source={require("./assets/images/bike2.jpg")}
     />

      <Text style={{color:'orange', fontSize:25}} >Welcome to</Text>
      <Text style={{color:'orange', fontSize:35, marginBottom:30, fontStyle:'italic',fontWeight:60}} >Power Bike Shop</Text>


      <Button 
  title ="Login with Gmail"
  color="black"
  justifyContent= 'center'
  padding= '50'
/>

{/* <Button
  title ="Login with Apple"
  color="green"
  justifyContent= 'center'
  
/> */}
  </View> 



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  tinyLogo:{
    width:250,
    height:250,
    margin:10
    
  }
  
});
 