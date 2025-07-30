import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import sheets from '../services/api';
import CardTodo from '../components/CardTodo';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const todosResponse = await sheets.getTodos();
      const usersResponse = await sheets.getUsers();
      setTodos(todosResponse.data);
      setUsers(usersResponse.data);
    }
    fetchData();
  }, []);

  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : 'Desconhecido';
  };

  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardTodo
            title={item.title}
            completed={item.completed}
            userName={getUserName(item.userId)}
          />
        )}
      />
    </View>
  );
}
