import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert,  TextInput } from 'react-native';

function message(){
  Alert.alert("Hey there");
}

// function add(){
//   count += 1;
//   list.push(count);
// }


export default function App() {

  const [message_text, setText] = useState(''); 
  const [list, setList] = useState([]);

  function display(){
    Alert.alert(list.toString());
  }

  function appendmessage() {
    setList([...list, message_text]);
  }

  return (
    <View style={styles.container}>
      <Text>OMG this is insane</Text>
      <Text>My first app ever</Text>
      <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
          defaultValue={message_text}
          placeholder="enter name"
      />
      <Button 
      onPress={() => appendmessage()}
      title="add message"
      color="#841584"
      />
      <Button 
      onPress={() => display()}
      title="display"
      color="#841584"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16d394',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
