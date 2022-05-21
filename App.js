import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
import {WebView} from 'react-native-webview';

export default function App() {
  const names = ['ryan','ren', 'david'];
  return (

    <WebView style={{}} source={{uri:'https://codecontinue.com'}}/>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="dark" />
    //   {names.map((nam)=>(
    //     <Welcome nam={nam}/>
    //   ))}
      
    // </View>
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
