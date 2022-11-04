import { Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../src/utils/styles.js'

function Home({ navigation }){
  return(
  <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Wakify - matches your mood to a playlist</Text>
      
      <View>
        <TouchableOpacity onPress={() => Alert.alert("Happy Emoji pressed")}>
          <Image style={styles.button} source={require('../assets/happy.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Neutral Emoji pressed")}>
          <Image style={styles.button} source={require('../assets/neutral.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Sad Emoji pressed")}>
          <Image style={styles.button} source={require('../assets/sad.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Distraught Emoji pressed")}>
          <Image style={styles.button} source={require('../assets/distraught.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Angry Emoji pressed")}>
          <Image style={styles.button} source={require('../assets/angry.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Tired Emoji pressed")}>
          <Image style={styles.button} source={require('../assets/tired.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Active Emoji pressed")}>
          <Image style={styles.button} source={require('../assets/active.png')} />
        </TouchableOpacity>
      </View>
      <Button
        title="Select Time to Get Notifications"
        onPress={() => navigation.navigate('SelectTime')}
      />
      <Button
        title="Select Your Mood"
        onPress={() => navigation.navigate('SelectMood')}
      />
      <Button
        title="Select Your Favourite Genres"
      />
    </View>
  );
}

  
export default Home;