import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { MyGroupsLogo } from '../../Utils/Image'
export default function MyGroups() {
  return (
<SafeAreaView style={{flex:1,backgroundColor:'rgb(234,232,217)'}}>
<View style={{height:heightToDp('8'),backgroundColor:'rgb(255,217,84)',borderBottomStartRadius:widthToDp('8'),justifyContent:'center'}}>
<View style={{flexDirection:'row',marginStart:widthToDp('5'),marginEnd:widthToDp('5'),justifyContent:'space-between'}}>
<View>
<AntDesign name='arrowleft' size={30} color={'#000'} />
</View>
<View>
<AntDesign name='infocirlceo' size={25} color={'#000'} />
</View>
</View>
</View>
<View style={{marginStart:widthToDp('8'),marginTop:heightToDp('3')}}>
    <Text style={{fontSize:widthToDp('5'),color:'rgb(17,85,156)',fontWeight:'bold'}}>My groups</Text>
</View>
<View style={{alignItems:'center',marginTop:heightToDp('3')}}>
<View style={{width:widthToDp('88'),height:heightToDp('78'),borderRadius:widthToDp('3'),backgroundColor:'rgb(242,242,234)',alignItems:'center',justifyContent:'center'}}>
<View style={{marginTop:heightToDp('10')}}>
    <Image source={MyGroupsLogo} style={{height:heightToDp('25'),width:widthToDp('55')}} />
</View>
<View >
    <Text style={{color:'#000',textAlign:'center',fontSize:widthToDp('4.5')}}>The first step towards creating your{'\n'}own group,study circle or classroom{'\n'}is to log in</Text>
</View>
<View style={{width:widthToDp('80'),marginTop:heightToDp('20'),height:heightToDp('7'),borderRadius:widthToDp('6'),alignItems:'center',justifyContent:'center',backgroundColor:'rgb(2,79,157)'}}>
<Text style={{fontSize:widthToDp('4.5'),color:'#fff'}}>Login</Text>
</View>
</View>
</View>
</SafeAreaView>
  )
}