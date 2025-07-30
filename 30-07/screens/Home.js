import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Ver Posts" onPress={() => navigation.navigate('Posts')} />
      <Button title="Ver Usuários" onPress={() => navigation.navigate('Users')} />
      <Button title="Ver Tarefas" onPress={() => navigation.navigate('Todos')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 20
  }
});
