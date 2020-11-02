import React from 'react';
import AuthContext from '../../AuthContext';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DATA from './produtos';

const styles = StyleSheet.create({
  imgbg: {
    height: 240
  },
  contentHeader: {
    height: 70,
    paddingVertical: 30,
    paddingHorizontal: 15
  },
  descContent: {
    marginTop: -40,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 500,
    padding: 15
  },
  titulo: {
    color: '#aa3a3a',
    fontSize: 23,
    fontWeight: 'bold'
  },
  descricao: {
    color: '#799351',
    marginTop: 15,
    fontSize: 15
  }
});

export default class HomeScreen extends React.Component {
    static contextType = AuthContext;

    constructor(props) {
      super(props);

      const item = this.getProduct(props.route.params.id)[0];

      this.state = {
        item: item,
        quantidade: 1,
        total: parseFloat(item.preco.replace(',', '.'))
      }
    }

    getProduct(id) {
      return DATA.filter(item => item.id == id);
    }

    increment() {
      const qtd = this.state.quantidade + 1;
      const total = parseFloat(this.state.item.preco.replace(',', '.')) * qtd;
      this.setState({ quantidade: qtd, total: total.toFixed(2)});
    }

    decrement() {
      const qtd = this.state.quantidade - 1;
      const total = parseFloat(this.state.item.preco.replace(',', '.')) * qtd;
      this.setState({ quantidade: qtd, total: total.toFixed(2)});
    }

    render() {
        return (
          <SafeAreaView style={styles.container}>
            <StatusBar translucent
              barStyle={this.state.item.theme === 'claro' ? 'light-content' : 'dark-content'}
              backgroundColor={'transparent'} />
            <ImageBackground
              style={styles.imgbg}
              source={this.state.item.image}
            >
              <View style={styles.contentHeader}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <MaterialCommunityIcons
                    name="arrow-left"
                    color={this.state.item.theme === 'claro' ? 'white' : '#000'}
                    size={26}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>

            <View style={styles.descContent}>
              <>
                <Text style={styles.titulo}>{this.state.item.title}</Text>
                <Text style={styles.descricao}>{this.state.item.desc}</Text>
              </>

              <View style={{
                marginVertical: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text style={{marginRight: 5, color: '#898b8a'}}>R$</Text>
                <Text style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: '#a20a0a'
                }}>
                  {/* {this.state.item.preco} */}
                  {this.state.total}
                </Text>
                <Text style={{marginHorizontal: 5, color: '#898b8a'}}>p/</Text>
                <Text style={{color: '#898b8a'}}>{this.state.item.unidade}</Text>
              </View>

              <View style={{
                marginVertical: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>

                <TouchableOpacity
                  onPress={() => this.state.quantidade > 1 && this.decrement()}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ff0000'
                  }}
                >
                  <MaterialCommunityIcons
                    name="minus"
                    color={'white'}
                    size={26}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    color: '#898b8a',
                    width: 20,
                    fontSize: 20,
                    marginHorizontal: 25,
                    textAlign: 'center',
                    width: 28
                  }}
                >
                    {this.state.quantidade}
                </Text>

                <TouchableOpacity
                  onPress={() => this.increment()}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ff0000'
                  }}
                >
                  <MaterialCommunityIcons
                    name="plus"
                    color={'white'}
                    size={26}
                  />
                </TouchableOpacity>

              </View>

              <View style={{
                marginVertical: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('carrinho')}
                  style={{
                    width: 250,
                    height: 70,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ff0000',
                    flexDirection: 'row'
                  }}
                >
                  <MaterialCommunityIcons
                    name="cart"
                    color={'white'}
                    size={26}
                  />
                  <Text style={{
                    marginHorizontal: 10,
                    color: '#fff'
                  }}>
                    Adicionar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

          </SafeAreaView>
        );
    }
}
