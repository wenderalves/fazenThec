import React from 'react';
import AuthContext from '../../AuthContext';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DATA from './produtos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#e8e8e8'
  },
  row: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 10,
    borderRadius: 0
  },
  imageContainer: {
    width: 120,
    height: 90,
    marginRight: 10
  },
  imageItem: {
    width: 120,
    height: 90,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 90
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 10,
  },
  unidade: {
    fontSize: 10,
    fontWeight: 'normal'
  },
  preco: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  tituloContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  titulo: {
    fontSize: 16,
    color: '#889e81',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});


const Item = ({item}) => {

};

export default class HomeScreen extends React.Component {
    static contextType = AuthContext;

    render() {
        const renderItem = ({ item }) => {
          // const navigation = useNavigation();
          return (
            <TouchableOpacity
              style={styles.row}
              onPress={() => this.props.navigation.navigate('detalheProd', { id: item.id })}
              >
              <View style={styles.imageContainer}>
                <Image
                  style={styles.imageItem}
                  source={item.tumb}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                <View>
                  <Text style={styles.preco}>
                    R$ {item.preco}
                    <Text style={styles.unidade}> p/ {item.unidade}</Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        };

        return (
          <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle={'light-content'} backgroundColor={'transparent'}/>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            {/* <Button title="Logout" onPress={() => this.context.signOut()} /> */}
          </SafeAreaView>
          );
    }
}
