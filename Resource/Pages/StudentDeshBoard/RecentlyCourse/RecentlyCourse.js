import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Student } from '../../../Utils/Image'
export default function RecentlyCourse(props) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: heightToDp('8'), backgroundColor: 'rgb(255,217,84)', justifyContent: 'center' }}>
                <View style={{ marginStart: widthToDp('2') }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Student')}>
                        <View>
                            <AntDesign name='arrowleft' size={30} color={'#000'} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center', marginTop: heightToDp('1') }}>
                    <View style={{ width: widthToDp('95'), height: heightToDp('45'), borderRadius: widthToDp('6'), backgroundColor: '#fff' }}>
                        <View style={{marginStart:widthToDp('4')}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: heightToDp('2') }}>
                                <View>
                                    <Text style={{ color: '#000', fontSize: widthToDp('5'),fontWeight:'bold' }}>Competency-based Education-{'\n'}Module 4</Text>
                                </View>
                                <View>
                                    <Image source={Student} style={{ height: heightToDp('7.5'), width: widthToDp('15') }} />
                                </View>
                            </View>
                            <View>
                                <Text style={{color:'#000'}}>By Partner Content Creator</Text>
                            </View>
                            <View style={{marginTop:heightToDp('0.7')}}>
                                <Text style={{color:'#000'}}>English  Class 1,Class 2,Class 3,Class 4</Text>
                            </View>
                            <View style={{marginTop:heightToDp('0.7')}}>
                                <Text style={{color:'#000'}}>Class 5,Class 6,Class 7,Class 8,Class 9</Text>
                            </View>
                            <View style={{marginTop:heightToDp('0.7')}}>
                                <Text style={{color:'#000'}}>Class 10,Class 11,Class 12, CBSE</Text>
                            </View>
                            <View style={{marginTop:heightToDp('0.7')}}>
                                <Text style={{color:'#000'}}>Training</Text>
                            </View>
                        </View>


                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}