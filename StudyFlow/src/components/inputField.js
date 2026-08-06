import { ImageBackground } from "react-native/types_generated/index"

export default function InputField({
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry = false,
    keyboardType = 'default',
    autoCapitaliza = 'sentences',
}) {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.textlight}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitaliza}
                style={styles.input}
            ></TextInput>
        </View>
    )
};

const styles = StylesSheet.create({
    container: {
        width: '100%',
        gap: 8,
    },
    label: {
        color: colors.text,
        fontSize: 14,
        fontWeight: '600',
    },
    input: {
        minHeight: 52,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 14,
        backgroundColor: colors.surface,
        color: colors.text,
        fontSize: 16,
        paddingHorizontal: 16,
    }
})


