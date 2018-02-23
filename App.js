import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  Dimensions,
       } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Kag from './app/components/Kag';
import Kag2 from './app/components/Kag2';
import Kag3 from './app/components/Kag3';
import Kag4 from './app/components/Kag4';
import Kag5 from './app/components/Kag5';
import Kag6 from './app/components/Kag6';
import Kag7 from './app/components/Kag7';
import Kag8 from './app/components/Kag8';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

EStyleSheet.build();

class LogoTitle1 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag.jpg')}
      />
    );
  }
}

class LogoTitle2 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag2.jpg')}
      />
    );
  }
}

class LogoTitle3 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag3.jpeg')}
      />
    );
  }
}

class LogoTitle4 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag4.jpg')}
      />
    );
  }
}

class LogoTitle5 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag5.png')}
      />
    );
  }
}

class LogoTitle6 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag6.jpg')}
      />
    );
  }
}

class LogoTitle7 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag7.jpg')}
      />
    );
  }
}

class LogoTitle8 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag8.jpg')}
      />
    );
  }
}

class KagHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'KAGUTSUCHI',
  };
  render (){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.homeContainer}>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag')}><LogoTitle1 />Normal Longspear{"\n"}Power Attack Longspear{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag2')}><LogoTitle2 />Normal Longspear{"\n"}Power Attack Longspear{"\n"}Song{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag3')}><LogoTitle3 />Normal Longspear{"\n"}Power Attack Longspear{"\n"}Haste{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag4')}><LogoTitle4 />Normal Longspear{"\n"}Power Attack Longspear{"\n"}Song{"\n"}Haste{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag5')}><LogoTitle5 />Bite and Claw x2{"\n"}Bite and Clawx2 Power Attack{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag6')}><LogoTitle6 />Bite and Claw x2{"\n"}Bite and Clawx2 Power Attack{"\n"}Song{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag7')}><LogoTitle7 />Bite and Claw x2{"\n"}Bite and Clawx2 Power Attack{"\n"}Haste{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag8')}><LogoTitle8 />Bite and Claw x2{"\n"}Bite and Clawx2 Power Attack{"\n"}Song{"\n"}Haste{"\n"}
          </Text>
        </ScrollView>
      </View>
    )
  }
}

const NavigationApp = StackNavigator({
  // Home: { screen: Login },
  KagHome: { screen: KagHomeScreen },
  Kag: { screen: Kag },
  Kag2: { screen: Kag2 },
  Kag3: { screen: Kag3 },
  Kag4: { screen: Kag4 },
  Kag5: { screen: Kag5 },
  Kag6: { screen: Kag6 },
  Kag7: { screen: Kag7 },
  Kag8: { screen: Kag8 },
  }, {
    navigationOptions: {
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  })

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
          <KagHomeScreen />;
          <Kag />;
          <Kag2 />;
          <Kag3 />;
          <Kag4 />;
          <Kag5 />;
          <Kag6 />;
          <Kag7 />;
          <Kag8 />;
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: 'firebrick',
      alignContent: 'center',
      padding: 5,
    },
    homeContainer: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: 'firebrick',
      alignContent: 'center',
      alignSelf: 'center',
      padding: 5,
    },
    logo: {
      marginTop: 5,
      width: 350,
      height: 500,
    },
    textStyle: {
      color: 'goldenrod'
    }
});
