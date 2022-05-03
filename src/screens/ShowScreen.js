//import liraries
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {BlogContext} from '../components/context/BlogPostProvider';
import Header from '../components/Header';

// create a component
const ShowScreen = ({route, navigation}) => {
  const itemId = route.params;
  //console.log('ItemId' + itemId.id);
  const {data} = React.useContext(BlogContext);
  const blogData = data.find(blogdata => blogdata.id === itemId.id);
  return (
    <View style={styles.blogWrapper}>
      <SafeAreaView>
        <Header
          isShowEditBlogIcon
          BlogEditCallBack={() => {
            navigation.navigate('Edit', {id: itemId.id});
          }}
        />
      </SafeAreaView>
      <View style={styles.blogListWrapper}>
        <Text style={styles.blogListTitleText}>{blogData.title}</Text>
        <Text style={styles.blogListDataText}>{blogData.content}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  blogWrapper: {
    flex: 1,
  },
  blogListWrapper: {
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  blogListTitleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'black',
  },
  blogListDataText: {
    paddingTop: 12,
    fontSize: 18,
    color: 'black',
  },
});

//make this component available to the app
export default ShowScreen;
