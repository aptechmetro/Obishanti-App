

import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Social = () => {
  const IMAGE_DATA = [
    { id: '1', image: require('../assest/images/scroll1.png') },
    { id: '2', image: require('../assest/images/scroll2.png') },
    { id: '3', image: require('../assest/images/scroll3.png') },
    { id: '4', image: require('../assest/images/scroll4.png') },
    { id: '5', image: require('../assest/images/scroll5.png') },
    // Add more items as needed
  ];

  const POST_DATA = [
    {
      id: '1',
      user: 'user1',
      profilePic: require('../assest/images/profile.png'),
      uploadTime: '2 hours ago',
      caption: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
      postImage: require('../assest/images/post1.jpg'),
    },
    {
      id: '2',
      user: 'user2',
      profilePic: require('../assest/images/profile.png'),
      uploadTime: '5 hours ago',
      caption: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
      postImage: require('../assest/images/post2.jpg'),
    },
    {
      id: '3',
      user: 'user3',
      profilePic: require('../assest/images/profile.png'),
      uploadTime: '1 day ago',
      caption: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
      postImage: require('../assest/images/post3.jpg'),
    },
    // Add more items as needed
  ];

  const renderImageItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.image} source={item.image} />
    </TouchableOpacity>
  );

  const renderPostItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={item.profilePic} style={styles.profilePic} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.postUser}>{item.user}</Text>
          <Text style={styles.uploadTime}>{item.uploadTime}</Text>
        </View>
      </View>
      <Text style={styles.caption}>{item.caption}</Text>
      <Image style={styles.postImage} source={item.postImage} />
      <View style={styles.postActions}>
        <TouchableOpacity>
          <EvilIcons name="heart" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="message-circle" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="send" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <Text style={{ fontSize: 30, flex: 1, color: "#9F2CBF" }}>My Petz</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="send" color={'black'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <EvilIcons name="heart" color={'black'} size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{backgroundColor :'white'}}>
        <FlatList
          data={IMAGE_DATA}
          renderItem={renderImageItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{marginTop:1}}>

      <FlatList
        data={POST_DATA}
        contentContainerStyle={{gap:1}}
        
        renderItem={renderPostItem}
        keyExtractor={item => item.id}
        />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 4,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
  iconButton: {
    borderWidth: 2,
    borderColor: "#9F2CBF",
    height: 40,
    width: 40,
    borderRadius: 30,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postContainer: {
  backgroundColor:'white', 
   
    paddingHorizontal: 20
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  postUser: {
    fontWeight: 'bold',
  },
  uploadTime: {
    color: 'grey',
  },
  caption: {
    paddingHorizontal: 10,
    paddingBottom: 0,
    color: 'black',
  },
  postImage: {
    width: '100%',
    height:200,
    borderRadius:20,
    marginTop:20
    
   
  },
  postActions: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 20,
    marginBottom:20
  },
});

export default Social;


