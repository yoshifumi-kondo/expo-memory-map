import { SutisType } from '@customTypes/type';
import { FC } from 'react';
import { Text, View } from 'react-native';

const CardSettingScreen: FC = () => {
  const suits: Array<SutisType> = ['spade', 'heart', 'diamond', 'club'];

  return (
    <View>
      {/* common comp */}
      <View>
        <Text>Image</Text>
        <Text>Map Select</Text>
        <Text>Shww Code</Text>
      </View>
      <View>
        {suits.map((v, i) => (
          <View key={i}>
            <View>
              <Text>{v}image</Text>
            </View>
            <View>
              <Text>1</Text>
            </View>
            <View>
              <Text>↓</Text>
            </View>
            <View>
              <Text>13</Text>
            </View>
          </View>
        ))}
      </View>
      <View>
        <Text>Start</Text>
      </View>
      <View>
        <Text>Advanced</Text>
      </View>
    </View>
  );
};

export default CardSettingScreen;
