import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
const title = 'Astronot Mobile';
const intro = 'Hey And Welcome to astronot mobile built with react native';
const content = 'Free download and open source code present by axcora technology';
const download = 'with this source code you can built modern android and ios application easy using react native';
const btn = 'Visit Astronot Home Page';
const link = 'https://astronot.axcora.com';
export default function Home() {
  return (
    <View style={styles.Container}>
    <Text style={styles.TitleText}>{title}</Text>
      <View style={styles.separator}/>
    <Text style={styles.IntroText}>{intro}</Text>
    <Text style={styles.ContentText}>{content}</Text>
    <Text style={styles.ContentText}>{download}</Text>
    <Text style={styles.ContentText}>{btn}</Text>
    <Text style={styles.ContentText}>{link}</Text>
     
    </View>
  );
}



const styles = StyleSheet.create({
  Container: {
        margin: 10,
        marginTop: 20,
        borderRadius: 5,
        boxShadow: '#383227',
        boxSizing: 'border-box',
        backgroundColor: '#f5fab5',
        padding: 20,
        textAlign: 'center',
        marginBottom: 30, 
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  separator: {
    marginVertical: 30,
    backgroundColor: '#000',
    height: 1,
    width: '100%',
  },
  TitleText: {
    fontSize: 27,
    lineHeight: 29,
    textAlign: 'center',
  },
  IntroText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  ContentText: {
    fontSize: 14,
    textAlign: 'center',
  },
  helpContainer: {
    borderRadius: 8,
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: '#de2b90',
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
    color: 'white',
  },
});
