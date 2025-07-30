import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardPost({ title, body, userName }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{body}</Text>
      <Text style={styles.user}>Autor: {userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    margin: 10,
    padding: 10,
    borderRadius: 8
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  user: {
    marginTop: 5,
    fontStyle: 'italic'
  }
});
