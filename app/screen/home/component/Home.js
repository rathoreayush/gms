import SearchBar from 'component/searchbar/SearchBar';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, Image, } from 'react-native';
import Calender from 'app/untils/images/mics/calendar.svg'
import styles from './Style';
import LottieView from 'lottie-react-native';
import HomeButton from 'component/homebutton/Button';
import ModalSheet from 'component/modal/ModalSheet';
import caseData from 'untils/data/Casedata';
import SelectionItem from 'component/selectionItem/SelectionItem';

const HomeView = () => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [isHearingData, setHearingData] = useState([]);
  const [showCheckbox, setShowCheckbox] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (caseData.length === 0) {
      isDataNotAvailble();
    } else {
      const updateData = caseData.map(item => ({ ...item, isSelected: false }));
      setHearingData(updateData);
    }
  }, [])

  //check data is not avaiable
  const isDataNotAvailble = () => {
    setHearingData();
    setShowCheckbox(false);
  }
  //onSeaerch
  const onSearch = (text) => {
    if (typeof text === 'string') {
      // Filter the data based on the search term
      const filtered = caseData.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  //onSelect function
  const onSelect = (ind) => {
    let temp = isHearingData;
    temp.map((item, index) => {
      if (index == ind) {
        item.isSelected = !item.isSelected;
      }
    });
    let tempData = [];
    temp.map(item => {
      tempData.push(item);
    });
    setHearingData(tempData);
  }

  //clear All function
  const clearAll = () => {
    let temp = isHearingData;
    temp.map((item, index) => {

      item.isSelected = false;

    });
    let tempData = [];
    temp.map(item => {
      tempData.push(item);
    });
    setHearingData(tempData);
  }

  //select All function
  const selectAll = () => {
    let temp = isHearingData;
    temp.map((item, index) => {

      item.isSelected = true;

    });
    let tempData = [];
    temp.map(item => {
      tempData.push(item);
    });
    setHearingData(tempData);
  }
  // Delete function
  const onDelete = () => {
    const updatedData = isHearingData.filter(item => !item.isSelected);
    setHearingData(updatedData);
    setShowCheckbox(true); // Reset showCheckbox state
  };


  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.searchContainer}>
        <View style={styles.searchView}>
          <SearchBar
            placeholder="Party, Court Name, Judges"
            onSearch={onSearch}
          />
        </View>
        <TouchableOpacity>
          <Calender width={50} height={40} />
        </TouchableOpacity>
      </View>
      {
        showCheckbox ?
          <View style={styles.selectAllContainer}>
            <TouchableOpacity style={styles.imageContainer} onPress={() => {
              setShowCheckbox(false)
              clearAll()
            }}>
              <Image
                source={require('app/untils/images/logo/cancel.png')}
                style={styles.selectAllImage}
              />
            </TouchableOpacity>

            <Text style={styles.selectAllText} onPress={() => selectAll()}>Select All</Text>
            <Text style={styles.selectAllText} onPress={() => onDelete()}>Delete</Text>

          </View>
          : null
      }
      {
        isHearingData ? (

          <>
            <FlatList style={{ marginTop: 10 }}
              data={isHearingData} renderItem={({ item, index }) => {
                return (
                  <View >
                    <SelectionItem item={item} onSelect={() => { onSelect(index) }} onLongPress={() => {
                      console.log("log press");
                      if (showCheckbox) {
                        setShowCheckbox(false);
                        clearAll()
                      }
                      else {
                        setShowCheckbox(true);
                      }

                    }}


                      isCheckbox={showCheckbox} />
                  </View>
                )
              }}
            />
          </>
        ) : (
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
              <HomeButton title='Add Case..' onPress={() => { setModalVisible(true) }} />
            </View>
            <ModalSheet
              isVisible={isModalVisible}
              onBackButtonPress={() => { setModalVisible(false) }}
              onModalClose={closeModal}
            />
          </>
        )
      }

    </SafeAreaView>
  )
}

export default HomeView
