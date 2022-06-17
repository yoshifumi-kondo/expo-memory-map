import { FC } from 'react';
import { Text, View } from 'react-native';

const EditCodeScreen: FC = () => {
  const codes = Array(12).fill('v');

  return (
    <View>
      <View>
        <View>
          <View>
            <Text>name</Text>
          </View>
          <View>
            <Text>code</Text>
          </View>
        </View>
        {codes.map((_v, i) => (
          <View key={i}>
            <View>
              <Text>name_form</Text>
            </View>
            <View>
              <Text>{i}+code_name_form</Text>
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

export default EditCodeScreen;
