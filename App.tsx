import React from 'react';
import {View, Text, StyleSheet, Platform, UIManager} from 'react-native';
import CollapsibleList from './components/Collapsible/CollapsibleList';
import CollapsibleItem from './components/Collapsible/CollapsibleItem';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <View style={styles.layout}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    marginTop: 60,
  },
});

export default App;
