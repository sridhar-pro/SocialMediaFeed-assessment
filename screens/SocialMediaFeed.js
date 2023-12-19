import React, { useRef, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const data = [
  {
    id: '1',
    username: 'Weboin',
    place: 'Anna salai',
    imageUri: 'https://media.licdn.com/dms/image/C511BAQHINjwdAHUsbw/company-background_10000/0/1584483418980/weboin_cover?e=2147483647&v=beta&t=PIol3QVAIsWPzZ38L-aLOwx-e1ZCfKhCw0MDmB76VVQ', 
    content: 'WEBOIN TECHNOLOGIES is one of the fastest-growing digital marketing Companies',
    hashTag: '#digital-marketing#digital-agency',
    postedTime: 'Posted 3 hours ago',
  },
  {
    id: '2',
    username: 'React-native',
    place: 'Facebook',
    imageUri: 'https://www.inovex.de/wp-content/uploads/2018/03/react-native-1500x880.png', 
    content: 'React is a popular JavaScript library used for building user interfaces.',
    hashTag: '#react#react-native#react-js#facebook',
    postedTime: 'Posted 4 hours ago',
  },
  {
    id: '3',
    username: 'Next-js',
    place: 'React',
    imageUri: 'https://global.discourse-cdn.com/auth0/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png', 
    content: 'Next.js is a powerful open-source React framework used for building modern web applications.',
    hashTag: '#ronaldo#al-naser#man-united',
    postedTime: 'Posted 9 hours ago',
  },
  {
    id: '4',
    username: 'Cristiano Ronaldo',
    place: 'Al-naser',
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg', 
    content: 'A forward and captains both Saudi-Pro League club',
    hashTag: '#ronaldo#al-naser#man-united',
    postedTime: 'Posted 17 hours ago',
  },
  {
    id: '5',
    username: 'Weboin',
    place: 'Anna salai',
    imageUri: 'https://www.geneva.edu/news/2017/10/gc-graphic_11-reasons-why-your-summer-internship-was-totally-worth-it_eddy.jpg', 
    content: 'Android App Development Internship in Chennai at Weboin Technologies',
    hashTag: '#digital-marketing#digital-agency',
    postedTime: 'Posted 20 hours ago',
  },
  {
    id: '6',
    username: 'Dummy_user',
    place:'USA',
    imageUri: 'https://th-i.thgim.com/public/incoming/9uvnty/article67222424.ece/alternates/BASE_SQUARE/2023-08-04T094328Z_1224629970_RC2WG2AC6YU7_RTRMADP_3_WPP-RESULTS-TWITTER.JPG',
    content: 'Elon Musk borrowed $1 billion from SpaceX in same month of Twitter buyout',
    hashTag: '#tesla#twitter#space-x#x',
    postedTime: 'Posted 23 hours ago',
  },
  {
    id: '7',
    username: 'Dummy_user',
    place:'Block-chain',
    imageUri: 'https://www.bbva.ch/wp-content/uploads/2022/07/recurso_blockchain.jpg',
    content: 'Blockchain is a technology based on a decentralized and public blockchain',
    hashTag: '#bit-coin#etherum#web3.0',
    postedTime: 'Posted 1 day ago',
  },
 
  {
    id: '8',
    username: 'Virat Kohli',
    place:'India',
    imageUri: 'https://resources.pulse.icc-cricket.com/photo-resources/2023/11/06/11c1c89c-2ae7-4de8-bf4f-5c14ce8cad59/Kohli-fingers-crossed.jpg?width=640&height=360',
    content: 'On the mark!',
    hashTag: '#king#captain#run-machine',
    postedTime: 'Posted 1 day ago',
  },
  {
    id: '9',
    username: 'Dummy_user',
    place:'Los angels',
    imageUri: 'https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg',
    content: 'Los Angeles: glamour, beautiful beaches and culture',
    hashTag: '#usa#travel#image',
    postedTime: 'Posted 2 day ago',
  },
  {
    id: '10',
    username: 'Dummy_user',
    place:'Testing',
    imageUri: 'https://i.ytimg.com/vi/BcDKljLqXPw/maxresdefault.jpg',
    content: 'This is an test post',
    hashTag: '#test#posted#image',
    postedTime: 'Posted 5 days ago',
  },
  {
    id: '11',
    username: 'Dummy_user',
    place:'Chat-gpt',
    imageUri: 'https://i.ytimg.com/vi/_PBh9BzMpGM/maxresdefault.jpg',
    content: 'Sam Altman regains the CEO position and slagthered committe of chat-gpt',
    hashTag: '#google#chat-gpt#founder#ai',
    postedTime: 'Posted 14 days ago',
  },
  {
    id: '12',
    username: 'Cristiano Ronaldo',
    place:'Real-Madrid',
    imageUri: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltee886584fd1cd345/60db8718892a730f5883a347/68a712aa7ffd3da7d91c2fe1469bda58990f7ab7.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    content: '5 times Champions trophy winner',
    hashTag: '#ronaldo#ucl#champions-trophy#real-madrid',
    postedTime: 'Posted 22 days ago',
  },
  {
    id: '13',
    username: 'Dummy_user',
    place:'Google',
    imageUri: 'https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography.png',
    content: 'Angular is one of the most popular JavaScript frameworks created and developed by Google',
    hashTag: '#google#angular#javascript',
    postedTime: 'Posted 23 days ago',
  },
  {
    id: '14',
    username: 'Dummy_user',
    place:'Chat-gpt',
    imageUri: 'https://s3.us-west-2.amazonaws.com/assets.eastidahonews.com/wp-content/uploads/2023/11/Altman.jpg',
    content: 'Chat GPT parent company fires its CEO. Whats next for the company?',
    hashTag: '#google#chat-gpt#founder#ai',
    postedTime: 'Posted 25 days ago',
  },
  {
    id: '15',
    username: 'Virat Kohli',
    place:'India',
    imageUri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/anushka-sharma-and-virat-kohli-celebrate-6th-wedding-anniversary-125454398-16x9_0.jpeg?VersionId=XbUwW..Ajh5ldTi_kyDsZl.CdtV7025V&size=690:388',
    content: '6th Anniversary!',
    hashTag: '#anuskha#anniversary#love',
    postedTime: 'Posted 28 days ago',
  },
  {
    id: '16',
    username: 'Cristiano Ronaldo',
    place:'Man-united',
    imageUri: 'https://e0.365dm.com/22/07/1600x900/skysports-cristiano-ronaldo_5823312.jpg?20220704142647',
    content: 'Left the club with mutual agreement in winter-trade',
    hashTag: '#ronaldo#man-united#sacked',
    postedTime: 'Posted 1 month ago',
  },
  {
    id: '17',
    username: 'Dummy_user',
    place:'India',
    imageUri: 'https://cdn.siasat.com/wp-content/uploads/2023/08/sf-f.jpg',
    content: 'India, I reached my destination: ISRO confirms Chandrayaan 3s soft-landing on moon',
    hashTag: '#moon#mission#space#ai',
    postedTime: 'Posted 1 month ago',
  },
  {
    id: '18',
    username: 'Virat Kohli',
    place:'India',
    imageUri: 'https://i1.wp.com/cdn.dnaindia.com/sites/default/files/styles/full/public/2020/11/14/937539-virat-kohli-australia.jpg?strip=all',
    content: 'Century at centurion!',
    hashTag: '#king#69thhundred#100',
    postedTime: 'Posted 3 months ago',
  },
  {
    id: '19',
    username: 'Next-js',
    place: 'React',
    imageUri: 'https://miro.medium.com/v2/resize:fit:1400/1*94Z17dA4rkLL5pOon2ZbCw.jpeg', 
    content: 'Is next-js is the future?',
    hashTag: '#react#framework#next-js',
    postedTime: 'Posted 8 months ago',
  },
  {
    id: '20',
    username: 'React-native',
    place: 'Facebook',
    imageUri: 'https://cdn-blog.scalablepath.com/uploads/2023/03/react18-new-features-updates-1.png', 
    content: 'The latest version of the library, React 18, was released in March 2022',
    hashTag: '#react#react-native#react-js#facebook',
    postedTime: 'Posted 1 year ago',
  },
];

const profileImages = {
  'React-native' : 'https://ieeecs-media.computer.org/wp-media/2023/02/27122207/Benefits-of-Using-React-Native-for-Mobile-Development.jpg',
  'Next-js' : 'https://img-c.udemycdn.com/course/750x422/2000856_bce7_5.jpg',
  'Weboin' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hlVXX3g1OuMYMaPForBw_K15xSwmKlyVnIssTlMnX7dY3lgdBGbpJnnfAMtbI2ZJgfA&usqp=CAU',
  'Cristiano Ronaldo': 'https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png', 
  'Dummy_user' : 'https://img.freepik.com/premium-vector/cute-funny-posted-notes_464314-1823.jpg',
  'Virat Kohli' : 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png',
};


const FeedItem = ({ username, place, imageUri, content, hashTag, postedTime }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000, // Adjust the duration of the animation as needed
      useNativeDriver: true,
    }).start();
  }, []);

  const [liked, setLiked] = useState(false);
  const scaleValue = new Animated.Value(1);

  const handleLike = () => {
    setLiked(!liked);

    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  const image = profileImages[username] || 'https://placekitten.com/40/40';
  
  const handleButtonPress = (buttonName) => {
    console.log(`${buttonName} button pressed!`);
  };

  return(
    
    <Animated.View style={[styles.feedItem, { opacity: fadeAnim }]}>
        <View style={styles.userInfo}>
  <Image source={{ uri: image }} style={styles.profileImage} />
  <View style={styles.userInfoText}>
    <View style={styles.usernameContainer}>
      <Text style={styles.username}>{username}</Text>
      <TouchableOpacity onPress={() => handleButtonPress('Follow')}style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.place}>{place}</Text>
  </View>
</View>

    <View style={styles.imageContainer}>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>

    <View style={styles.textContainer}>
    <Text style={styles.content}>{content}</Text>
    <Text style={styles.hashTag}>{hashTag}</Text>
    </View>

    
    <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={handleLike} style={styles.button}>
    <Text style={styles.buttonTextTransparent}>{liked ? 'Liked!' : 'Like'}</Text>
    <Animated.Image
      source={liked ? require('./profile/l.jpeg') : require('./profile/like.png')}
      style={[styles.likeIcon, animatedStyle]}
      resizeMode="contain"
    />
    </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('Comment')}style={styles.empty}>
      <Text  style={styles.buttonTextTransparent}>Comment</Text>
      <Image  
        source={require('./profile/comment.jpg')} 
        style={styles.logo}
        resizeMode="contain" 
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleButtonPress('Share')} style={styles.button}>
        <Text style={styles.buttonTextTransparent}>Share</Text>
        <Image  
        source={require('./profile/share.jpeg')} 
        style={styles.logo}
        resizeMode="contain" 
      />
      </TouchableOpacity>
    </View>
    <View style={styles.textContainer}>
    
    <Text style={styles.postedTime}>{postedTime}</Text>
    </View>
    </Animated.View>
  
);
}

