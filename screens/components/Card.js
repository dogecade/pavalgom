import * as React from 'react';
import { Card } from 'react-native-elements';
import { View, Image } from 'react-native';
import { Text } from '../../components/Themed';

export default ({ title, image, description }) => {
  return (
    <Card containerStyle={{ borderRadius: '12px' }} wrapperStyle={{}}>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <View
        style={{
          position: 'relative',
          alignItems: 'center',
        }}
      >
        <Image
          style={{ width: '100%', height: 100 }}
          resizeMode="contain"
          source={{
            uri: image || 'https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4',
          }}
        />
        <Text darkColor="#ffffff">{description}</Text>
      </View>
    </Card>
  );
};
