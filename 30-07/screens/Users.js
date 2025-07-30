import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import sheets from '../services/api';
import CardUser from '../components/CardUser';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    sheets.getUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardUser
            name={item.name}
            email={item.email}
            company={item.company.name}
            zipcode={item.address.zipcode}
          />
        )}
      />
    </View>
  );
}
