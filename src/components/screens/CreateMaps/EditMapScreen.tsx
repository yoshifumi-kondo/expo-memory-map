import { FC } from 'react';
import { Text, View } from 'react-native';

const EditMapScreen: FC = () => {
  const mapNames = Array(5).fill('v');
  return (
    <View>
      <View>
        {mapNames.map((_v, i) => (
          <View key={i}>
            <View>
              <Text>Pin</Text>
            </View>
            <View>
              <Text>{i + 1}</Text>
            </View>
            <View>
              <Text>up</Text>
            </View>
            <View>
              <Text>down</Text>
            </View>
            <View>
              <Text>Form</Text>
            </View>
            <View>
              <Text>+</Text>
            </View>
            <View>
              <Text>-</Text>
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

export default EditMapScreen;
