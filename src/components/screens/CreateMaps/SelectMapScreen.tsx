import { FC } from 'react';
import { Text, View } from 'react-native';

const SelectMapScreen: FC = () => {
  const maps = Array(5).fill('v');

  return (
    <View>
      <View>
        {maps.map((_v, i) => (
          <View key={i}>
            <View>
              <Text>MapImage</Text>
              <Text>MapAmount</Text>
            </View>
            <Text>map_name{i}</Text>
          </View>
        ))}
      </View>

      <View>
        <Text>Create</Text>
      </View>
    </View>
  );
};

export default SelectMapScreen;
