import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Education, Office, Parent, Scaner, Student } from '../../Utils/Image'
export default function StudentDashBoard(props) {
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(243,246,251)' }}>
                <StatusBar backgroundColor={'rgb(255,217,84)'} />
                <View style={{ height: heightToDp('21'), backgroundColor: 'rgb(255,217,84)', borderBottomStartRadius: widthToDp('12') }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: heightToDp('4'), marginEnd: widthToDp('4'), marginTop: heightToDp('2') }}>
                        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                            <View>
                                <AntDesign name='menuunfold' size={25} color={'#000'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Notification')}>
                            <View>
                                <Fontisto name='bell' size={25} color={'#000'} />
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: heightToDp('2'), marginStart: widthToDp('7') }}>
                        <View>
                            <Text style={{ fontSize: widthToDp('6'), color: '#000', fontWeight: 'bold' }}>Hi XYZ</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ marginTop: heightToDp('1') }}>
                                <Text style={{ color: '#000' }}>Your Preferences</Text>
                            </View>
                            <View style={{ top: heightToDp('2'), marginEnd: widthToDp('8'), width: widthToDp('18'), height: heightToDp('3.5'), borderRadius: widthToDp('15'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                <Text style={{ color: '#000' }}>Change</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: heightToDp('1') }}>
                            <Text style={{ color: '#000', fontSize: widthToDp('4') }}>CBSE.English.Class 12</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ marginStart: widthToDp('3'), marginTop: heightToDp('2') }}>
                        <View>
                            <View>
                                <Text style={{ color: '#000', fontSize: widthToDp('4') }}>My learning</Text>
                            </View>
                            <View style={{ width: widthToDp('65'), height: heightToDp('14'), borderRadius: widthToDp('2'), marginTop: heightToDp('2'), backgroundColor: '#fff' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ marginStart: widthToDp('3'), width: widthToDp('45'), marginTop: heightToDp('2') }}>
                                        <View>
                                            <Text style={{ color: '#000' }}>(2022)_Introduction</Text>
                                        </View>
                                        <View>
                                            <Text style={{ color: '#000' }}>to Tuberculosis</Text>
                                        </View>
                                        <View style={{ marginTop: heightToDp('0.7') }}>
                                            <Text style={{ color: '#000', fontSize: widthToDp('3.5') }}>By:iGOT</Text>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'center', height: heightToDp('14') }}>
                                        <Image source={Student} style={{ height: heightToDp('7.5'), width: widthToDp('15') }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ marginTop: heightToDp('2') }}>
                                <Text style={{ color: '#000', fontSize: widthToDp('4') }}>Featured</Text>
                            </View>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{ flexDirection: 'row', marginEnd: widthToDp('3') }}>
                                    <View style={{ width: widthToDp('70'), height: heightToDp('15'), borderRadius: widthToDp('2'), marginTop: heightToDp('2'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                        <Image source={Education} style={{ width: widthToDp('50'), height: heightToDp('14') }} />
                                    </View>
                                    <View style={{ width: widthToDp('70'), height: heightToDp('15'), borderRadius: widthToDp('2'), marginTop: heightToDp('2'), marginStart: widthToDp('5'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                                        <Image source={Education} style={{ width: widthToDp('50'), height: heightToDp('14') }} />
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        <View>
                            <View style={{ marginTop: heightToDp('2') }}>
                                <Text style={{ color: '#000', fontSize: widthToDp('3.7') }}>Brouse by category</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: heightToDp('4') }}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Course')}>
                                    <View style={{ width: widthToDp('20'), height: heightToDp('15'), backgroundColor: 'rgb(253,253,253)', alignItems: 'center', borderRadius: widthToDp('2') }}>
                                        <View style={{ width: widthToDp('10'), height: heightToDp('5'), backgroundColor: '#fff', bottom: heightToDp('2'), elevation: 5, justifyContent: 'center', alignItems: 'center', borderRadius: widthToDp('1') }}>
                                            <SimpleLineIcons name='graduation' size={20} color={'rgb(8,39,215)'} />
                                        </View>
                                        <View style={{ marginTop: heightToDp('1.5') }}>
                                            <Text style={{ color: '#000' }}>Course</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Digital')}>
                                    <View style={{ width: widthToDp('20'), height: heightToDp('15'), backgroundColor: 'rgb(253,253,253)', alignItems: 'center', borderRadius: widthToDp('2'), marginStart: widthToDp('4') }}>
                                        <View style={{ width: widthToDp('10'), height: heightToDp('5'), backgroundColor: '#fff', bottom: heightToDp('2'), elevation: 5, justifyContent: 'center', alignItems: 'center', borderRadius: widthToDp('1') }}>
                                            <Feather name='book-open' size={20} color={'rgb(27,141,229)'} />
                                        </View>
                                        <View style={{ marginTop: heightToDp('1.5') }}>
                                            <Text style={{ color: '#000', textAlign: 'center' }}>Digital Textbook</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View>
                            <View>
                                <View style={{ marginTop: heightToDp('2') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('3.7') }}>Brouse courses by user type</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: heightToDp('1.5') }}>
                                    <View style={{ width: widthToDp('50'), height: heightToDp('9'), borderRadius: widthToDp('20'), backgroundColor: '#fff', flexDirection: 'row', elevation: 5 }}>
                                        <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                                            <Image source={Office} style={{ width: widthToDp('10'), height: heightToDp('5') }} />
                                        </View>
                                        <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
                                            <Text style={{ color: '#000', fontSize: widthToDp('4'), fontWeight: 'bold' }}>Administrator</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: widthToDp('40'), height: heightToDp('9'), borderRadius: widthToDp('20'), marginStart: widthToDp('4'), backgroundColor: '#fff', flexDirection: 'row', elevation: 5 }}>
                                        <View style={{ justifyContent: 'center', marginStart: widthToDp('5') }}>
                                            <Image source={Parent} style={{ width: widthToDp('10'), height: heightToDp('5') }} />
                                        </View>
                                        <View style={{ justifyContent: 'center', marginStart: widthToDp('4') }}>
                                            <Text style={{ color: '#000', fontSize: widthToDp('4'), fontWeight: 'bold' }}>Parent</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={{ marginTop: heightToDp('2') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('3.8') }}>Brouse by subject</Text>
                                </View>
                                <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <View style={{ flexDirection: 'row', marginTop: heightToDp('2'), marginEnd: widthToDp('2') }}>
                                        <TouchableOpacity onPress={() => props.navigation.navigate('Accountancy')}>
                                            <View style={{ width: widthToDp('60'), height: heightToDp('7'), borderRadius: widthToDp('2'), backgroundColor: 'rgb(248,214,189)', alignItems: 'center', flexDirection: 'row' }}>
                                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                                </View>
                                                <View style={{ marginStart: widthToDp('3') }}>
                                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Accountancy</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => props.navigation.navigate('BIO')}>
                                            <View style={{ width: widthToDp('60'), height: heightToDp('6.5'), borderRadius: widthToDp('2'), marginStart: widthToDp('4'), backgroundColor: 'rgb(181,213,252)', flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(31,140,255)', alignItems: 'center', justifyContent: 'center' }}>
                                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                                </View>
                                                <View style={{ marginStart: widthToDp('3') }}>
                                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Biological</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </ScrollView>
                                <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <View style={{ flexDirection: 'row', marginTop: heightToDp('2'), marginEnd: widthToDp('2') }}>
                                        <TouchableOpacity onPress={() => props.navigation.navigate('ART')}>
                                            <View style={{ width: widthToDp('60'), height: heightToDp('6.5'), borderRadius: widthToDp('2'), backgroundColor: 'rgb(219,203,252)', flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(165,103,246)', justifyContent: 'center', alignItems: 'center' }}>
                                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                                </View>
                                                <View style={{ marginStart: widthToDp('2') }}>
                                                    <Text style={{ color: '#000', fontSize: widthToDp('4') }}>Art Integrated Learning</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => props.navigation.navigate('Bussness')}>
                                            <View style={{ width: widthToDp('60'), height: heightToDp('6.5'), borderRadius: widthToDp('2'), marginStart: widthToDp('4'), backgroundColor: 'rgb(201,230,186)', flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(96,192,33)', justifyContent: 'center', alignItems: 'center' }}>
                                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                                </View>
                                                <View style={{ marginStart: widthToDp('3') }}>
                                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Business</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </ScrollView>

                            </View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('All')}>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ borderWidth: 1, width: widthToDp('90'), height: heightToDp('6'), marginTop: heightToDp('3'), borderRadius: widthToDp('20'), justifyContent: 'center', alignItems: 'center', borderColor: 'rgb(175,197,218)' }}>
                                        <Text style={{ fontSize: widthToDp('4.5'), color: 'rgb(73,129,190)', fontWeight: 'bold' }}>View all subject</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </View>
                        <View>
                            <View style={{ marginTop: heightToDp('3') }}>
                                <Text style={{ color: '#000' }}>Recently published courses</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: heightToDp('1'), marginEnd: widthToDp('2'), marginBottom: heightToDp('10') }}>
                                <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <TouchableOpacity onPress={()=>props.navigation.navigate('Recently')}>
                                        <View style={{ width: widthToDp('65'), height: heightToDp('14'), borderRadius: widthToDp('2'), justifyContent: 'center', backgroundColor: '#fff' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View>
                                                    <Image source={Student} style={{ height: heightToDp('7.5'), width: widthToDp('15') }} />
                                                </View>
                                                <View style={{ marginStart: widthToDp('3') }}>
                                                    <View>
                                                        <Text style={{ color: '#000' }}>Competency-based</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{ color: '#000' }}>Education-Module 4</Text>
                                                    </View>
                                                    <View style={{ marginTop: heightToDp('0.7') }}>
                                                        <Text style={{ color: '#000', fontSize: widthToDp('3.5') }}>CBSE Training Class1,Class...</Text>
                                                    </View>

                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ width: widthToDp('65'), height: heightToDp('14'), borderRadius: widthToDp('2'), marginStart: widthToDp('2'), justifyContent: 'center', backgroundColor: '#fff' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View>
                                                <Image source={Student} style={{ height: heightToDp('7.5'), width: widthToDp('15') }} />
                                            </View>
                                            <View style={{ marginStart: widthToDp('3') }}>
                                                <View>
                                                    <Text style={{ color: '#000' }}>Competency-based</Text>
                                                </View>
                                                <View>
                                                    <Text style={{ color: '#000' }}>Education-Module 4</Text>
                                                </View>
                                                <View style={{ marginTop: heightToDp('0.7') }}>
                                                    <Text style={{ color: '#000', fontSize: widthToDp('3.5') }}>CBSE Training Class1,Class...</Text>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>

                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
            <View style={{ height: heightToDp('7'), backgroundColor: '#fff', borderColor: 'rgb(243,228,99)', borderWidth: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginStart: widthToDp('4') }}>
                        <Entypo name='home' size={25} color={'rgb(1,44,237)'} />
                    </View>
                    <View style={{ marginStart: widthToDp('10') }}>
                        <SimpleLineIcons name='graduation' size={25} color={'#000'} />
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('QR')}>
                        <View style={{ marginStart: widthToDp('13') }}>
                            <Image source={Scaner} style={{ height: heightToDp('10'), width: widthToDp('20'), bottom: heightToDp('3.5') }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Download')}>
                        <View style={{ marginStart: widthToDp('10') }}>
                            <MaterialIcons name='archive' size={25} color={'#000'} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                        <View style={{ marginStart: widthToDp('10') }}>
                            <FontAwesome5 name='user-alt' size={25} color={'#000'} />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </>
    )
}