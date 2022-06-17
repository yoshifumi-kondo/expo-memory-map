import { FC } from 'react';
import { Text, View } from 'react-native';

const SelectEditPinScreen: FC = () => {
  const maps = Array(12).fill('v');
  return (
    <View>
      <View>
        {maps.map((_v, i) => (
          <View key={i}>
            <View>
              <Text>Pin</Text>
            </View>
            <View>
              <Text>map_name</Text>
            </View>
          </View>
        ))}
      </View>
      <View>
        <Text>Create</Text>
      </View>
    </View>
  );
};

export default SelectEditPinScreen;
