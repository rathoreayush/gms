import React from 'react';
import {View, Text,Button} from 'react-native';
//import { useRoute } from '@react-navigation/native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

function ViewScreen() {
    // const route = useRoute();
    // const details = route.params;

    // console.warn(details);
  


    //export to pdf

    const exportToPDF = async () => {
        try {
          const options = {
            html: `
              <html>
                <body>
                  <h1 style='text-align:center'>Data</h1>
                  <p><strong>Name: Ayush</strong> </p>
                  <p><strong>Mobile Number: 6203147160</strong> </p>
                  <p><strong>Address: Muzaffarpur, Bihar</strong> </p>
                </body>
              </html>
            `,
            fileName: 'FormData',
            directory: 'Download',
          };
    
          const file = await RNHTMLtoPDF.convert(options);
          console.log('PDF file:', file.filePath);
          alert(file.filePath);
        } catch (error) {
          console.error('Error exporting to PDF:', error);
        }
      };

  return (
    <>
      <View style={{marginTop:30}}>
        <Text style={{fontSize:30}}>Name: Ayush Kumar 
            {/* {details.name} */}
            </Text>
        <Text style={{fontSize:30}}>Mobile Number: 6203147160
            {/* {details.mobileNumber} */}
            </Text>
        <Text style={{fontSize:30}}>Address: Muzaffarpur, Bihar
            {/* {details.address} */}
            </Text>
            <Button
        title="Export to PDF"
        onPress={exportToPDF}
      />
      </View>
    </>
  );
}

export default ViewScreen;
