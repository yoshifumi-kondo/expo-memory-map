import { FC } from 'react';
import { Text, View } from 'react-native';

const CheckMapScreen: FC = () => {
  const pins = Array(5).fill('v');

  return (
    <View>
      <View>
        <View>
          <View>
            <Text>map</Text>
          </View>
          <View>
            <Text>pin</Text>
          </View>
        </View>
        {pins.map((_v, i) => (
          <View key={i}>
            <View>
              <Text>map_name</Text>
            </View>
            <View>
              <Text>pin</Text>
            </View>
            <View>
              <Text>hide</Text>
            </View>
          </View>
        ))}
      </View>
      <View>
        <Text>Save</Text>
      </View>
    </View>
  );
};

export default CheckMapScreen;
