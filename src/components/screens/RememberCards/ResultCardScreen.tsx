import { FC } from 'react';
import { Text, View } from 'react-native';

const ResultCardScreen: FC = () => {
  const answer = Array(52).fill('v');
  return (
    <View>
      <View>
        <Text>Result</Text>
        <Text>23/52</Text>
      </View>
      <View>
        <View>
          <Text>No</Text>
        </View>
        <View>
          <Text>Answer</Text>
        </View>
        <View>
          <Text>Your</Text>
        </View>
        {answer.map((v, i) => (
          <View key={i}>
            <View>
              <Text>{i + 1}</Text>
            </View>
            <View>
              <Text>suits</Text>
              <Text>num</Text>
            </View>
            <View>
              <Text>suits</Text>
              <Text>num</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ResultCardScreen;