const SocialMediaFeed = () => {

  const slideUpAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(slideUpAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideUpAnim]);

  const renderFeedItem = ({ item }) => (
    <Animated.View style={{ transform: [{ translateY: slideUpAnim }] }}>
    <FeedItem
      username={item.username}
      place={item.place}
      imageUri={item.imageUri}
      content={item.content}
      hashTag={item.hashTag}
      postedTime={item.postedTime}
    />
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  feedItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 5, 
  },

  username: {
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#FAF0E6',
  },

  userButton: {
    backgroundColor: '#000000',
    padding: 5,
    borderRadius: 3,
    justifyContent: 'center',
    marginLeft: 130,
    
  },
  
  place: {
    color: '#FAF0E6', 
    fontStyle: 'italic', 
    alignItems: 'center',
    
  },

  userInfoText: {
    flex: 1,
    flexDirection: 'column',
  },
  
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  followButton: {
    backgroundColor: '#000000',
    padding: 5,
    borderRadius: 3,
  },
  
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 400,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  content: {
    fontSize: 16,
    alignItems: 'center',
    color: '#FAF0E6',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#000000',
    padding: 2,
    borderRadius: 0,
    width: '30%',
    height: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },

  buttonTextTransparent: {
    color: 'rgba(255, 255, 255, 0.5)', 
    fontWeight: 'bold',
  },

  logo: {
    width: '60%',
    height: 20,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  empty:{
    backgroundColor: '#000000' , 
    padding: 2,
    borderRadius: 0,
    width: '40%',
    height: 50,
    alignItems: 'center',
  },

  hashTag: {
    color: '#FAF0E6',
    fontStyle: 'italic',
    alignItems: 'flex-end',
    marginBottom: 5,
  },

  postedTime: {
    color: '#FAF0E6',
    fontStyle: 'italic',
  },

  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },

});

export default SocialMediaFeed;
