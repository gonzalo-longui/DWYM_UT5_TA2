import { Text, View, TextInput } from "react-native";
import { useState } from "react";

export default function Index() {
  const [text, setText] = useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 10,
          width: '80%',
          marginBottom: 10,
        }} onChangeText={(value) => setText(value)} value={text}></TextInput>
      <Text>{text}</Text>
    </View>
  );
}
