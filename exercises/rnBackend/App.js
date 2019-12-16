import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Axios from 'axios'



// const serverData = () => {
//   Axios.get('./server/index').then( res => console.log(res.data))
// }



export default function App() {
  const [serverInfo, setServerInfo] = useState([])

  useEffect( () => {
    console.log('lettit up')
    Axios.get('http://localhost:8000/items').then( res => {

        setServerInfo(res.data)
      
      console.log("server info:", serverInfo)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app</Text>
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
});
