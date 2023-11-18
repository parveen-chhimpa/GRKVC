import { View, Text, SafeAreaView,Image} from 'react-native'
import React, { useEffect } from 'react'
import Styles from './SplashScreenStyle'
import { SplashLogo } from '../../Utils/Image'
import { heightToDp, widthToDp } from '../../Utils/Responsive'

export default function Splash_Screen(props) {

    useEffect(()=>{
        setTimeout(() => {
            props.navigation.replace('DashBoard')
        }, 2000);
    })
  return (
<SafeAreaView style={Styles.Container}>
<View style={Styles.MainView}>
    <View>
        <Image source={SplashLogo} style={Styles.Logo}/>
    </View>
<View style={Styles.TextView}>
    <Text style={Styles.Text}>Welcome To GRKVC</Text>
</View>
</View>
</SafeAreaView>
  )
}