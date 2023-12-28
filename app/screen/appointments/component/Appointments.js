import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Style';
import HomeButton from 'component/homebutton/Button';
import ModalSheet from 'component/modal/ModalSheet';

const AppointmentsView = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [appointmentData, setAppointmentData]=useState(['']);

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <HomeButton title='Create an appointment' onPress={() => { setModalVisible(true) }} />
      <View style={styles.lottieView}>
        <LottieView style={styles.lottie} source={require('app/untils/animination/appointment.json')} autoPlay loop />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>No appointment for Today</Text>
        <Text style={styles.subText}>You can schedule a new appointment here.</Text>
      </View>
      <ModalSheet
        isVisible={isModalVisible}
        onBackButtonPress={() => { setModalVisible(false) }}
        onModalClose={closeModal}
      />
    </SafeAreaView>
  )
}

export default AppointmentsView
