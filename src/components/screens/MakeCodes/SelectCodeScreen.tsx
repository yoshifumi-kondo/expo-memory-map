import { FC } from 'react';
import { Text, View } from 'react-native';

const SelectCodeScreen: FC = () => {
  const codes = Array(5).fill('v');

  return (
    <View>
      <View>
        {codes.map((_v, i) => (
          <View key={i}>
            <View>
              <Text>Code_name{i}</Text>
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

export default SelectCodeScreen;
