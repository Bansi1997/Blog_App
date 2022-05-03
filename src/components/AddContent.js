//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// create a component
const AddContent = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.BlogTitlesTitle} :</Text>
      <TextInput
        style={styles.inputbox}
        value={props.TitleTerm}
        onChangeText={newTerm => props.SetTitle(newTerm)} //......
      />
      <Text style={styles.titleText}>{props.BlogContentTitle} :</Text>
      <TextInput
        multiline={true}
        value={props.ContentTerm}
        style={styles.inputbox}
        onChangeText={newTerm => props.SetContent(newTerm)} //.......
      />
      <TouchableOpacity onPress={props.SetBlog} style={styles.saveButton}>
        <Text style={styles.saveText}>{props.buttonText} </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    paddingLeft: 5,
    paddingVertical: 10,
  },
  inputbox: {
    borderWidth: 1.5,
    fontSize: 15,
    paddingVertical: 10,
  },
  saveButton: {
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 90,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
  },
  saveText: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },
});

//make this component available to the app
export default AddContent;
