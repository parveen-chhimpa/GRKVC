import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { DashBoardLogo, SplashLogo } from '../../Utils/Image'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function MenuContent(props) {
  return (
    <>

<SafeAreaView style={{flex:1}}>
<View style={{height:heightToDp('8'),backgroundColor:'rgb(255,217,84)',borderBottomStartRadius:widthToDp('8')}}>
<View style={{flexDirection:'row',marginStart:widthToDp('4'),alignItems:'center'}}>
<View>
    <Image source={DashBoardLogo} style={{height:heightToDp('5'),width:widthToDp('10'),borderRadius:widthToDp('20')}} />
</View>
<View style={{marginStart:widthToDp('3')}}>
    <Text style={{color:'#000',fontSize:widthToDp('5')}}>GRKVC</Text>
</View>
</View>
</View>
<View>
    <TouchableOpacity onPress={()=>props.navigation.navigate('My_Groups')}>
        <View style={{flexDirection:'row',marginTop:heightToDp('3'),marginStart:widthToDp('3'),alignItems:'center'}}>
  <View>
    <FontAwesome name='group' size={20} color={'rgb(23,84,151)'} />
  </View>
  <View style={{marginStart:widthToDp('2')}}>
    <Text style={{color:'#000',fontSize:widthToDp('3.5')}}>My groups</Text>
  </View>
    </View>    
    </TouchableOpacity>
<TouchableOpacity>
        <View style={{flexDirection:'row',marginTop:heightToDp('4'),marginStart:widthToDp('3'),alignItems:'center'}}>
  <View>
    <MaterialCommunityIcons name='toggle-switch-outline' size={20} color={'rgb(23,84,151)'} />
  </View>
  <View style={{marginStart:widthToDp('2')}}>
    <Text style={{color:'#000',fontSize:widthToDp('3.5')}}>Switch to classic GRKVC experience</Text>
  </View>
    </View>
</TouchableOpacity>
<TouchableOpacity>
<View style={{flexDirection:'row',marginTop:heightToDp('4'),marginStart:widthToDp('3'),alignItems:'center'}}>
  <View>
    <MaterialCommunityIcons name='circle-half-full' size={20} color={'rgb(23,84,151)'} />
  </View>
  <View style={{marginStart:widthToDp('2')}}>
    <Text style={{color:'#000',fontSize:widthToDp('3.5')}}>Switch to dark mode</Text>
  </View>
    </View>
</TouchableOpacity>
<TouchableOpacity>
<View style={{flexDirection:'row',marginTop:heightToDp('4'),marginStart:widthToDp('3'),alignItems:'center'}}>
  <View>
    <FontAwesome name='group' size={20} color={'rgb(23,84,151)'} />
  </View>
  <View style={{marginStart:widthToDp('2')}}>
    <Text style={{color:'#000',fontSize:widthToDp('3.5')}}>Import Content</Text>
  </View>
    </View>
</TouchableOpacity>
<TouchableOpacity>
<View style={{flexDirection:'row',marginTop:heightToDp('4'),marginStart:widthToDp('3'),alignItems:'center'}}>
  <View>
    <Ionicons name='md-settings-outline' size={20} color={'rgb(23,84,151)'} />
  </View>
  <View style={{marginStart:widthToDp('2')}}>
    <Text style={{color:'#000',fontSize:widthToDp('3.5')}}>Settings</Text>
  </View>
    </View>
</TouchableOpacity>
<TouchableOpacity>
<View style={{flexDirection:'row',marginTop:heightToDp('4'),marginStart:widthToDp('3'),alignItems:'center'}}>
  <View>
    <AntDesign name='questioncircleo' size={20} color={'rgb(23,84,151)'} />
  </View>
  <View style={{marginStart:widthToDp('2')}}>
    <Text style={{color:'#000',fontSize:widthToDp('3.5')}}>Help</Text>
  </View>
    </View>
</TouchableOpacity>
<TouchableOpacity>
<View style={{flexDirection:'row',marginTop:heightToDp('4'),marginStart:widthToDp('3'),alignItems:'center'}}>
  <View>
    <SimpleLineIcons name='login' size={20} color={'rgb(23,84,151)'} />
  </View>
  <View style={{marginStart:widthToDp('2')}}>
    <Text style={{color:'#000',fontSize:widthToDp('3.5')}}>Login</Text>
  </View>
    </View>
</TouchableOpacity>
</View>
</SafeAreaView>
<View style={{height:heightToDp('15'),backgroundColor:'rgb(234,232,217)',borderTopStartRadius:widthToDp('5'),borderTopEndRadius:widthToDp('5'),justifyContent:'center'}}>
<View style={{marginStart:widthToDp('5')}}>
<Text>Version 5.0.1044.124</Text>
</View>

</View>
</>
  )
}