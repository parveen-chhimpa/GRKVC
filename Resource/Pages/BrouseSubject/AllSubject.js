import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightToDp, widthToDp } from '../../Utils/Responsive'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function AllSubject(props) {
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }}>
            <View style={{ height: heightToDp('8'), backgroundColor: 'rgb(255,217,84)', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginStart: widthToDp('2') }}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Student')}>
                                          <View>
                        <AntDesign name='arrowleft' size={30} color={'#000'} />
                    </View>  
                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', marginStart: widthToDp('8') }}>
                        <Text style={{ color: '#000', fontSize: widthToDp('5.5') }}>Select Subject</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center', marginTop: heightToDp('5'),marginBottom:heightToDp('5') }}>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Accountancy')}>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Accountancy</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Art Integrated Learning</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Biology</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Business Studies</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Cbse Training</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Chemistry</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Computer Science</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Cpd</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Creative Writing And Translation</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Economies</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>English</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>English Workbook</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Environment Studies</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>General Science</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Geography</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Graphics Design</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Health And Physical Education</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Heritage Crafts</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Hindi</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>History</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Home Science</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Ict</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Mathematics</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Political Science</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Pyschology</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Science</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Social Science</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Sociology</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: heightToDp('2') }}>
                        <TouchableOpacity>
                            <View style={{ width: widthToDp('90'), height: heightToDp('7'), borderRadius: widthToDp('4'), backgroundColor: '#dcdcdc', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ width: widthToDp('10'), height: heightToDp('4.5'), marginStart: widthToDp('2'), borderRadius: widthToDp('1.5'), backgroundColor: 'rgb(251,140,50)', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name='book' size={25} color={'#fff'} />
                                </View>
                                <View style={{ marginStart: widthToDp('3') }}>
                                    <Text style={{ color: '#000', fontSize: widthToDp('4.5') }}>Training</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}