/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image, requireNativeComponent
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
   
      <SafeAreaView style={styles.parent}>
       <View style={{alignItems:"center",paddingHorizontal:10}}>
         <Text style={{fontSize:48,fontWeight:"bold",fontFamily:"fantasy"}}>Welcome</Text>
         <Text style={{fontSize:16,color:"#4A4A4A",textAlign:"center",marginVertical:20,fontFamily:"Times"}}>Amet minim mollit non deserunt non deserunt ullamco est sit aliqua dolor do amet sint</Text>
       </View>
       <View style={{paddingHorizontal:20}}>
           <View>
             <Text style={{fontSize:14,paddingVertical:10}}>Identifier</Text>
             <TextInput 
             placeholder="Enter Identifier"
             placeholderTextColor="#BBC3CF"
             style={{
               borderWidth:1,
               borderColor:"#BBC3CF",
               borderRadius:10,
               paddingHorizontal:20
             }}
             />
           </View>
           <View>
             <Text style={{fontSize:14,paddingVertical:10}}>Primary Location</Text>
             
             <View  style={{
               borderWidth:1,
               borderColor:"#BBC3CF",
               borderRadius:10,
               paddingHorizontal:20,
               flexDirection:"row",
               justifyContent:"space-between",
               alignItems:"center"
             }}>
             <TextInput 
             placeholder="Enter Location"
             placeholderTextColor="#BBC3CF"
            
             />
             <Image
              resizeMethod="resize"
              resizeMode="contain"
              source={require("./one.png")}
             />
               </View>
           </View>
       </View>
     
      <TouchableOpacity 
    
      style={{paddingVertical:10, backgroundColor:"#5a55ca",borderRadius:15,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:20,marginHorizontal:20}}>
        <Text style={{color:"white",fontSize:16}}>Continue</Text>
        <Image
        resizeMethod="resize"
        resizeMode="contain"
         source={require("./two.png")}
        />
      </TouchableOpacity>
      </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
 parent:{
   backgroundColor:"#F5F6FA",
   flex:1,
  
   justifyContent:"space-evenly"
 }
});

export default App;
