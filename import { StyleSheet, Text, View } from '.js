import { StyleSheet, Text, View } from 'react-native';

import HomePage from './src/pages/HomePage';

export default function App() {
  return (

    <View> 
 <HomePage></HomePage>
    

    <View style={styles.container}>
      
    </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1916',
    alignItems: 'center',
    justifyContent: 'center',
  },
 


  
});