import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
<Image style = {styles.image} source={require('./assets/sherline.jpg')}></Image>
<Text style = {styles.sherline}> Sherlinerose T. Dondoyano </Text>
<Text style = {styles.course}>  Information Technology 3</Text>
      </View>
    <View style = {styles}>
      <Text style ={styles.subj}>My Subjects</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.elec}>ELEC 3</Text>
        <View style={styles.first}>
          <Text style={styles.caption}>Mobile Application</Text>
          <Text style={styles.caption}>Unit: 3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style ={styles.elec}>IT 311</Text>
        <View style={styles.first}>
          <Text style={styles.caption}>Software Engineering</Text>
          <Text style={styles.caption}>Unit: 3</Text>
        </View>
      </View>
        <View style={styles.row}>
          <Text style={styles.elec}>IT 312</Text>
          <View style={styles.first}>
            <Text style={styles.caption}>Information Assurance & Security 2</Text>
            <Text style={styles.caption}>Unit: 3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.elec}>IT 313</Text>
          <View style={styles.first}>
            <Text style={styles.caption}>Quantitative Methods</Text>
            <Text style={styles.caption}>Unit: 3</Text>
      </View>
    </View>
      <View style={styles.more}>
      <Text style={styles.mores}>Click here to see more.</Text>
    </View>
  </View>
  ); 
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
    alignItem: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  profile: {
    height: 180,
    width: 320,
    backgroundColor: '#23459c',
    marginTop: 5,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    padding: 10,
    flexDirection: 'column',
  },
  subj: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  maintext: {
    color: 'white',
    marginTop: 20,
  },
  name: {
    fontsize: 30,
    color: 'white',
  },
  course: {
    fontsize: 20,
    color: 'white',
    marginBottom: 10,
  },
  subject: {
    fontsize: 10,
    marginTop: 20,
    marginBottom: 5,
  },
  elec:{
    fontWeight: 'Bold',
    fontsize: 20,
    marginLeft: '-5',
    marginBottom: 5,
    marginTop: -30,
    alignText : 'left',
  },
  caption: {
    

    
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 10,
    borderRadius:50,  
    marginTop: 15,
  },
  row:{
    backgroundColor: 'white',
    borderRadius: 15,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    flexdirection: 'row',
    alignItems: 'left',
    width: 320,
    padding: 40,
  },
  more: {

    width: 320,
    textAlign: 'right',
  },
  mores: {
    color: '#23459c',
  },
  first: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  sherline:{
    fontSize: 18,
    marginTop: 1,
    fontWeight: 'bold',
    color:'white',
  },
  course:{
    fontSize:15,
color:'white',
  }
});

