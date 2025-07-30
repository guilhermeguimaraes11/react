import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import sheets from '../services/api';
import CardPost from '../components/CardPost';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const postsResponse = await sheets.getPosts();
      const usersResponse = await sheets.getUsers();
      setPosts(postsResponse.data);
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
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardPost title={item.title} body={item.body} userName={getUserName(item.userId)} />
        )}
      />
    </View>
  );
}
