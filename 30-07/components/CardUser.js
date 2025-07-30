import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardUser({ name, email, company, zipcode }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Email: {email}</Text>
      <Text>Empresa: {company}</Text>
      <Text>CEP: {zipcode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d8f8d8',
    margin: 10,
    padding: 10,
    borderRadius: 8
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5
  }
});
