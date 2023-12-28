import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import styles from './Style';
import {useNavigation} from '@react-navigation/native';

const OnboardScreen = () => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');

  const [data, setData] = useState([
    {
      id: 1,
      description: 'Description 1',
    },
    {
      id: 2,
      description: 'Description 2',
    },
    {
      id: 3,
      description: 'Description 3',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerbottom}>
        <Animated.FlatList
          ref={ref}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <Animated.View style={styles.sliderContainer} key={index}>
                <TouchableOpacity
                  disabled={true}
                  style={styles.slider}></TouchableOpacity>
                <View style={styles.textView}>
                  <Text style={styles.text}>{item.description}</Text>
                </View>
              </Animated.View>
            );
          }}
        />
      </View>

      <View style={styles.buttonView}>
        {data.length - 1 == currentIndex ? null : (
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        )}

        {/*added dynamic styles for three dot in center in last lenght */}
        <View
          style={[
            styles.dotContainer,
            data.length - 1 == currentIndex ? {paddingLeft: 160} : null,
          ]}>
          {data.map((item, index) => {
            return (
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor: currentIndex == index ? data.length - 1 == currentIndex?'black' : 'green':'black',
                    width: currentIndex == index ? 10 : 8,
                    height: currentIndex == index ? 10 : 8,
                  },
                ]}
                key={index}></View>
            );
          })}
        </View>

        {data.length - 1 == currentIndex ? (
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Text
              style={styles.buttonText}
              onPress={() => {
                setCurrentIndex(currentIndex + 1);
                ref.current.scrollToIndex({
                  Animated: true,
                  index: parseInt(currentIndex) + 1,
                });
              }}>
              Next
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OnboardScreen;
