import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function ART(props) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(234,233,215)' }}>
            <StatusBar backgroundColor={'#000'} />
            <View style={{ height: heightToDp('35'), backgroundColor: 'rgb(255,217,84)' }}>
                <View style={{ marginStart: widthToDp('4'), marginTop: heightToDp('2') }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <View>
                            <AntDesign name='arrowleft' size={30} color={'rgb(0,47,253)'} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginTop: heightToDp('2') }}>
                        <Text style={{ color: '#000', fontSize: widthToDp('5.5'), fontWeight: 'bold' }}>Explore Art Learning</Text>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <Text style={{ color: '#000', fontSize: widthToDp('4') }}>Explore digital textbooks,courses,videos and more on Accountancy</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: heightToDp('5') }}>
                        <View style={{ width: widthToDp('35'), height: heightToDp('7'), borderRadius: widthToDp('20'), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ width: widthToDp('25') }}>
                                <Text style={{ color: '#000', fontSize: widthToDp('3.8') }}>Explanation...</Text>
                            </View>
                            <View style={{ marginStart: widthToDp('2') }}>
                                <AntDesign name='caretdown' size={12} color={'#a9a9a9'} />
                            </View>
                        </View>
                        <View style={{ width: widthToDp('35'), height: heightToDp('7'), borderRadius: widthToDp('20'), marginStart: widthToDp('3'), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ width: widthToDp('23') }}>
                                <Text style={{ color: '#a9a9a9', fontSize: widthToDp('3.8') }}>Role</Text>
                            </View>
                            <View style={{ marginStart: widthToDp('1') }}>
                                <AntDesign name='caretdown' size={12} color={'#a9a9a9'} />
                            </View>
                        </View>
                        <View style={{ marginStart: widthToDp('5'), width: widthToDp('13'), borderRadius: widthToDp('5'), backgroundColor: 'rgb(255,227,118)', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name='sliders' size={25} color={'rgb(0,47,253)'} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, marginStart: widthToDp('2') }}>
                <ScrollView>
                    <View>
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={{ flexDirection: 'row', marginEnd: widthToDp('2') }}>
                                <View style={{ width: widthToDp('40'), marginTop: heightToDp('2'), height: heightToDp('6'), borderRadius: widthToDp('2'), backgroundColor: 'rgb(1,70,148)', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#fff' }}>Explanation Content</Text>
                                </View>
                                <View style={{ marginStart: widthToDp('4'), width: widthToDp('38'), marginTop: heightToDp('2'), height: heightToDp('6'), borderRadius: widthToDp('2'), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#000' }}>Learning Resource</Text>
                                </View>
                                <View style={{ marginStart: widthToDp('4'), width: widthToDp('40'), marginTop: heightToDp('2'), height: heightToDp('6'), borderRadius: widthToDp('2'), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#000' }}>Explanation Content</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View>
                        <View style={{ marginTop: heightToDp('2') }}>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: widthToDp('3.6') }}>Explanation Content</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: heightToDp('2') }}>
                            <View style={{ width: widthToDp('95'), height: heightToDp('25'), borderRadius: widthToDp('5'), backgroundColor: '#fff' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <View style={{ borderWidth: 1, marginTop: heightToDp('3'), width: widthToDp('40'), height: heightToDp('3.5'), backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: '#fff' }}>EXPLANATIONVIDEO</Text>
                                        </View>
                                        <View style={{ marginStart: widthToDp('4') }}>
                                            <View style={{ marginTop: heightToDp('1') }}>
                                                <Text style={{ color: '#000', fontSize: widthToDp('4.3') }}>ExplanationVideo</Text>
                                            </View>
                                            <View style={{ marginTop: heightToDp('1') }}>
                                                <Text style={{ color: '#000', fontSize: widthToDp('3.5') }}>Subject : Accountancy</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginTop: heightToDp('1.5') }}>
                                                <View style={{ width: widthToDp('15'), height: heightToDp('4'), borderRadius: widthToDp('2'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(219,245,232)' }}>
                                                    <Text style={{ fontSize: widthToDp('4'), color: 'rgb(22,129,83)' }}>CBSE</Text>
                                                </View>
                                                <View style={{ width: widthToDp('18'), height: heightToDp('4'), borderRadius: widthToDp('2'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('3'), backgroundColor: 'rgb(250,233,251)' }}>
                                                    <Text style={{ fontSize: widthToDp('4'), color: 'rgb(152,121,215)' }}>English</Text>
                                                </View>
                                                <View style={{ width: widthToDp('20'), height: heightToDp('4'), borderRadius: widthToDp('2'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('3'), backgroundColor: 'rgb(226,239,247)' }}>
                                                    <Text style={{ fontSize: widthToDp('4'), color: 'rgb(128,141,149)' }}>Class 12</Text>
                                                </View>
                                            </View>
                                            <View style={{ marginTop: heightToDp('1.5') }}>
                                                <Text style={{ color: '#000' }}>Published by : Rimple Nayyar</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ height: heightToDp('12'), width: widthToDp('15'), marginEnd: widthToDp('5'), borderRadius: widthToDp('3'), marginTop: heightToDp('2'), backgroundColor: 'rgb(204,204,204)' }}>

                                    </View>
                                </View>
                            </View>
                            <View style={{ width: widthToDp('95'), height: heightToDp('25'), borderRadius: widthToDp('5'), backgroundColor: '#fff', marginTop: heightToDp('2') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <View style={{ borderWidth: 1, marginTop: heightToDp('3'), width: widthToDp('40'), height: heightToDp('3.5'), backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: '#fff' }}>EXPLANATIONVIDEO</Text>
                                        </View>
                                        <View style={{ marginStart: widthToDp('4') }}>
                                            <View style={{ marginTop: heightToDp('1') }}>
                                                <Text style={{ color: '#000', fontSize: widthToDp('4.3') }}>ExplanationVideo</Text>
                                            </View>
                                            <View style={{ marginTop: heightToDp('1') }}>
                                                <Text style={{ color: '#000', fontSize: widthToDp('3.5') }}>Subject : Accountancy</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginTop: heightToDp('1.5') }}>
                                                <View style={{ width: widthToDp('15'), height: heightToDp('4'), borderRadius: widthToDp('2'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(219,245,232)' }}>
                                                    <Text style={{ fontSize: widthToDp('4'), color: 'rgb(22,129,83)' }}>CBSE</Text>
                                                </View>
                                                <View style={{ width: widthToDp('18'), height: heightToDp('4'), borderRadius: widthToDp('2'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('3'), backgroundColor: 'rgb(250,233,251)' }}>
                                                    <Text style={{ fontSize: widthToDp('4'), color: 'rgb(152,121,215)' }}>English</Text>
                                                </View>
                                                <View style={{ width: widthToDp('20'), height: heightToDp('4'), borderRadius: widthToDp('2'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('3'), backgroundColor: 'rgb(226,239,247)' }}>
                                                    <Text style={{ fontSize: widthToDp('4'), color: 'rgb(128,141,149)' }}>Class 12</Text>
                                                </View>
                                            </View>
                                            <View style={{ marginTop: heightToDp('1.5') }}>
                                                <Text style={{ color: '#000' }}>Published by : Rimple Nayyar</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ height: heightToDp('12'), width: widthToDp('15'), marginEnd: widthToDp('5'), borderRadius: widthToDp('3'), marginTop: heightToDp('2'), backgroundColor: 'rgb(204,204,204)' }}>

                                    </View>
                                </View>
                            </View>
                            <View style={{ width: widthToDp('95'), height: heightToDp('25'), borderRadius: widthToDp('5'), backgroundColor: '#fff', marginTop: heightToDp('2'), marginBottom: heightToDp('4') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <View style={{ borderWidth: 1, marginTop: heightToDp('3'), width: widthToDp('40'), height: heightToDp('3.5'), backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: '#fff' }}>EXPLANATIONVIDEO</Text>
                                        </View>
                                        <View style={{ marginStart: widthToDp('4') }}>
                                            <View style={{ marginTop: heightToDp('1') }}>
                                                <Text style={{ color: '#000', fontSize: widthToDp('4.3') }}>ExplanationVideo</Text>
                                            </View>
                                            <View style={{ marginTop: heightToDp('1') }}>
                                                <Text style={{ color: '#000', fontSize: widthToDp('3.5') }}>Subject : Accountancy</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginTop: heightToDp('1.5') }}>
                                                <View style={{ width: widthToDp('15'), height: heightToDp('4'), borderRadius: widthToDp('2'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(219,245,232)' }}>
                                                    <Text style={{ fontSize: widthToDp('4'), color: 'rgb(22,129,83)' }}>CBSE</Text>
                                                </View>
                                                <View style={{ width: widthToDp('18'), height: heightToDp('4'), borderRadius: widthToDp('2'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('3'), backgroundColor: 'rgb(250,233,251)' }}>
                                                    <Text style={{ fontSize: widthToDp('4'), color: 'rgb(152,121,215)' }}>English</Text>
                                                </View>
                                                <View style={{ width: widthToDp('20'), height: heightToDp('4'), borderRadius: widthToDp('2'), justifyContent: 'center', alignItems: 'center', marginStart: widthToDp('3'), backgroundColor: 'rgb(226,239,247)' }}>
                                                    <Text style={{ fontSize: widthToDp('4'), color: 'rgb(128,141,149)' }}>Class 12</Text>
                                                </View>
                                            </View>
                                            <View style={{ marginTop: heightToDp('1.5') }}>
                                                <Text style={{ color: '#000' }}>Published by : Rimple Nayyar</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ height: heightToDp('12'), width: widthToDp('15'), marginEnd: widthToDp('5'), borderRadius: widthToDp('3'), marginTop: heightToDp('2'), backgroundColor: 'rgb(204,204,204)' }}>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>

        </SafeAreaView>
    )
}