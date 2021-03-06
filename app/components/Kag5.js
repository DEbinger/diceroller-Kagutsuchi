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
import { CheckBox } from 'react-native-elements';
import { Button } from './Button';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

const {width, height} = Dimensions.get('window')

export default class Kag5 extends React.Component {
  static navigationOptions = {
    title: '11 x3/9 x3',
  };
  constructor(props) {
    super(props);

    this.state={

      // This is the Display number value, prior to button press
      NumberHolderD20S1 : 'REG',
      NumberHolderD20S2 : 'REG',
      NumberHolderD20S3 : 'REG',
      NumberHolderD20S4 : 'PA',
      NumberHolderD20S5 : 'PA',
      NumberHolderD20S6 : 'PA',
      NumberHolderD6S1 : 6,
      NumberHolderD6S3 : 6,
      NumberHolderD6S2 : 6,
      NumberHolderD6S4 : 6,
      NumberHolderD6S5 : 6,
      NumberHolderD6S6 : 6,
      NumberHolderTotalS1 : 'DAM',
      NumberHolderTotalS2 : 'DAM',
      NumberHolderTotalS3 : 'DAM',
      NumberHolderTotalS4 : 'DAM',
      NumberHolderTotalS5 : 'DAM',
      NumberHolderTotalS6 : 'DAM',
      NumberHolderTotalD20S1 : 'T20',
      NumberHolderTotalD20S2 : 'T20',
      NumberHolderTotalD20S3 : 'T20',
      NumberHolderTotalD20S4 : 'T20',
      NumberHolderTotalD20S5 : 'T20',
      NumberHolderTotalD20S6 : 'T20',
    }
  }

  handleButtonPress=()=> {
    let D20S1 = Math.floor(Math.random() * 20) + 1 ;
    let D20S2 = Math.floor(Math.random() * 20) + 1 ;
    let D20S3 = Math.floor(Math.random() * 20) + 1 ;
    let D20S4 = Math.floor(Math.random() * 20) + 1 ;
    let D20S5 = Math.floor(Math.random() * 20) + 1 ;
    let D20S6 = Math.floor(Math.random() * 20) + 1 ;
    let D20TotalS1 = D20S1 + 11;
    let D20TotalS2 = D20S2 + 11;
    let D20TotalS3 = D20S3 + 11;
    let D20TotalS4 = D20S4 + 9;
    let D20TotalS5 = D20S5 + 9;
    let D20TotalS6 = D20S6 + 9;
    let diceroll6S1 = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S2 = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S3 = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S4 = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S5 = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S6 = Math.floor(Math.random() * 6) + 1 ;
    let TotalS1 = diceroll6S1 + 11;
    let TotalS2 = diceroll6S2 + 8;
    let TotalS3 = diceroll6S3 + 8;
    let TotalS4 = diceroll6S4 + 17;
    let TotalS5 = diceroll6S5 + 12;
    let TotalS6 = diceroll6S6 + 12;

  this.setState({

    NumberHolderD20S1 : D20S1,
    NumberHolderD20S2 : D20S2,
    NumberHolderD20S3 : D20S3,
    NumberHolderD20S4 : D20S4,
    NumberHolderD20S5 : D20S5,
    NumberHolderD20S6 : D20S6,
    NumberHolderD6S1 : diceroll6S1,
    NumberHolderD6S2 : diceroll6S2,
    NumberHolderD6S3 : diceroll6S3,
    NumberHolderD6S4 : diceroll6S4,
    NumberHolderD6S5 : diceroll6S5,
    NumberHolderD6S6 : diceroll6S6,
    NumberHolderTotalS1 : TotalS1,
    NumberHolderTotalS2 : TotalS2,
    NumberHolderTotalS3 : TotalS3,
    NumberHolderTotalS4 : TotalS4,
    NumberHolderTotalS5 : TotalS5,
    NumberHolderTotalS6 : TotalS6,
    NumberHolderTotalD20S1 : D20TotalS1,
    NumberHolderTotalD20S2 : D20TotalS2,
    NumberHolderTotalD20S3 : D20TotalS3,
    NumberHolderTotalD20S4 : D20TotalS4,
    NumberHolderTotalD20S5 : D20TotalS5,
    NumberHolderTotalD20S6 : D20TotalS6,
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    const D20S1Style = this.state.NumberHolderD20S1 === 20 | this.state.NumberHolderD20S1 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S2Style = this.state.NumberHolderD20S2 === 20 | this.state.NumberHolderD20S2 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S3Style = this.state.NumberHolderD20S3 === 20 | this.state.NumberHolderD20S3 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S4Style = this.state.NumberHolderD20S4 === 20 | this.state.NumberHolderD20S4 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S5Style = this.state.NumberHolderD20S5 === 20 | this.state.NumberHolderD20S5 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S6Style = this.state.NumberHolderD20S6 === 20 | this.state.NumberHolderD20S6 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;

    return (
      <ImageBackground source={require('../images/Kag5.png')} style={styles.container}>
        <Animatable.View animation="bounce" easing="ease-out" iterationCount="5" style={styles.center} >
            <Button style={styles.button} text="Attack!"
            onPress={() => this.handleButtonPress()}/>
        </Animatable.View>
          <View style={styles.bottom}>
              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S1Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S1}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S1}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS1}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S3Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S3}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S2}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS2}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S2Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S2}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S3}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS3}</Animatable.Text>
              </View>
              <Text style={styles.attackBreak}>-------------------------------------------------</Text>
              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S4Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S4}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S4}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS4}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S5Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S5}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S5}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS5}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S6Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S6}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S6}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS6}</Animatable.Text>
              </View>
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: 5,
    },
    textStyle: {
      color: 'goldenrod',
      textAlign: 'center'
    },
    center: {
      height: '20%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    attackBreak: {
      color: 'red',
    },
    bottom: {
      height: '50%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    bottomItem: {
      width: Dimensions.get('window').width / 3 -7,
      height: 60,
      padding: 5
    },
    bottomItemTotal: {
      width: Dimensions.get('window').width / 3 -7,
      height: 60,
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
      fontWeight: '900',
      color: '#d2691e',
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
      fontWeight: '900',
      color: 'white',
    },
    bottomItemInnerTotal: {
      flex: 1,
      backgroundColor: 'grey',
      borderColor: '#340068',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: 'papayawhip',
    },
    bottomItemInnerTotalD20: {
      flex: 1,
      backgroundColor: 'firebrick',
      borderColor: '#340068',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: 'violet',
    },
});
