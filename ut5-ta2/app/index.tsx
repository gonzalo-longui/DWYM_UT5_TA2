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
      <TextInput onChangeText={(value) => setText(value)} value={text}></TextInput>
      <Text>{text} </Text>
    </View>
  );
}
