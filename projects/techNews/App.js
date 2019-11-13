import React, { useState, useEffect } from 'react';
import styles from './styles';
// import * as WebBrowser from 'expo-web-browser';
import {
  FlatList,
  View,
  ImageBackground,
  Text,
  Button,
  Image,
  Linking
} from 'react-native';

const App = () => {
  const [articles, setArticles] = useState([]);
  const API_KEY = "8917ec464771409c9f810cbacb0b341b";
  const URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;
  const [loading, setLoading ] = useState(true);

  useEffect(()=>{
    fetch(URL)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.articles;
    })
    .then( articles  => {
      setArticles(articles);
      setLoading(false);
     console.log(articles, "shit fuck")

    })
    .catch( error => {
      console.error(error);
    });  
  } , []);  
  
  setTimeout(() =>{
    setLoading(false);
  } , 1000);

  if (loading){
      return <SplashScreen />
    } else {
      return <HomeScreen articles = { articles } />
  }

};

const HomeScreen = (props) => {
  return (
    <View style= { styles.containerTwo }>
        <FlatList
          data={ props.articles }
  renderItem={({item}) => <ArticleItem article = { item }/>}
        />
    </View>
  );
} 

const SplashScreen = () => {
  const { container, backgroundImage, logoContainer, logoDescription, logoText} = styles
  return (
    <View style={ container }>
      <ImageBackground style= {backgroundImage} >

        <View style= { logoContainer }>
          <Text style= { logoText }>
            Newzzz
          </Text>          
          <Text style= { logoDescription }>
            Get your dose of REAL news!
          </Text>
        </View>

      </ImageBackground>
    </View>
  );
};

const ArticleItem = ({article}) => {
  const { description, url, urlToImage, title } = article;
  return (
    <View style = { styles.articleContainer }>
      <Image style={ styles.articleImage } source={ {url: urlToImage} } />
      <Text style= { styles.articleTitle }> { title } </Text>
      <Text style = { styles.articleDescription }> { description } </Text>
      <View style = { styles.articleBtns}>
        <Button onPress = { () => { Linking.openURL(url) } } title="Open" />
        <Button onPress = { () => { console.log("Button pressed!") } } title="Read later" />
      </View>

    </View>
  )
}

export default App;