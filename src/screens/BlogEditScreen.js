//import liraries
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Headers from '../components/Header';
import AddContent from '../components/AddContent';
import {BlogContext} from '../components/context/BlogPostProvider';
import {useNavigation} from '@react-navigation/native';

// create a component
const BlogEditScreen = ({route}) => {
  const {updateBlogPost} = React.useContext(BlogContext);
  const [title, setTitles] = React.useState('');
  const [content, setContents] = React.useState('');
  const navigation = useNavigation();
  const Item = route.params;
  console.log('id:' + Item.id);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Headers />
      </SafeAreaView>
      <AddContent
        TitleTerm={title}
        ContentTerm={content}
        BlogTitlesTitle="Enter New Title"
        BlogContentTitle="Enter New Content"
        buttonText="Edit Blog Post"
        SetTitle={term => setTitles(term)}
        SetContent={term => setContents(term)}
        SetBlog={() => {
          updateBlogPost(Item.id, title, content), navigation.navigate('Home');
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
export default BlogEditScreen;
