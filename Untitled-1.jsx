
import * as types from "react-native/types"
import {View,  Text, Image, StyleSheet,FlatList,ViewStyle, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useState, useEffect } from "./useState";
;
const App = () => {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
        const newLocal = fetch('https://restcountries.com/#rest-countries');
      newLocal
        .then(response => response.json())
        .then(data => setCountries(data))
        .catch(error => console.error(error));
    }, []);
  
    const renderCountryItem = ({ item }) => {
      const { name, capital, region, population, flags } = item;
    }
    return(
        <View style={styles.container} > 
        <Text style={styles.Title}>Lista de Países</Text>
           <View style={styles.card}>
           <Image source={{uri:''}}></Image>
           <Text style={{fontSize:20,fontWeight:'600'}}>nome do pais</Text>
           <Text style={{fontSize:20,fontWeight:'400',opacity:0.6}}>nome do pais em portugues</Text>
           <Text>ppopulaçao</Text>
          </View>
          </View>
        
        );
     }
  
   
      
      {
        }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      listContainer: {
        paddingBottom: 20,
      },
      countryContainer: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
      },
      countryFlag: {
        width: 100,
        height: 60,
        resizeMode: 'cover',
        marginBottom: 10,
      },
      countryName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
    });
    
    export default App
  
