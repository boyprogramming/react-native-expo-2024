import { View, Text, Button } from "react-native";
import { useAuth } from "../../hooks/Auth";

export default function Home() {
    const { signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Signout" onPress={signOut} />
            <Text>Home</Text>
        </View>
    );
}