import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'home',
            },
          },
          Start: {
            screens: {
              Start: 'start',
            },
          },  
          About: {
            screens: {
              About: 'about',
            },
          },
          Contact: {
            screens: {
              Contact: 'contact',
            },
          },
        },
      },
      Info: 'info',
      NotFound: '*',
    },
  },
};

export default linking;
