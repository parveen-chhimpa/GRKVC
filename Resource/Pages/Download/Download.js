import { View, Text, SafeAreaView,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {heightToDp,widthToDp} from '../../Utils/Responsive'
import {DownloadLogo, Scaner} from '../../Utils/Image'
export default function Download(props) {
  return (
    <>
<SafeAreaView style={{flex:1,backgroundColor:'rgb(234,232,217)'}}>
<View style={{height:heightToDp('6'),backgroundColor:'rgb(255,217,84)',justifyContent:'center'}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginStart:widthToDp('5'),marginEnd:widthToDp('5')}}>
<View>
     <AntDesign name='menuunfold' size={25} color={'#000'} />
    </View>
<View>
     <Ionicons name='settings' size={25} color={'rgb(12,90,164)'} />
    </View>
</View>
</View>
<View style={{height:heightToDp('10'),backgroundColor:'rgb(2,79,157)',borderBottomStartRadius:widthToDp('4'),borderBottomEndRadius:widthToDp('4')}}>
<View style={{marginStart:widthToDp('2'),marginTop:heightToDp('1.5')}}>
    <Text style={{color:'#fff',fontSize:widthToDp('4.5'),fontWeight:'bold'}}>Downloads</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginStart:widthToDp('2'),marginTop:heightToDp('1'),marginEnd:widthToDp('3')}}>
<View>
<Text style={{color:'#fff'}}>Space taken by GRKVC: 0.00 KB</Text>
</View>
<View>
<Text style={{color:'#fff'}}>Available: 7.24 GB</Text>
</View>
</View>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('5')}}>
    <View>
          <Image source={DownloadLogo} style={{height:heightToDp('20'),width:widthToDp('30')}} />  
    </View>
<View>
    <Text style={{color:'#000',fontWeight:'bold',fontSize:widthToDp('4')}}>No downloads yet</Text>
</View>
<View style={{marginTop:heightToDp('2')}}>
    <Text style={{color:'#000',fontSize:widthToDp('4')}}>Download content from Courses or Library</Text>
</View>
</View>
</SafeAreaView>
<View style={{height:heightToDp('7'),backgroundColor:'#fff',borderColor:'rgb(243,228,99)',borderWidth:1,justifyContent:'center'}}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<TouchableOpacity onPress={()=>props.navigation.navigate('Student')}>
  <View style={{marginStart:widthToDp('4')}}>
<Entypo name='home' size={25}  color={'#000'} />
</View>  
</TouchableOpacity>

<View style={{marginStart:widthToDp('10')}}>
<SimpleLineIcons name='graduation' size={25}  color={'#000'} />
</View>
<TouchableOpacity onPress={()=>props.navigation.navigate('QR')}>
<View style={{marginStart:widthToDp('13')}}>
<Image source={Scaner} style={{height:heightToDp('10'),width:widthToDp('20'),bottom:heightToDp('3.5')}} />
</View>
</TouchableOpacity>
<TouchableOpacity >
   <View style={{marginStart:widthToDp('10')}}>
<MaterialIcons name='archive' size={25}  color={'rgb(178,32,217)'} />
</View> 
</TouchableOpacity>

<TouchableOpacity onPress={()=>props.navigation.navigate('Profile')}>
  <View style={{marginStart:widthToDp('10')}}>
<FontAwesome5 name='user-alt' size={25}  color={'#000'} />
</View>
</TouchableOpacity>

</View>
</View>
</>
  )
}