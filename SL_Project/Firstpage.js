import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AppRegistry } from 'react-native';
import { useEffect } from 'react';
import LoginSceen from './Login';

export default function Firstpage({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(LoginSceen); 
          }, 5000); // เปิดหน้าค้างไว้ 5 วินาที
          return () => clearTimeout(timer);
        }, [navigation]);
    
    return (
    <View style={styles.container}>
      <Text>Welcome to Sign Languags Appication</Text>
      <Image source={require('./image/6268080.png')} style={styles.image}
      />
    </View>
  );
}

AppRegistry.registerComponent(LoginSceen, () => Firstpage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99FFCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image :{
    marginBottom: 30
  }
});