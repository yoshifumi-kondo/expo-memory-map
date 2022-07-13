import { FC } from 'react';
import { Text, View } from 'react-native';

const EditObjectsScreen: FC = () => {
  const pins = Array(12).fill('v');

  return (
    <View>
      <View>
        {pins.map((_v, i) => (
          <View key={i}>
            <View>
              <Text>{i}+map_name</Text>
            </View>
            <View>
              <Text>Form</Text>
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

export default EditObjectsScreen;
