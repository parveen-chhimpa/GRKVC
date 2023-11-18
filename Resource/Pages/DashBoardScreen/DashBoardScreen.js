import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import { SplashLogo } from '../../Utils/Image'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function DashBoardScreen(props) {
    const [select,setSelect] = useState(0);

const Star = ()=>{
    setSelect(0)
}

    const Search = ()=>{
        setSelect(1);
    }

    const My = ()=>{
        setSelect(2)
    }
    const Wish = () =>{
        setSelect(3);
    }
    const Account = ()=>{
        setSelect(4)
    }
    return (
        <>


            <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
               <TouchableOpacity onPress={()=>props.navigation.navigate('Sign_In')}>
                                <View style={{ flexDirection: 'row-reverse', marginStart: widthToDp('7'), marginTop: heightToDp('2') }}>
                    <Text style={{ color: '#fff', fontSize: widthToDp('4.5') }}>SIGN IN</Text>
                </View>
               </TouchableOpacity>

                <ScrollView>
                    <View style={{ borderWidth: 1, borderColor: '#fff', marginTop: heightToDp('2'), height: heightToDp('25'), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={SplashLogo} style={{ height: heightToDp('20'), width: widthToDp('40') }} />
                    </View>

                    <View style={{ marginStart: widthToDp('5'), marginTop: heightToDp('2') }}>
                        <View>
                            <Text style={{ color: '#fff', fontSize: widthToDp('8') }}>Last day for these{'\n'}Savings!</Text>
                        </View>
                        <View style={{ marginTop: heightToDp('1') }}>
                            <Text style={{ color: '#fff' }}>Courses that meet today's Challenge(and{'\n'}tomorrow's).They start at just ₹649.Sale{'\n'}ends Sept,15</Text>
                        </View>
                        <View>
                            <View style={{ marginTop: heightToDp('2') }}>
                                <Text style={{ color: '#fff', fontSize: widthToDp('6') }}>Featured</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: heightToDp('1') }}>
                                <ScrollView horizontal={true}>


                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38'), marginStart: widthToDp('5') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38'), marginStart: widthToDp('5') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38'), marginStart: widthToDp('5') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38'), marginStart: widthToDp('5'), marginEnd: widthToDp('6') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: heightToDp('2') }}>
                                <Text style={{ color: '#fff', fontSize: widthToDp('6') }}>Categories</Text>
                            </View>
                            <ScrollView horizontal={true}>
                                <View>
                                    <View style={{ flexDirection: 'row', marginTop: heightToDp('1') }}>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('27'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: '#fff' }}>Development</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('27'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>IT & Software</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('35'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>Office Productivity</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('25'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>Design</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('25'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>Lifestyle</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('35'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>Health & Fitness</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('25'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('2'), marginEnd: widthToDp('20') }}>
                                                <Text style={{ color: '#fff' }}>Music</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: heightToDp('1') }}>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('27'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: '#fff' }}>Business</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('40'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>Finance & Accounting</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('42'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>Personal Development</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('27'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>Marketing</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('40'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>Photography & Video</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('42'), height: heightToDp('6.5'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>Teaching & Academics</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </ScrollView>
                        </View>
                        <View>
                            <View style={{ marginTop: heightToDp('6'), flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: widthToDp('6') }}>Top Courses in</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: 'rgb(219,143,23)', fontSize: widthToDp('6'), paddingStart: widthToDp('2') }}>Design</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: heightToDp('1') }}>
                                <ScrollView horizontal={true}>


                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38'), marginStart: widthToDp('5') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38'), marginStart: widthToDp('5') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38'), marginStart: widthToDp('5') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38'), marginStart: widthToDp('5'), marginEnd: widthToDp('6') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: heightToDp('6'), flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: widthToDp('6') }}>Top Courses in</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: 'rgb(219,143,23)', fontSize: widthToDp('6'), paddingStart: widthToDp('2') }}>Business</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: heightToDp('1') }}>
                                <ScrollView horizontal={true}>


                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38'), marginStart: widthToDp('5') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38'), marginStart: widthToDp('5') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38'), marginStart: widthToDp('5') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ borderColor: '#fff', width: widthToDp('55'), height: heightToDp('38'), marginStart: widthToDp('5'), marginEnd: widthToDp('6') }}>
                                        <View style={{ width: widthToDp('55'), height: heightToDp('15'), backgroundColor: '#fff' }}>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4.3') }}>How to Create an Awesome{'\n'}Online Course</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.5') }}>
                                            <Text style={{ color: '#fff' }}>Miguel Hernandez</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('1'), flexDirection: 'row' }}>
                                            <View>
                                                <Text style={{ color: '#fff' }}>4.6</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginStart: widthToDp('2') }}>
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                                <Entypo name='star' size={15} color={'#fff'} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('2') }}>
                                                <Text style={{ color: '#fff' }}>(2,166)</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#fff', fontSize: widthToDp('4') }}>₹649.00</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ borderWidth: 1, borderColor: '#fff', width: widthToDp('20'), height: heightToDp('4.5'), marginTop: heightToDp('1'), borderRadius: widthToDp('1.5'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(236,235,152)' }}>
                                                <Text style={{ color: '#000' }}>Bestseller</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <View style={{ height: heightToDp('7'), backgroundColor: '#000' }}>
                <View style={{ flexDirection: 'row', marginStart: widthToDp('1'), marginEnd: widthToDp('2'), marginTop: heightToDp('0.5') }}>
                    <TouchableOpacity onPress={()=>Star()}>
                                         <View>
                        <View style={{ alignItems: 'center' }}>
                            {select==0?
                            <AntDesign name='star' size={25} color={'#fff'} />:
                            <AntDesign name='staro' size={25} color={'rgb(145,145,145)'} />}
                            
                        </View>
                        <View style={{ marginTop: heightToDp('0.5') }}>
                            {select==0?
                             <Text style={{ color: '#fff', fontSize: widthToDp('3.2'), fontWeight: 'bold' }}>Featured</Text>:
                             <Text style={{ color: 'rgb(145,145,145)', fontSize: widthToDp('3.2'), fontWeight: 'bold' }}>Featured</Text>}
                           
                        </View>
                    </View>   
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>Search()}>
                        <View style={{ marginStart: widthToDp('7') }}>
                        <View style={{ alignItems: 'center' }}>
                            <Feather name='search' size={25} color={select==1?'#fff':'rgb(145,145,145)'} />
                        </View>
                        <View style={{ marginTop: heightToDp('0.5') }}>
                            <Text style={{ color:select==1?'#fff':'rgb(145,145,145)', fontSize: widthToDp('3.2'), fontWeight: 'bold' }}>Search</Text>
                        </View>
                    </View>  
                    </TouchableOpacity>
