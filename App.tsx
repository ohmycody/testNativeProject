import React, {useEffect} from 'react';
import {View, Text, Platform, UIManager, SafeAreaView} from 'react-native';
import {authorize} from 'react-native-app-auth';
import {UNSPLASH_CLIENT_ID, UNSPLASH_CLIENT_SECRET} from 'react-native-dotenv';
import CollapsibleList from './components/Collapsible/CollapsibleList';
import CollapsibleItem from './components/Collapsible/CollapsibleItem';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await authorize({
          serviceConfiguration: {
            authorizationEndpoint: 'https://unsplash.com/oauth/authorize',
            tokenEndpoint: 'https://unsplash.com/oauth/token',
          },
          clientId: UNSPLASH_CLIENT_ID,
          clientSecret: UNSPLASH_CLIENT_SECRET,
          redirectUrl: 'testnativeproject://oauth',
          scopes: ['read_user', 'write_user'],
          usePKCE: false,
        });
        console.warn(accessToken);
      } catch (e) {
        console.error('ACCESS TOKEN ERROR', e);
      }
    };

    getToken();
  }, []);

  return (
    <SafeAreaView>
      <CollapsibleList>
        <CollapsibleItem title="Collapsible Title 1">
          <View>
            <Text>
              Collapsible Text 1 ||| Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Pariatur a iusto, minus impedit distinctio
              voluptatum error velit reprehenderit odit delectus dolorem enim
              temporibus sapiente ad, aperiam repudiandae recusandae animi
              ipsam!
            </Text>
          </View>
        </CollapsibleItem>
        <CollapsibleItem title="Collapsible Title 2" isOpened>
          <View>
            <Text>
              Collapsible Text 2 ||| Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Pariatur a iusto, minus impedit distinctio
              voluptatum error.
            </Text>
          </View>
        </CollapsibleItem>
        <CollapsibleItem title="Collapsible Title 3">
          <View>
            <Text>
              Collapsible Text 3 ||| Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Pariatur a iusto, minus impedit distinctio
              voluptatum error velit reprehenderit odit delectus dolorem enim
              temporibus sapiente ad, aperiam repudiandae recusandae animi
              ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Pariatur a iusto, minus impedit distinctio voluptatum error velit
              reprehenderit odit delectus dolorem enim temporibus sapiente ad,
              aperiam repudiandae recusandae animi ipsam!
            </Text>
          </View>
        </CollapsibleItem>
      </CollapsibleList>
    </SafeAreaView>
  );
};

export default App;
