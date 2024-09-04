import { View, Text, Button } from "react-native";
import { useAuth } from "../hooks/Auth";

export default function Home() {
    const {signOut} = useAuth();
    return (
        <View style={{flex: 1, justufyContent: 'center', alignItems: 'center'}}>
            <Text>Home</Text>
            <Button title="sair" onPress={() => signOut( )} />
        </View>
    );
}