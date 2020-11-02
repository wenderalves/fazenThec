import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Platform,
  KeyboardAvoidingView
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
    color: '#707070',
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


export default class SingUpScreen extends React.Component {
  state = {
    nome: '',
    email: '',
    telefone: '',
    pass: ''
  };

  static contextType = AuthContext;

  render() {
    return (
        <KeyboardAvoidingView
          behavior={'height'}
          style={styles.container}
        >
          <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Nome"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({ nome: text })}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="E-mail"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({ email: text })}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Telefone"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({ telefone: text })}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Senha"
                placeholderTextColor="#003f5c"
                onChangeText={(text) => this.setState({ pass: text })}
              />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => {}}>
              <Text style={styles.loginText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={styles.acountText}>Já tenho Cadastro.</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
  }
}
