import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import AuthContext from '../../AuthContext';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  logo: {
    width: 84,
    height: 100,
  },
  background: {
    backgroundColor: "#889e81",
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class SplashScreen extends React.Component {
  static contextType = AuthContext;

  async componentDidMount() {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      //this.props.navigation.navigate('HomeScreen');
    }
  }

  render() {
    return(
      <View style={styles.background}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
          />
        <ActivityIndicator />
      </View>
    );
  }
}

export default SplashScreen;