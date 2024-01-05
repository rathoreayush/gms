import SearchBar from 'component/searchbar/SearchBar';
import React,{useState,useEffect} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity,FlatList, } from 'react-native';
import Calender from 'app/untils/images/mics/calendar.svg'
import styles from './Style';
import LottieView from 'lottie-react-native';
import HomeButton from 'component/homebutton/Button';
import ModalSheet from 'component/modal/ModalSheet';
import caseData from 'untils/data/Casedata';
import SelectionItem from 'component/selectionItem/SelectionItem';

const HomeView = () => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [isHearingData,setHearingData]=useState([]);
  const [showCheckbox,setShowCheckbox]=useState(false)
  
  useEffect(()=>{
    setHearingData(caseData);
    //setHearingData();
  },[])

console.log("data",isHearingData)
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.searchContainer}>
        <View style={styles.searchView}>
          <SearchBar
            placeholder="Party, Court Name, Judges"
          // onChangeText={handleTextChange}
          // value={value}
          />
        </View>
        <TouchableOpacity>
          <Calender width={50} height={40}/>
        </TouchableOpacity>
      </View>
      {
        isHearingData?(
        <>
          <FlatList style={{marginTop:10}}
           data={isHearingData} renderItem={({item,index})=>{
            return(
              <View >
               <SelectionItem item={item} onSelect={()=>{}} onLongPress={()=>{setShowCheckbox(true)}} isCheckBox={showCheckbox}/>
              </View>
            )
           }}
          />
        </>
         )  :(
          <>
          <View style={styles.lottieView}>
          <LottieView style={styles.lottie} source={require('app/untils/animination/hearing.json')} autoPlay loop />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Your request to add cases has</Text>
          <Text style={styles.subText}>been recieved</Text>
        </View>
        <View style={styles.bottomTextView}>
          <Text style={styles.bottomText}>Your Account Manager Sonu - </Text>
          <Text style={styles.bottomSubText}>6203147160 will call you shortly to set up your account</Text>
        </View>
        <View>
          <HomeButton title='Add Case..' onPress={() => {setModalVisible(true)}} />
        </View>
        <ModalSheet
         isVisible={isModalVisible}
          onBackButtonPress={()=>{setModalVisible(false)}}
          onModalClose={closeModal}
           />
           </>
         )
      }
    
    </SafeAreaView>
  )
}

export default HomeView
