import React, {useState} from 'react';
import {View, Text, TextInput,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function RegistrationForm() {

  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    const details = {
      name,
      mobileNumber,
      address,
    };

    navigation.navigate('View', details);
  };


  return (
    <View>
      <View>
        <Text>Name:</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text)=>setName(text)}
        />

        <Text>Mobile Number:</Text>
        <TextInput
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={(text)=>setMobileNumber(text)}
        />

        <Text>Address:</Text>
        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={(text)=>setAddress(text)}
        />
      </View>
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
    
  );
}

export default RegistrationForm;
