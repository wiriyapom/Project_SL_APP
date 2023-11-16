import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, ImageBackground} from 'react-native';

// const LoginScreen = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

export default function Login() {
    return (
    <View style={styles.container}>
      <Text>Login ka</Text>
      <StatusBar style="auto" />
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