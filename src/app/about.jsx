import { router } from 'expo-router';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import myimage from '../app/img/Foto.png';

export default function About() {
    return (
        <View style={styles.container}>
            <Image 
                source={myimage}
                style={styles.image} 
            />
            <Text style={styles.text}>
                Este aplicativo é de autoria do Gustavo Santos Gomes, esse tem proposito de listar filmes e comentários.
            </Text>
            <Button title="Voltar" onPress={() => router.replace("/")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 50, 
        marginBottom: 20,
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
    },
});
