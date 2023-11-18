import {StyleSheet} from 'react-native'
import {heightToDp,widthToDp} from '../../Utils/Responsive'

const Styles = StyleSheet.create({
Container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
},
MainView:{

    alignItems:'center'
},
Logo:{
    height:heightToDp('28'),
    width:widthToDp('58')
},
TextView:{
    marginTop:heightToDp('2')
},
Text:{
    color:'#000',
    fontSize:widthToDp('5.5'),
    fontWeight:'bold'
},
});

export default Styles;