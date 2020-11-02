import React from 'react';
import AuthContext from '../../AuthContext';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TextInput , TouchableOpacity, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import DATA from './produtos';

const DATA = [{
  id: '1',
  title: 'Leite Fresco',
  preco: 3.99,
  qtd: 2
},
{
  id: '2',
  title: 'Ovos Fresco',
  preco: 9.99,
  qtd: 1
},
{
  id: '3',
  title: 'Alface Crespa',
  preco: 2.99,
  qtd: 3
}];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#e8e8e8'
  },
  title: {
    width: 150,
    fontWeight: 'bold'
  }
});



export default class ResumoScreen extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
  }

  componentDidMount() {
    let Total = 0;
    DATA.map((item) => {
      const totalItem = item.qtd * item.preco;
      Total += totalItem;
    });
    this.setState({total: Total.toFixed(2)});
  }

  render() {

    const renderItem = ({ item }) => {
      // const navigation = useNavigation();
      return (
        <View style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between'
        }}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.qtd} x R$ {item.preco} </Text>
          </View>
          <Text>R$ {item.qtd * item.preco} </Text>
          <TouchableOpacity
            onPress={() => this.state.quantidade > 1 && this.decrement()}
            style={{
              width: 38,
              height: 38,
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
        </View>
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent barStyle={'light-content'} backgroundColor={'transparent'} />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

        <View style={{
          margin: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text>Total do seu pedido:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 26}}>R$ {this.state.total}</Text>
          <Text>Será entregue amanhã.</Text>
          <TextInput
            style={{ height: 48
              , borderColor: 'gray', borderWidth: 1, padding: 15, marginTop: 25, width: Dimensions.get('window').width - 20 }}
            placeholder="Endereço de entrega">
          </TextInput>
        </View>

        <View style={{
          width: Dimensions.get('window').width,
          padding: 15,
          alignItems: "center",
          justifyContent: "center"
        }}>
          <TouchableOpacity
            onPress={() => false}
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
              name="cash"
              color={'white'}
              size={26}
            />
            <Text style={{
              marginHorizontal: 10,
              color: '#fff'
            }}>
              Confirmar Pedido
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
