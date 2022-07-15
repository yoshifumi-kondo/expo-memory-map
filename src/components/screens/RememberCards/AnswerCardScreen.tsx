import { suits } from '@libs/variables';
import { customColor } from '@styles/customStyles';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AnswerCardScreen: FC = () => {
  const number = Array(13)
    .fill('v')
    .map((_v, i) => i + 1);

  return (
    <View style={styles.container}>
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
        <View>
          {suits.map((v, i) => (
            <View key={i}>
              <View>
                <Text>{v}</Text>
              </View>
            </View>
          ))}
        </View>
        <View>
          {number.map((v, i) => (
            <View key={i}>
              <Text>{v}</Text>
            </View>
          ))}
        </View>
      </View>
      <View>
        <View>
          <Text>suit</Text>
        </View>
        <View>
          <Text>number</Text>
        </View>
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

export default AnswerCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColor.first,
    paddingHorizontal: 38,
    minHeight: '100%',
    justifyContent: 'flex-start',
    paddingVertical: 32,
  },
});
