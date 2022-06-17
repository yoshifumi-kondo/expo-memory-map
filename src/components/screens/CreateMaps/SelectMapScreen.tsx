import { FC } from 'react';
import { Text, View } from 'react-native';

const SelectMapScreen: FC = () => {
  const maps = Array(5).fill('v');

  return (
    <View>
      <Text>SelectMapScreen</Text>
      <View>
        {maps.map((_v, i) => (
          <View key={i}>
            <Text>map{i}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SelectMapScreen;