<TouchableOpacity onPress={()=>My()}>
                        <View style={{ marginStart: widthToDp('7') }}>
                        <View style={{ alignItems: 'center' }}>
                            {select==2?<AntDesign name='play' size={25} color={'#fff'} />:
                            <AntDesign name='playcircleo' size={25} color={'rgb(145,145,145)'} />}
                            
                        </View>
                        <View style={{ marginTop: heightToDp('0.5') }}>
                            <Text style={{ color:select==2?'#fff':'rgb(145,145,145)', fontSize: widthToDp('3.2'), fontWeight: 'bold' }}>My Learning</Text>
                        </View>
                    </View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>Wish()}>
                        <View style={{ marginStart: widthToDp('7') }}>
                        <View style={{ alignItems: 'center' }}>
                            {select==3?<AntDesign name='heart' size={25} color={'#fff'} />:
                            <AntDesign name='hearto' size={25} color={'rgb(145,145,145)'} />
                            }
                            
                        </View>
                        <View style={{ marginTop: heightToDp('0.5') }}>
                            <Text style={{ color:select==3?'#fff':'rgb(145,145,145)', fontSize: widthToDp('3.2'), fontWeight: 'bold' }}>WishList</Text>
                        </View>
                    </View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>Account()}>
                        <View style={{ marginStart: widthToDp('7') }}>
                        <View style={{ alignItems: 'center' }}>
                            {select==4?<FontAwesome name='user-circle' size={25} color={'#fff'} />:
                            <FontAwesome name='user-circle-o' size={25} color={'rgb(145,145,145)'} />}
                            
                        </View>
                        <View style={{ marginTop: heightToDp('0.5') }}>
                            <Text style={{ color:select==4?'#fff':'rgb(145,145,145)', fontSize: widthToDp('3.2'), fontWeight: 'bold' }}>Account</Text>
                        </View>
                    </View>
</TouchableOpacity>

                </View>
            </View>
        </>
    )
}