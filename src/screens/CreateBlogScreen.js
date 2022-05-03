//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import AddContent from '../components/AddContent';
import Headers from '../components/Header';
import {BlogContext} from '../components/context/BlogPostProvider';
import {useNavigation} from '@react-navigation/native';

// create a component
const CreateBlogScreen = () => {
  const {addBlogPost} = React.useContext(BlogContext);
  const [title, setTitles] = useState('');
  const [content, setContents] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Headers />
      </SafeAreaView>
      <AddContent
        TitleTerm={title}
        ContentTerm={content}
        BlogTitlesTitle="Enter Title"
        BlogContentTitle="Enter Content"
        buttonText="Add Blog Post"
        SetTitle={setTitles}
        SetContent={setContents}
        SetBlog={() => {
          addBlogPost(title, content), navigation.navigate('Home');
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default CreateBlogScreen;
