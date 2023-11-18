import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {heightToDp,widthToDp} from '../../Utils/Responsive'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Office, Parent, Student, Teacher} from '../../Utils/Image'
export default function SignIn(props) {

    const StudentDash = ()=>{
        setTimeout(() => {
            props.navigation.navigate('Student') 
        }, 2000);

    }
  return (
<SafeAreaView style={{flex:1}}>
<View style={{height:heightToDp('30'),backgroundColor:'rgb(255,217,85)',borderBottomStartRadius:widthToDp('20')}}>
 <View style={{marginStart:widthToDp('8'),marginTop:heightToDp('1.5')}}>
<FontAwesome  name='arrow-left' size={30} color={'#000'} />
 </View>
 <View style={{alignItems:'center'}}>
    <Text style={{color:'rgb(20,83,124)',fontSize:widthToDp('6.5'),fontWeight:'bold'}}>Welcome To GRKVC</Text>
    <Text style={{fontSize:widthToDp('6'),color:'#000'}}>Diccover content as a</Text>
 </View>
</View>
<View style={{alignItems:'center'}}>
<View style={{flexWrap:'wrap',marginStart:widthToDp('6'),flexDirection:'row',bottom:heightToDp('15')}}>
<TouchableOpacity onPress={()=>props.navigation.navigate('Teacher')}>
<View style={{width:widthToDp('43'),height:heightToDp('34'),backgroundColor:'#fff',borderRadius:widthToDp('5'),justifyContent:'center',alignItems:'center',elevation:5}}>
 <View >
<Image source={Teacher} style={{height:heightToDp('18'),width:widthToDp('36')}} />
 </View>
 <View style={{marginTop:heightToDp('1')}}>
    <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Teacher</Text>
 </View>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>StudentDash()}
activeOpacity={0.9}
>
  <View style={{width:widthToDp('43'),height:heightToDp('34'),marginStart:widthToDp('4'),backgroundColor:'#fff',borderRadius:widthToDp('5'),justifyContent:'center',alignItems:'center',elevation:5}}>
<View >
<Image source={Student} style={{height:heightToDp('18'),width:widthToDp('36')}} />
 </View>
 <View style={{marginTop:heightToDp('1')}}>
    <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Student</Text>
 </View>
</View>  
</TouchableOpacity>

<View style={{width:widthToDp('43'),height:heightToDp('34'),backgroundColor:'#fff',borderRadius:widthToDp('5'),marginTop:heightToDp('2'),justifyContent:'center',alignItems:'center',elevation:5}}>
<View >
<Image source={Office} style={{height:heightToDp('18'),width:widthToDp('36')}} />
 </View>
 <View style={{marginTop:heightToDp('1')}}>
    <Text style={{color:'#000',fontSize:widthToDp('5.5'),textAlign:'center'}}>HT &{'\n'}Officials</Text>
 </View>
</View>
<View style={{width:widthToDp('43'),height:heightToDp('34'),marginStart:widthToDp('4'),backgroundColor:'#fff',borderRadius:widthToDp('5'),marginTop:heightToDp('2'),justifyContent:'center',alignItems:'center',elevation:5}}>
<View >
<Image source={Parent} style={{height:heightToDp('18'),width:widthToDp('36')}} />
 </View>
 <View style={{marginTop:heightToDp('1')}}>
    <Text style={{color:'#000',fontSize:widthToDp('5.5')}}>Parent</Text>
 </View>
</View>
</View>
<View >
    <TouchableOpacity>
       <View style={{width:widthToDp('55'),height:heightToDp('7'),bottom:heightToDp('11'),borderRadius:widthToDp('20'),justifyContent:'center',alignItems:'center',backgroundColor:'rgb(0,69,144)'}}>
<Text style={{color:'#fff',fontSize:widthToDp('4.5'),fontWeight:'bold'}}>Continue Without Login</Text>
</View>    
    </TouchableOpacity>
 
</View>
</View>

</SafeAreaView>
  )
}