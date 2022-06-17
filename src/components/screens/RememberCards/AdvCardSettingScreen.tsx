import { FC } from 'react';
import { View, Text } from 'react-native';

const AdvCardSettingScreen: FC = () => {
  return (
    <View>
      {/* common comp */}
      <View>
        <Text>Image</Text>
        <Text>Map Select</Text>
        <Text>Shww Code</Text>
      </View>
      <View>
        <View>
          <Text>CardImage</Text>
          <Text>Count Form</Text>
        </View>
      </View>
      <View>
        <Text>Start</Text>
      </View>
      <View>
        <Text>Basic</Text>
      </View>
    </View>
  );
};

export default AdvCardSettingScreen;
