//import liraries
import React,{useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {BlogContext} from '../components/context/BlogPostProvider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


//FontAwesome.loadFont();
// create a component

const HomeScreen = ({navigation}) => {
  const {data, deleteBlogPost,getBlogPost} = React.useContext(BlogContext);

  useEffect(()=>{
   // getBlogPost();
    // console.log(data.title);
    const response=navigation.addListener('focus',()=>{
      getBlogPost();
    });
    return()=>{
      response.remove();
    }   
  },[]);
  return (
    <View style={styles.mainWrapper}>
      <SafeAreaView>
        <Header
          isShowAddBlogIcon
          BlogCreateCallBack={() => navigation.navigate('Create')}
        />
      </SafeAreaView>
      {/* <TouchableOpacity onPress={() => addBlogPost()}>
        <Text>Add Blog</Text>
      </TouchableOpacity> */}
      <FlatList
        data={data}
        keyExtractor={blogData => blogData.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View style={styles.blogListWrapper}>
                <Text style={styles.blogListTitleText}>{item.title}</Text>

                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <FontAwesome name="trash" size={20} color={'black'} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    //backgroundColor: 'red',
  },
  blogListWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 10,
    // backgroundColor: 'gray',
    borderRadius: 10,
    borderWidth: 2,
  },
  blogListTitleText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});

//make this component available to the app
export default HomeScreen;
