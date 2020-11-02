import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import AuthContext from './AuthContext';

export const SingUpScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="SignUp" onPress={() => alert(123)} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export const ArticleList = (props) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Logout" onPress={() => signOut()} />
      <Button
        title="Go To List"
        onPress={() =>
          props.navigation.navigate('ArticlesDetails', { post: '123' })
        }
      />
    </View>
  );
};

export const ArticleDetail = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Details : {route.params?.post}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export const SearchScreen = (props) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Button title="Logout" onPress={() => signOut()} />
    </View>
  );
};

export const SaveScreen = (props) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Button title="Logout" onPress={() => signOut()} />
    </View>
  );
};

export const AccountScreen = (props) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Button title="Logout" onPress={() => signOut()} />
    </View>
  );
};