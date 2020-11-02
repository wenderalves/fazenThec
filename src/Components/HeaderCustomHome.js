import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

const HeaderCustomHome = () => {
    // const image = { uri: "https://reactjs.org/logo-og.png" };
    const image = require('../../assets/produtos.jpg');

    return (
        <View
          style={{
            height: 100,
            marginTop: 0,
            marginBottom: -20,
            backgroundColor: '#e8e8e8',
            justifyContent: 'flex-end',
            alignItens: 'flex-end',
            padding: 0
          }}>
            <ImageBackground source={image} style={{
                resizeMode: "cover",
                height: 100
                /*flex: 1,
                justifyContent: "center"*/
            }}>
                <View
                    style={{
                        backgroundColor:'rgba(0, 150, 0, 0.5)',
                        flex: 1,
                        justifyContent: "center"
                    }}
                    >
                    <Text
                        style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 16,
                            textTransform: 'uppercase'
                        }}
                    >
                        Produtos
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
  };

  export default HeaderCustomHome;