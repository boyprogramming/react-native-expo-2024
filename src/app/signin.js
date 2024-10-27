import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, BackHandler, TextInput } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../hooks/Auth';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';


export default function App() {
  const { signIn, signOut } = useAuth();
  const [email, setEmail] = useState("super@mail.com");
  const [password, setPassword] = useState("A123456a!");

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email: "super@email.com", password: "Super123" })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Pronto para Usar</Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="black" />
        <TextInput placeholder="E-mail" value={email} onChangeText={setEmail}/>
      </View>

      <Button title="Signin Super" onPress={handleEntrarSuper} />
      <Button title="Sobre" onPress={() => router.push("/about")} />
      <Button title="Sair do Aplicativo" onPress={() => BackHandler.exitApp()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  title: {
    fontFamily: 'light',
    fontSize: 20,
  },
  inputbox: {
    flexDirection: 'row',
    gap: 10,
    margin: 10,
 
  },
  emailiinput: {
    flex: 1,
  }
});


