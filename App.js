import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { authReducer } from './AuthReducer';
import AuthContext from './AuthContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { SearchScreen } from './Screens';

import SplashScreen from './src/Screens/SplashScreen';
import SingInScreen from './src/Screens/SignInScreen';
import SingUpScreen from './src/Screens/SingUpScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ResumoScreen from './src/Screens/ResumoScreen';
import DetalheProdutos from './src/Screens/DetalheProdutos';
import HeaderCustomHome from './src/Components/HeaderCustomHome';

const AuthStack = createStackNavigator();
const AppTabs = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackHome = () => {
  return (
    <HomeStack.Navigator>
      <AppTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: HeaderCustomHome
        }}
      />
      <AppTabs.Screen
        name="detalheProd"
        component={DetalheProdutos}
        options={{ header: () => null }}
      />
      <AppTabs.Screen
        name="carrinho"
        component={ResumoScreen}
        options={{title: 'Tela de Resumo'}}
      />
    </HomeStack.Navigator>
  );
};

export default function App() {
  const [state, dispatch] = React.useReducer(authReducer, {
    isLoading: true,
    token: null,
    errorMessage: '',
  });

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        const token = 'AquiVaiAlgumToken';
        await AsyncStorage.setItem('userToken', token);
        dispatch({ type: 'SIGN_IN', token: token });
      },
      signOut: async() => {
        await AsyncStorage.removeItem('userToken');
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async (data) => {
        const token = 'AquiVaiAlgumToken';
        await AsyncStorage.setItem('userToken', token);
        dispatch({ type: 'SIGN_IN', token: token });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.token === null ? (
          <AuthStack.Navigator headerMode="none">
            {state.isLoading ? (
              <AuthStack.Screen name="Splash" component={SplashScreen} />
            ) : (
              <>
                <AuthStack.Screen name="SignIn" component={SingInScreen} />
                <AuthStack.Screen name="SignUp" component={SingUpScreen} />
              </>
            )}
          </AuthStack.Navigator>
        ) : (
          <AppTabs.Navigator
            activeColor="#698474"
            inactiveColor="#baf7d7"
            barStyle={{ backgroundColor: '#bac7a7' }}>
            <AppTabs.Screen
              name="Home"
              component={HomeStackHome}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />

            <AppTabs.Screen
              name="Perfil"
              component={SearchScreen}
              options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={26}
                  />
                ),
              }}
            />
          </AppTabs.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}