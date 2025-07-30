import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function CardTodo({ title, userName, completed }) {
  const [isChecked, setIsChecked] = useState(completed);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>Usuário: {userName}</Text>
      <View style={styles.checkboxContainer}>
        <Checkbox value={isChecked} onValueChange={setIsChecked} />
        <Text>{isChecked ? 'Concluído' : 'Pendente'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f2d8',
    margin: 10,
    padding: 10,
    borderRadius: 8
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  }
});
