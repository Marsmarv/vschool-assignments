import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "navy"
  },
  containerTwo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
},
  logoContainer:{
      alignItems: "center",
  },
  logoText: {
      fontSize: 24,
      fontWeight: '600',
      color: 'white'
  },
  logoDescription:{
      fontSize: 15,
      fontWeight: '600',
      color: 'white'
  },
  backgroundImage:{
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.7
  },
  articleContainer:{
    borderWidth: 0,
    width: '100%',
    padding: 10
  },
  articleImage: {
      height: 200  
  },
  articleTitle:{
      textAlign: "center",
      padding: 20,
      fontSize: 17,
      color: 'black',
      backgroundColor: 'white',

  },
  articleDescription:{
      fontSize: 17,
      padding: 10,
      color: 'black',
      backgroundColor: 'white',
  },
  articleBtns:{
      flexDirection: 'row',
      backgroundColor: 'white',
  },
});

export default styles;