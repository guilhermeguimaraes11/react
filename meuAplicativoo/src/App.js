import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import { NavigationContainer, createStaticNavigation } from "@react-navigation/native"
import { createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator();


export default function App() {
  return (
 <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen/>
    </Stack.Navigator>
 </NavigationContainer>
  );
}

