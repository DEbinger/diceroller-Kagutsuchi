import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
       } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button } from './Button';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

EStyleSheet.build();

export default class LaylaDARSH extends React.Component {
  static navigationOptions = {
    title: '13|13+12/11|11+18 ',
  };
  constructor(props) {
    super(props);

//   imgClick = () => {
//     Alert.alert(
//   'Column 1 Base D20 roll \n\nColumn 2 D20 \n + 14|14|14|9 \n Deadly Aim/Rapid Shot/Haste \n\n Column 3 \n Arrow Damage + 14',
//   'Enjoy!',
//   [
//     {text: 'T20 = Total D20 Roll includes DARSH', onPress: () => console.log('D20 Roll Total')},
//     {text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel'}
//   ],
//   { cancelable: false }
// )
//   }

    this.state={

      // This is our Display number value, prior to button press
      NumberHolderD20S1 : 'NORM',
      NumberHolderD20S2 : 'NORM',
      NumberHolderD20S3 : 'PA',
      NumberHolderD20S4 : 'PA',
      NumberHolderD8S1 : 'DAM',
      NumberHolderD8S2 : 'DAM',
      NumberHolderD8S3 : 'DAM',
      NumberHolderD8S4 : 'DAM',
      NumberHolderTotalD20S1 : 'T20',
      NumberHolderTotalD20S2 : 'T20',
      NumberHolderTotalD20S3 : 'T20',
      NumberHolderTotalD20S4 : 'T20',
    }
  }

  rollA20 = () => {
    return Math.floor(Math.random() * 20) + 1;
  }

  handleButtonPress=()=> {
    let D20S1 = this.rollA20();
    let D20S2 = this.rollA20();
    let D20S3 = this.rollA20();
    let D20S4 = this.rollA20();
    let D20TotalS1 = D20S1 + 13;
    let D20TotalS2 = D20S2 + 13;
    let D20TotalS3 = D20S3 + 11;
    let D20TotalS4 = D20S4 + 11;
    let D8S1 = Math.floor(Math.random()  * 8) + 1;
    let D8S2 = Math.floor(Math.random()  * 8) + 1;
    let D8S3 = Math.floor(Math.random()  * 8) + 1;
    let D8S4 = Math.floor(Math.random()  * 8) + 1;
    let D8S5 = Math.floor(Math.random()  * 8) + 1;
    let D8S6 = Math.floor(Math.random()  * 8) + 1;
    let D8S7 = Math.floor(Math.random()  * 8) + 1;
    let D8S8 = Math.floor(Math.random()  * 8) + 1;
    let TotalS1 = D8S1 + D8S2 + 13;
    let TotalS2 = D8S3 + D8S4 + 19;
    let TotalS3 = D8S5 + D8S6 + 13;
    let TotalS4 = D8S7 + D8S8 + 19;

  this.setState({

    NumberHolderD20S1 : D20S1,
    NumberHolderD20S2 : D20S2,
    NumberHolderD20S3 : D20S3,
    NumberHolderD20S4 : D20S4,
    NumberHolderTotalD20S1 : D20TotalS1,
    NumberHolderTotalD20S2 : D20TotalS2,
    NumberHolderTotalD20S3 : D20TotalS3,
    NumberHolderTotalD20S4 : D20TotalS4,
    NumberHolderD8S1 : TotalS1,
    NumberHolderD8S2 : TotalS2,
    NumberHolderD8S3 : TotalS3,
    NumberHolderD8S4 : TotalS4,
    })
  }

  render (){
    const { navigate } = this.props.navigation;
    const D20S1Style = this.state.NumberHolderD20S1 === 20 | this.state.NumberHolderD20S1 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S2Style = this.state.NumberHolderD20S2 === 20 | this.state.NumberHolderD20S2 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S3Style = this.state.NumberHolderD20S3 === 20 | this.state.NumberHolderD20S3 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S4Style = this.state.NumberHolderD20S4 === 20 | this.state.NumberHolderD20S4 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    return (
       <ImageBackground source={require('../images/Kag3b.jpg')} style={styles.container}>

          <Animatable.View ref="view"
            style={styles.center1} >
            <Button style={styles.button} text="Attack!"
              onPress={() => this.handleButtonPress()}/>
          </Animatable.View>

            <View style={styles.bottom1}>
              <Animatable.View
                animation="bounce"
                easing="ease-in"
                iterationCount={5}
                style={styles.bottomItem}>
                <Text style={D20S1Style} adjustsFontSizeToFit
                numberOfLines={1}>{this.state.NumberHolderD20S1}</Text>
              </Animatable.View>

              <Animatable.View
                animation="tada"
                easing="ease-in"
                iterationCount={5}
                style={styles.bottomItemTotal}>
                  <Animatable.Text
                    animation="zoomInUp"
                    style={styles.bottomItemInnerTotalD20}
                    adjustsFontSizeToFit
                    numberOfLines={1}>{this.state.NumberHolderTotalD20S1}
                  </Animatable.Text>
              </Animatable.View>

              <Animatable.View
                animation="bounce"
                easing="ease-out"
                iterationCount={5}
                style={styles.bottomItem}>
                <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderD8S1}</Text>
              </Animatable.View>

              <Animatable.View
                animation="bounce"
                easing="ease-in"
                iterationCount={5}
                style={styles.bottomItem}>
                <Text style={D20S2Style} adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderD20S2}</Text>
              </Animatable.View>

