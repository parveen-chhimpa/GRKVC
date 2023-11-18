import { View, Text, SafeAreaView,Image,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {heightToDp,widthToDp} from '../../Utils/Responsive'
import {DownloadLogo, Scaner, UserLogo} from '../../Utils/Image'
export default function Profile(props) {
  return (
    <>
<SafeAreaView style={{flex:1,backgroundColor:'rgb(234,232,217)'}}>
  <View style={{height:heightToDp('22'),backgroundColor:'rgb(255,217,84)'}}>
<View style={{marginStart:widthToDp('5'),marginTop:heightToDp('2')}}>
<AntDesign name='menuunfold' size={30} color={'#000'} />
</View>
<View style={{alignItems:'center'}}>
  <View style={{width:widthToDp('24'),height:heightToDp('12'),borderRadius:widthToDp('20'),backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
    <Image source={UserLogo} style={{height:heightToDp('8'),width:widthToDp('16')}} />
  </View>
  <View style={{marginTop:heightToDp('0.5'),flexDirection:'row'}}>
    <View style={{marginStart:widthToDp('3')}}>
    <Text style={{fontSize:widthToDp('4.5'),color:'#000'}}>XYZ</Text>
    </View>
   <View style={{justifyContent:'center',marginStart:widthToDp('2')}}>
    <Feather name='edit' size={13} color={'rgb(130,152,175)'} />
   </View>
  </View>
</View>
</View>
<ScrollView>
<View style={{flex:1}}>
<View style={{marginTop:heightToDp('2'),height:heightToDp('48'),alignItems:'center',backgroundColor:'#fff'}}>
<View style={{marginTop:heightToDp('1')}}>
<Text style={{fontSize:widthToDp('5.5'),color:'#000',fontWeight:'bold'}}>Content preference</Text>
</View>
<View style={{width:widthToDp('90'),height:heightToDp('25'),borderRadius:widthToDp('3'),backgroundColor:'rgb(239,248,255)',marginTop:heightToDp('2')}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginStart:widthToDp('5'),marginEnd:widthToDp('6'),marginTop:heightToDp('1')}}>
<View>
  <Text style={{color:'#000',fontSize:widthToDp('4')}}>ROLE</Text>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <View>
     <Text style={{fontWeight:'bold',color:'#000',fontSize:widthToDp('4')}}>Student</Text> 
  </View>
  <View style={{marginStart:widthToDp('2')}}>
      <Feather name='edit' size={13} color={'rgb(116,155,224)'} />
  </View>
</View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginStart:widthToDp('5'),marginEnd:widthToDp('6'),marginTop:heightToDp('1.5')}}>
<View>
  <Text style={{color:'#000',fontSize:widthToDp('4')}}>BOARD</Text>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <View>
     <Text style={{fontWeight:'bold',color:'#000',fontSize:widthToDp('4')}}>CBSE/NCERT</Text> 
  </View>
  <View style={{marginStart:widthToDp('2')}}>
      <Feather name='edit' size={13} color={'rgb(116,155,224)'} />
  </View>
</View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginStart:widthToDp('5'),marginEnd:widthToDp('6'),marginTop:heightToDp('1.5')}}>
<View>
  <Text style={{color:'#000',fontSize:widthToDp('4')}}>MEDIUM</Text>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <View>
     <Text style={{fontWeight:'bold',color:'#000',fontSize:widthToDp('4')}}>English</Text> 
  </View>
  <View style={{marginStart:widthToDp('2')}}>
      <Feather name='edit' size={13} color={'rgb(116,155,224)'} />
  </View>
</View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginStart:widthToDp('5'),marginEnd:widthToDp('6'),marginTop:heightToDp('1.5')}}>
<View>
  <Text style={{color:'#000',fontSize:widthToDp('4')}}>CLASS</Text>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <View>
     <Text style={{fontWeight:'bold',color:'#000',fontSize:widthToDp('4')}}>Class 12</Text> 
  </View>
  <View style={{marginStart:widthToDp('2')}}>
      <Feather name='edit' size={13} color={'rgb(116,155,224)'} />
  </View>
</View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginStart:widthToDp('5'),marginEnd:widthToDp('6'),marginTop:heightToDp('1.5')}}>
<View>
  <Text style={{color:'#000',fontSize:widthToDp('4')}}>SUBJECT</Text>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <View>
     <Text style={{fontWeight:'bold',color:'#000',fontSize:widthToDp('5')}}>Add</Text> 
  </View>
</View>
</View>
</View>
<View style={{width:widthToDp('90'),height:heightToDp('12'),borderRadius:widthToDp('3'),backgroundColor:'rgb(239,248,255)',marginTop:heightToDp('2')}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginStart:widthToDp('5'),marginEnd:widthToDp('6'),marginTop:heightToDp('1')}}>
<View>
  <Text style={{color:'#000',fontSize:widthToDp('4')}}>DISTRICT</Text>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <View>
     <Text style={{fontWeight:'bold',color:'#000',fontSize:widthToDp('4')}}>Patiala</Text> 
  </View>
  <View style={{marginStart:widthToDp('2')}}>
      <Feather name='edit' size={13} color={'rgb(116,155,224)'} />
  </View>
</View>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginStart:widthToDp('5'),marginEnd:widthToDp('6'),marginTop:heightToDp('1.5')}}>
<View>
  <Text style={{color:'#000',fontSize:widthToDp('4')}}>STATE</Text>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
  <View>
     <Text style={{fontWeight:'bold',color:'#000',fontSize:widthToDp('4')}}>Punjab</Text> 
  </View>
  <View style={{marginStart:widthToDp('2')}}>
      <Feather name='edit' size={13} color={'rgb(116,155,224)'} />
  </View>
</View>
</View>
</View>
</View>
<View style={{alignItems:'center',marginBottom:heightToDp('5')}}>
<View style={{marginTop:heightToDp('2'),width:widthToDp('95'),height:heightToDp('20'),borderRadius:widthToDp('4'),alignItems:'center',backgroundColor:'#fff'}}>
<View style={{marginTop:heightToDp('2')}}>
<Text style={{color:'#000',fontSize:widthToDp('4.5'),fontWeight:'bold'}}>Get unlimited access to GRKVC</Text>
</View>
<View style={{marginTop:heightToDp('2')}}>
<Text style={{color:'#000',fontSize:widthToDp('3.7')}}>Login to access all the features</Text>
</View>
<View style={{width:widthToDp('80'),height:heightToDp('5'),marginTop:heightToDp('2.5'),borderRadius:widthToDp('20'),backgroundColor:'rgb(0,69,144)',justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'#fff',fontSize:widthToDp('5')}}>LOGIN</Text>
</View>
</View>
</View>
</View>
</ScrollView>
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
<TouchableOpacity onPress={()=>props.navigation.navigate('Download')}>
   <View style={{marginStart:widthToDp('10')}}>
<MaterialIcons name='archive' size={25}  color={'#000'} />
</View> 
</TouchableOpacity>

<TouchableOpacity onPress={()=>props.navigation.navigate('Profile')}>
  <View style={{marginStart:widthToDp('10')}}>
<FontAwesome5 name='user-alt' size={25}  color={'rgb(114,120,254)'} />
</View>
</TouchableOpacity>

</View>
</View>
</>
  )
}