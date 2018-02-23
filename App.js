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
import Kagb from './app/components/Kagb';
import Kag2b from './app/components/Kag2b';
import Kag3b from './app/components/Kag3b';
import Kag4b from './app/components/Kag4b';
import Kag5b from './app/components/Kag5b';
import Kag6b from './app/components/Kag6b';
import Kag7b from './app/components/Kag7b';
import Kag8b from './app/components/Kag8b';
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

class LogoTitle9 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag7b.jpg')}
      />
    );
  }
}

class LogoTitle10 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag2b.jpg')}
      />
    );
  }
}

class LogoTitle11 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag3b.jpg')}
      />
    );
  }
}

class LogoTitle12 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag4b.jpg')}
      />
    );
  }
}

class LogoTitle13 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag5b.jpg')}
      />
    );
  }
}

class LogoTitle14 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag6b.jpg')}
      />
    );
  }
}

class LogoTitle15 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kagb.jpg')}
      />
    );
  }
}

class LogoTitle16 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Kag8b.jpg')}
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
            onPress= { ()=> navigate('Kag3')}><LogoTitle3 />Normal Longspear x2{"\n"}Power Attack Longspear{"\n"}Haste{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag4')}><LogoTitle4 />Normal Longspear x2{"\n"}Power Attack Longspear{"\n"}Song{"\n"}Haste{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag5')}><LogoTitle5 />Bite and Claw x2{"\n"}Bite and Claw x2 Power Attack{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag6')}><LogoTitle6 />Bite and Claw x2{"\n"}Bite and Claw x2 Power Attack{"\n"}Song{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag7')}><LogoTitle7 />Bite x2 and Claw x2{"\n"}Bite and Claw x2 Power Attack{"\n"}Haste{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag8')}><LogoTitle8 />Bite x2 and Claw x2{"\n"}Bite and Claw x2 Power Attack{"\n"}Song{"\n"}Haste{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kagb')}><LogoTitle9 />Normal Longspear{"\n"}Power Attack Longspear{"\n"}Enlarge{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag2b')}><LogoTitle10 />Normal Longspear{"\n"}Power Attack Longspear{"\n"}Song{"\n"}Enlarge{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag3b')}><LogoTitle11 />Normal Longspear x2{"\n"}Power Attack Longspear{"\n"}Haste{"\n"}Enlarge{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag4b')}><LogoTitle12 />Normal Longspear x2{"\n"}Power Attack Longspear{"\n"}Song{"\n"}Haste{"\n"}Enlarge{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag5b')}><LogoTitle13 />Bite and Claw x2{"\n"}Bite and Claw x2 Power Attack{"\n"}Enlarge{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag6b')}><LogoTitle14 />Bite and Claw x2{"\n"}Bite and Claw x2 Power Attack{"\n"}Song{"\n"}Enlarge{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag7b')}><LogoTitle15 />Bite x2 and Claw x2{"\n"}Bite and Claw x2 Power Attack{"\n"}Haste{"\n"}Enlarge{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Kag8b')}><LogoTitle16 />Bite x2 and Claw x2{"\n"}Bite and Claw x2 Power Attack{"\n"}Song{"\n"}Haste{"\n"}Enlarge{"\n"}
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
  Kagb: { screen: Kagb },
  Kag2b: { screen: Kag2b },
  Kag3b: { screen: Kag3b },
  Kag4b: { screen: Kag4b },
  Kag5b: { screen: Kag5b },
  Kag6b: { screen: Kag6b },
  Kag7b: { screen: Kag7b },
  Kag8b: { screen: Kag8b },
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
          <Kagb />;
          <Kag2b />;
          <Kag3b />;
          <Kag4b />;
          <Kag5b />;
          <Kag6b />;
          <Kag7b />;
          <Kag8b />;
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
