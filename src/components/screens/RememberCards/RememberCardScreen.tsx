import { FC } from 'react';
import { Text, View } from 'react-native';

const RememberCardScreen: FC = () => {
  return (
    <View>
      {/* Common comp */}
      <View>
        <View>
          <Text>prev</Text>
        </View>
        <View>
          <View>
            <Text>Image</Text>
            <Text>Pin name</Text>
            <Text>No</Text>
          </View>
        </View>
        <View>
          <Text>next</Text>
        </View>
      </View>

      <View>
        <Text>Image</Text>
      </View>
      <View>
        <Text>12/52</Text>
      </View>
      <View>
        <Text>Next</Text>
      </View>
    </View>
  );
};

export default RememberCardScreen;
