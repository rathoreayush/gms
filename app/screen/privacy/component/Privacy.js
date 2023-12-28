import Header from 'component/header/Header';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './style';

const PrivacyView = () => {
  return (
    <SafeAreaView style={styles.privacyContainer}>
    
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          fringilla, dolor vitae tincidunt hendrerit, metus est blandit risus,
          id vulputate massa augue id neque. Nullam consequat ex eget ipsum
          volutpat, a interdum odio tristique. Vivamus in malesuada ipsum. Sed
          id purus vel purus tristique scelerisque eu non erat. Curabitur
          lacinia lacus non urna vulputate, eu rhoncus libero consectetur.
          Integer sollicitudin, dui et laoreet varius, dolor nisi rhoncus
          turpis,
        </Text>
        <View style={styles.textContainer}>
        <Text style={styles.text}>
          eget ultrices sapien nisl ut nunc. Praesent in semper nisi. In hac
          habitasse platea dictumst. Suspendisse at bibendum libero. Sed auctor
          libero eget libero malesuada, ut sodales sapien. Curabitur consectetur
          justo eu semper volutpat. Nullam id risus auctor, suscipit arcu id,
          volutpat nisl. Integer euismod cursus lacus, nec malesuada dolor.
          Etiam malesuada, justo at auctor ullamcorper, sapien orci laoreet
          ipsum, eget tincidunt sapien nulla sit amet elit. Suspendisse commodo
          id justo id gravida.
        </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyView;
