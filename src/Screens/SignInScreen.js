import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar
} from 'react-native';

import AuthContext from '../../AuthContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#889e81',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 84,
    height: 100,
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#bac7a7',
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
    backgroundColor: '#bac7a7',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#707070',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  acountText: {
    marginTop: 20,
    color: 'white',
  },
});


export default class SignInScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };

  static contextType = AuthContext;

  render() {
    return (
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../assets/logo.png')} />
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => this.setState({ email: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Senha..."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={() => this.context.signIn()}>
            <Text style={styles.loginText}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.acountText}>Criar uma conta...</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
