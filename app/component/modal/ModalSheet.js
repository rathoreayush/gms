import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { fieldNames } from 'const/en';
import Calender from 'app/untils/images/mics/calendar.svg'
import Clock from 'app/untils/images/mics/clock.svg'
import colors from 'const/encolor';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import moment from 'moment';
import { Agenda } from 'react-native-calendars';



const ModalSheet = ({ isVisible, onModalClose, ...props }) => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectDate] = useState('Select Date');
  const [selectedTime, setSelectTime] = useState('Select Time');
  const [title, setTitle] = useState('');


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split('-');
    setSelectDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
  };


  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    //console.warn("A time has been picked: ", time);
    const dt = new Date(time);
    const y = dt.toLocaleTimeString();
    setSelectTime(y);
    hideTimePicker();
  };

  //Appointment Submit
  const AppointmentSubmit = async () => {

    console.warn("Data Submit", selectedDate, selectedTime, title);

    if (title && selectedDate !== 'select Date' && selectedTime !== 'Select TIme') {

      // Convert the selected date and time to a JavaScript Date object
      const [day, month, year] = selectedDate.split('/');
      const [hours, minutes] = selectedTime.split(':');

      // Month in JavaScript Date is 0-indexed, so subtract 1 from the month value
      const eventDate = new Date(year, month - 1, day, hours, minutes);

      // Format the date using moment.js with milliseconds
      const formattedStartDate = moment(eventDate).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

      // Create a calendar event
      const eventDetails = {
        title: title,
        startDate: formattedStartDate,
        //startTime: eventTime,
      };


      try {
        const eventId = await AddCalendarEvent.presentEventCreatingDialog(eventDetails);
        console.warn('Event added to calendar with ID:', eventId);
      } catch (error) {
        console.error('Error adding event to calendar:', error);
      }
      onModalClose();
      setSelectDate('Select Date');
      setSelectTime('Select Time');
    } else {
      console.warn('Please select a title, date, and time before submitting.');
    }


  }
  return (
    <View>
      <Modal style={styles.modal} isVisible={isVisible}{...props}>
        <View style={styles.view}>
          <View style={styles.inputView}>
            <TextInput placeholder={fieldNames.AppointmentTitle} placeholderTextColor={colors.moalsheetInputplaceholderText} style={styles.inputFeild} onChangeText={(text) => { setTitle(text) }} />
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>My Case</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.dateView}>
              <TouchableOpacity style={styles.dateButton} onPress={() => { showDatePicker() }}>
                <Calender width={50} height={40} />
                <Text style={styles.dateText}>{selectedDate}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.clockView}>
              <TouchableOpacity style={styles.clockButton} onPress={() => { showTimePicker() }}>
                <Clock width={50} height={40} />
                <Text style={styles.clockText}>{selectedTime}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.submitView}>
            <TouchableOpacity style={styles.submitButton} onPress={() => { AppointmentSubmit() }}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal>
        {
          isDatePickerVisible &&(
            <Agenda
            
            />
          )}
      </Modal>
      {/* <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      /> */}
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  )
}

export default ModalSheet
