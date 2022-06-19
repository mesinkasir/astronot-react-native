import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
const title ='Contact Astronot team developer';
const project ='Hey if you need built a new modern website or app just contact us';
const modern ='Modern web development with';
const staticis ='astro gatsby react angular eleventy 11ty  svelte and more..';
const dynamic ='Dynamic website CMS technology';
const dynamicis ='Laravel PHP artisan , symfony , code iginiter, pico cms, get axcora';
const app ='Built Point of sale for shop retail and restaurant app.';
const btn ='whatsapp Now : +6285646104747';
export default function Contact() {
  return (
    <View style={styles.Container}>
        <Text style={styles.getStartedText}>{title}</Text>
        <Text style={styles.getReadyText}>{project}</Text>
        <Text style={styles.getReadyText}>{modern}</Text>
        <Text style={styles.getReadyText}>{staticis}</Text>
        <Text style={styles.getReadyText}>{dynamic}</Text>
        <Text style={styles.getReadyText}>{dynamicis}</Text>
        <Text style={styles.getReadyText}>{app}</Text>
        <Text style={styles.getReadyText}>{btn}</Text>
   
    </View>
  );
}


const styles = StyleSheet.create({
  Container: {
        margin: 10,
        marginTop: 30,
        border: 'solid #383227',
        borderRadius: 5,
        boxShadow: '#383227',
        boxSizing: 'border-box',
        backgroundColor: '#f5fab5',
        padding: 20,
        marginBottom: 30, 
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 27,
    lineHeight: 29,
    marginBottom: 10,
    textAlign: 'center',
  },
  getReadyText: {
    marginTop: 5, 
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: '#de2b90',
    alignItems: 'center',
    borderRadius: 5,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
    color: 'white',
  },
});
