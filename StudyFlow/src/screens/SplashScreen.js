import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import {colors} from "../styles/colors";


export default function SplashScreen({navigation}) {
    const opacity = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 900,
                useNativeDriver: true,
            }),
            Animated.spring(scale, {
                toValue: 1,
                friction: 5,
                useNativeDriver: true,
            }),
        ]).start();

        const time = setTimeout(() => {
        
            navigation.replace('Login');

        }, 2200);
        
        return() => clearTimeout(time);
    }, [navigation, opacity, scale]);

    return (
        <View style={styles.container}>
            <Animated.View 
                style={[
                    styles.content,
                    {
                        opacity,
                        transform: [{ scale }]
                    }
            
            ]}         
            >
                <Text style={styles.logo}>SF</Text>
                <Text style={styles.title}>StudyFlow</Text>
                <Text style={styles.subtitle}>Organize seus estudos</Text>
            
            </Animated.View>
        </View> 
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        padding: 24,
    },
    content: {
        alignItems: 'center',
        gap: 12,
    },
    logo: {
        color: colors.surface,
        fontSize: 72,
        fontWeight: '800',
    },
    title: {
        color: colors.surface,
        fontSize: 38,
        fontWeight: '800',
    },
    subtitle: {
        maxWidth: 280,
        color: colors.surface,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        opacity: 0.9,
    },
})