              <Animatable.View
                animation="tada"
                easing="ease-in"
                iterationCount={5}
                style={styles.bottomItemTotal}>
                  <Animatable.Text
                    animation="zoomInUp"
                    style={styles.bottomItemInnerTotalD20}
                    adjustsFontSizeToFit
                    numberOfLines={1}>{this.state.NumberHolderTotalD20S2}
                  </Animatable.Text>
              </Animatable.View>

              <Animatable.View
                animation="bounce"
                easing="ease-out"
                iterationCount={5}
                style={styles.bottomItem}>
                <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderD8S2}</Text>
              </Animatable.View>
              <Text style={styles.attackBreak}>-------------------------------------------------</Text>
              <Animatable.View
                animation="bounce"
                easing="ease-in"
                iterationCount={5}
                style={styles.bottomItem}>
                <Text style={D20S3Style} adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderD20S3}</Text>
              </Animatable.View>

              <Animatable.View
                animation="tada"
                easing="ease-in"
                iterationCount={5}
                style={styles.bottomItemTotal}>
                <Animatable.Text
                  animation="zoomInUp"
                  style={styles.bottomItemInnerTotalD20}
                  adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderTotalD20S3}</Animatable.Text>
              </Animatable.View>

              <Animatable.View
                animation="bounce"
                easing="ease-out"
                iterationCount={5}
                style={styles.bottomItem}>
                <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderD8S3}</Text>
              </Animatable.View>

              <Animatable.View
                animation="bounce"
                easing="ease-in"
                iterationCount={5}
                style={styles.bottomItem}>
                <Text style={D20S4Style} adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderD20S4}</Text>
              </Animatable.View>

              <Animatable.View
                animation="tada"
                easing="ease-in"
                iterationCount={5}
                style={styles.bottomItemTotal}>
                <Animatable.Text
                  animation="zoomInUp"
                  style={styles.bottomItemInnerTotalD20}
                  adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderTotalD20S4}</Animatable.Text>
              </Animatable.View>

              <Animatable.View
                animation="bounce"
                easing="ease-out"
                iterationCount={5}
                style={styles.bottomItem}>
                <Text style={styles.bottomItemInner8} adjustsFontSizeToFit
                  numberOfLines={1}>{this.state.NumberHolderD8S4}</Text>
              </Animatable.View>
            </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    attackBreak: {
      color: 'red',
    },
    archer1: {
      flex: 1,
      backgroundColor: '#065143',
    },
    archer2: {
      flex: 1,
      backgroundColor: '#D8FFDD',
    },
    archer3: {
      flex: 1,
      backgroundColor: '#F0C808',
    },
    top1: {
      height: '33%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#065143',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    top2: {
      height: '33%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D8FFDD',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    top3: {
      height: '33%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F0C808',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    profileimage: {
      width: 100,
      height: 175,
      borderWidth: 4,
      borderColor: '#fff',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      flex: 1,
      maxHeight: '100%',
      maxWidth: '100%',
    },
    center1: {
      height: '30%',
      // backgroundColor: '#065143',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    center2: {
      height: '20%',
      // backgroundColor: '#D8FFDD',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    center3: {
      height: '20%',
      // backgroundColor: '#F0C808',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    bottom1: {
      height: '50%',
      // backgroundColor: '#065143',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    bottom2: {
      height: '57%',
      // backgroundColor: '#D8FFDD',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    bottom3: {
      height: '57%',
      // backgroundColor: '#F0C808',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    bottomItem: {
      width: Dimensions.get('window').width / 3 -6,
      height: 75,
      padding: 5
    },
    bottomItemTotal: {
      width: Dimensions.get('window').width / 3 -6,
      height: 75,
      padding: 5
    },
    bottomItemInner20: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '700',
      color: '#129490',
    },
    bottomItemInner20picked: {
      flex: 1,
      backgroundColor: 'red',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '700',
      color: 'white',
    },
    bottomItemInner8: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '700',
      color: '#8a2be2',
    },
    bottomItemInner4: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '700',
      color: '#065143',
    },
    bottomItemInnerTotalD20: {
      flex: 1,
      backgroundColor: '#CE1483',
      borderColor: '#70B77E',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '700',
      color: '#fff8dc',
    },
});