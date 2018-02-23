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

export default class Kag7 extends React.Component {
  static navigationOptions = {
    title: '12 x4/10 x4',
  };
  constructor(props) {
    super(props);

    this.state={

      // This is the Display number value, prior to button press
      NumberHolderD20S1 : 'NOR',
      NumberHolderD20S2 : 'NOR',
      NumberHolderD20S3 : 'NOR',
      NumberHolderD20S4 : 'NOR',
      NumberHolderD20S5 : 'PA',
      NumberHolderD20S6 : 'PA',
      NumberHolderD20S7 : 'PA',
      NumberHolderD20S8 : 'PA',
      NumberHolderD8S1 : 8,
      NumberHolderD8S3 : 8,
      NumberHolderD8S2 : 8,
      NumberHolderD8S4 : 8,
      NumberHolderD8S5 : 8,
      NumberHolderD8S6 : 8,
      NumberHolderD8S7 : 8,
      NumberHolderD8S8 : 8,
      NumberHolderTotalS1 : 'DAM',
      NumberHolderTotalS2 : 'DAM',
      NumberHolderTotalS3 : 'DAM',
      NumberHolderTotalS4 : 'DAM',
      NumberHolderTotalS5 : 'DAM',
      NumberHolderTotalS6 : 'DAM',
      NumberHolderTotalS7 : 'DAM',
      NumberHolderTotalS8 : 'DAM',
      NumberHolderTotalD20S1 : 'T20',
      NumberHolderTotalD20S2 : 'T20',
      NumberHolderTotalD20S3 : 'T20',
      NumberHolderTotalD20S4 : 'T20',
      NumberHolderTotalD20S5 : 'T20',
      NumberHolderTotalD20S6 : 'T20',
      NumberHolderTotalD20S7 : 'T20',
      NumberHolderTotalD20S8 : 'T20',
    }
  }

  handleButtonPress=()=> {
    let D20S1 = Math.floor(Math.random() * 20) + 1 ;
    let D20S2 = Math.floor(Math.random() * 20) + 1 ;
    let D20S3 = Math.floor(Math.random() * 20) + 1 ;
    let D20S4 = Math.floor(Math.random() * 20) + 1 ;
    let D20S5 = Math.floor(Math.random() * 20) + 1 ;
    let D20S6 = Math.floor(Math.random() * 20) + 1 ;
    let D20S7 = Math.floor(Math.random() * 20) + 1 ;
    let D20S8 = Math.floor(Math.random() * 20) + 1 ;
    let D20TotalS1 = D20S1 + 14;
    let D20TotalS2 = D20S2 + 14;
    let D20TotalS3 = D20S3 + 14;
    let D20TotalS4 = D20S4 + 14;
    let D20TotalS5 = D20S5 + 12;
    let D20TotalS6 = D20S6 + 12;
    let D20TotalS7 = D20S7 + 12;
    let D20TotalS8 = D20S8 + 12;
    let diceroll8S1 = Math.floor(Math.random() * 8) + 1 ;
    let diceroll8S2 = Math.floor(Math.random() * 8) + 1 ;
    let diceroll8S3 = Math.floor(Math.random() * 8) + 1 ;
    let diceroll8S4 = Math.floor(Math.random() * 8) + 1 ;
    let diceroll8S5 = Math.floor(Math.random() * 8) + 1 ;
    let diceroll8S6 = Math.floor(Math.random() * 8) + 1 ;
    let diceroll8S7 = Math.floor(Math.random() * 8) + 1 ;
    let diceroll8S8 = Math.floor(Math.random() * 8) + 1 ;
    let TotalS1 = diceroll8S1 + 14;
    let TotalS2 = diceroll8S2 + 14;
    let TotalS3 = diceroll8S3 + 11;
    let TotalS4 = diceroll8S4 + 11;
    let TotalS5 = diceroll8S5 + 20;
    let TotalS6 = diceroll8S6 + 20;
    let TotalS7 = diceroll8S7 + 15;
    let TotalS8 = diceroll8S8 + 15;

  this.setState({

    NumberHolderD20S1 : D20S1,
    NumberHolderD20S2 : D20S2,
    NumberHolderD20S3 : D20S3,
    NumberHolderD20S4 : D20S4,
    NumberHolderD20S5 : D20S5,
    NumberHolderD20S6 : D20S6,
    NumberHolderD20S7 : D20S7,
    NumberHolderD20S8 : D20S8,
    NumberHolderD8S1 : diceroll8S1,
    NumberHolderD8S2 : diceroll8S2,
    NumberHolderD8S3 : diceroll8S3,
    NumberHolderD8S4 : diceroll8S4,
    NumberHolderD8S5 : diceroll8S5,
    NumberHolderD8S6 : diceroll8S6,
    NumberHolderD8S7 : diceroll8S7,
    NumberHolderD8S8 : diceroll8S8,
    NumberHolderTotalS1 : TotalS1,
    NumberHolderTotalS2 : TotalS2,
    NumberHolderTotalS3 : TotalS3,
    NumberHolderTotalS4 : TotalS4,
    NumberHolderTotalS5 : TotalS5,
    NumberHolderTotalS6 : TotalS6,
    NumberHolderTotalS7 : TotalS7,
    NumberHolderTotalS8 : TotalS8,
    NumberHolderTotalD20S1 : D20TotalS1,
    NumberHolderTotalD20S2 : D20TotalS2,
    NumberHolderTotalD20S3 : D20TotalS3,
    NumberHolderTotalD20S4 : D20TotalS4,
    NumberHolderTotalD20S5 : D20TotalS5,
    NumberHolderTotalD20S6 : D20TotalS6,
    NumberHolderTotalD20S7 : D20TotalS7,
    NumberHolderTotalD20S8 : D20TotalS8,
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
    const D20S7Style = this.state.NumberHolderD20S7 === 20 | this.state.NumberHolderD20S7 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S8Style = this.state.NumberHolderD20S8 === 20 | this.state.NumberHolderD20S8 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;

    return (
      <ImageBackground source={require('../images/Kag8.jpg')} style={styles.container}>
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
                <Animatable.Text animation="fadeInUpBig" style={D20S2Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S2}</Animatable.Text>
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
                <Animatable.Text animation="fadeInUpBig" style={D20S3Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S3}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S3}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS3}</Animatable.Text>
              </View>

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

              <Text style={styles.attackBreak}>-------------------------------------------------</Text>

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
              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S6Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S7}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S7}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS7}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S8Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S8}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S8}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS8}</Animatable.Text>
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
      height: '25%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    attackBreak: {
      color: 'white',
    },
    bottom: {
      height: '50%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    bottomItem: {
      width: Dimensions.get('window').width / 3 -7,
      height: 50,
      padding: 5
    },
    bottomItemTotal: {
      width: Dimensions.get('window').width / 3 -7,
      height: 50,
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
