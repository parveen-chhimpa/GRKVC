import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {heightToDp,widthToDp} from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function Notification(props) {
  return (
  <SafeAreaView style={{flex:1,backgroundColor:'rgb(234,232,217)'}}>
<View style={{height:heightToDp('8'),backgroundColor:'rgb(255,217,84)',borderBottomStartRadius:widthToDp('8'),justifyContent:'center'}}>
<View style={{flexDirection:'row',marginStart:widthToDp('5'),marginEnd:widthToDp('5'),justifyContent:'space-between'}}>
<TouchableOpacity onPress={()=>props.navigation.goBack() }>
 <View>
<AntDesign name='arrowleft' size={30} color={'#000'} />
</View>   
</TouchableOpacity>

</View>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('7')}}>
<View style={{width:widthToDp('30'),height:heightToDp('15'),borderRadius:widthToDp('20'),backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
<FontAwesome name='bell-slash-o' size={45} color={'#a9a9a9'} />
</View>
<View style={{marginTop:heightToDp('2')}}>
    <Text style={{color:'#000',fontSize:widthToDp('4.5')}}>No new notification</Text>
</View>
</View>
  </SafeAreaView>
  )
}