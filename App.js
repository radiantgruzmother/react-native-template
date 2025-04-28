import { StyleSheet, SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Poste from "./components/Poste";

const Stack = createNativeStackNavigator();

export default function App() {
  const onButtonPress = () => {
    console.log('button pressed.')
  }
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  header: {
    FontSize: 50, 
    color: '#f9b41c',
    marginBottom: 20,
    textAlign: 'center',
  },

  signInForm: {
    flex: 3,
    width: '80%',
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 20,
    position: 'relative',
    top: -75
  },

  formlabel: {
    fontSize: 20,
    color: '#f9b41c',
    marginBottom: 10,
    marginTop: 10,
  },

  formInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#eee",
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },

  button_text: {
    fontSize: 15,
    color: '#fff'
  },

  logo: {
    flex: 0.5,
    width: '99%',
  },
  
});
