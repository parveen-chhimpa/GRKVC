import React, { Component, Fragment } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './QRScaneerStyle';
import {
    TouchableOpacity,
    Text,
    StatusBar,
    Linking,
    View,
    Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightToDp, widthToDp } from '../../Utils/Responsive';
import { QRImage } from '../../Utils/Image';


class QrScaner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scan: false,
            ScanResult: false,
            result: null
        };
    }

    onSuccess = (e) => {
        const check = e.data.substring(0, 4);
        console.log('scanned data' + check);
        this.setState({
            result: e,
            scan: true,
            ScanResult: true
        })
        if (check === 'http') {
            Linking
                .openURL(e.data)
                .catch(err => console.error('An error occured', err));


        } else {
            this.setState({
                result: e,
                scan: true,
                ScanResult: true
            })
        }

    }

    scanAgain = () => {
        this.setState({
            scan: false,
            ScanResult: false
        })
    }
    render() {
        const { scan, ScanResult, result } = this.state
        const desccription = 'QR code (abbreviated from Quick Response Code) is the trademark for a type of matrix barcode (or two-dimensional barcode) first designed in 1994 for the automotive industry in Japan. A barcode is a machine-readable optical label that contains information about the item to which it is attached. In practice, QR codes often contain data for a locator, identifier, or tracker that points to a website or application. A QR code uses four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to store data efficiently; extensions may also be used.'
        return (
            <View style={styles.scrollViewStyle}>
                <Fragment>
                    <StatusBar barStyle="dark-content" />
                        <View style={styles.cardView} >
                            <View style={{flexDirection:'row',marginStart:widthToDp('5'),marginTop:heightToDp('3')}}>
                             <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                             <View style={{marginStart:widthToDp('2')}}>
                                    <AntDesign name='arrowleft' size={30} color={'#000'} />
                                </View>
                             </TouchableOpacity>

                                <View style={{justifyContent:'center',marginStart:widthToDp('4')}}>
                                    <Text style={{fontSize:widthToDp('6'),color:'#000'}}>Scan QR Code</Text>
                                </View>
                            </View>
                            <View style={{alignItems:'center',marginTop:heightToDp('5')}}>
                             <View>
                                <Text style={{color:'#000'}}>Points your Phone to the QR code to scan at</Text>
                             </View>
                            </View>
                            <View style={{alignItems:'center',marginTop:heightToDp('7')}}>
                                <Image source={QRImage} style={{height:heightToDp('17'),width:widthToDp('80')}} />
                            </View>
                        </View>

                    {ScanResult &&
                        <Fragment>
                            <Text style={styles.textTitle1}>Result !</Text>
                            <View style={ScanResult ? styles.scanCardView : styles.cardView}>
                                <Text>Type : {result.type}</Text>
                                <Text>Result : {result.data}</Text>
                                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                                <TouchableOpacity onPress={this.scanAgain} style={styles.buttonTouchable}>
                                    <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
                                </TouchableOpacity>

                            </View>
                        </Fragment>
                    }


                    {!scan &&
                        <QRCodeScanner
                            reactivate={true}
                            showMarker={true}
                            ref={(node) => { this.scanner = node }}
                            onRead={this.onSuccess}
                        />
                    }
                </Fragment>
            </View>

        );
    }
}



export default QrScaner;