//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const HeaderPart = ({
  BlogCreateCallBack,
  BlogEditCallBack,
  isShowAddBlogIcon,
  isShowEditBlogIcon,
}) => {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.TitleTextWrapper}>
        <Text style={styles.titleText}>Blog List</Text>
      </View>
      <View style={styles.IconWrapper}>
        {isShowAddBlogIcon && (
          <TouchableOpacity
            onPress={() => {
              BlogCreateCallBack();
            }}
            style={styles.blogAddIcon}>
            <Feather name="plus" size={20} color={'black'} />
          </TouchableOpacity>
        )}
        {isShowEditBlogIcon && (
          <TouchableOpacity
            onPress={() => {
              BlogEditCallBack();
            }}
            style={styles.blogAddIcon}>
            <MaterialCommunityIcons name="pencil" size={20} color={'black'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 3,
    borderColor: '#DFDFDF',
    backgroundColor: '#EAE8E8',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TitleTextWrapper: {
    flex: 2,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },
  IconWrapper: {
    marginRight: 10,
    //backgroundColor: 'green',
  },
});

//make this component available to the app
export default HeaderPart;
