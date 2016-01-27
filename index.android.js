/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Animated,
  ToolbarAndroid,
  Navigator,
  BackAndroid,
  TouchableHighlight
} from 'react-native';

class TestProject extends Component { 
  
  render() {
	  return (
            <Navigator
                initialRoute={{name: 'WelcomeView', component: WelcomeView}}
                configureScene={() => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={(route, navigator) => {
                    // count the number of func calls
                    console.log(route, navigator); 

                    if (route.component) {
                        return React.createElement(route.component, { navigator });
                    }
                }}
				onBack={() => {
					if(route.index > 0) {
						navigator.pop();
					}
				}}
             />
        );
  }

	
}

class WelcomeView extends React.Component {
    onPressFeed() {
        this.props.navigator.push({
            name: 'MainView',
            component: MainView
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome View!
                </Text>

                <Text onPress={this.onPressFeed.bind(this)}>
                    Go to feed!
                </Text>
            </View>
        );
    }
}

class MainView extends Component {
	
	constructor(props: any) {
		super(props);
		this.state = {
			bounceValue: new Animated.Value(0),
		};
	}; 
	render () {
		var ToastModule = require('react-native').NativeModules.ToastModule;

		return (
		
		  <View style={styles.container}>
		   <Animated.Image                         // Base: Image, Text, View
			source={require('./images/ic_launcher.png')}
			style={{
			  transform: [                        // `transform` is an ordered array
				{scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
			  ]
			}}
		  />
		  <Image source={require('./images/ic_launcher.png')} />
			<Text style={styles.welcome}>
			  Welcome to React Native!
			</Text>
			<Text style={styles.instructions}>
			  To get started, edit index.android.js
			</Text>
			<Text style={styles.instructions}>
			  Shake or press menu button for dev menu
			</Text>
			<TouchableHighlight style={styles.wrapper}
			  onPress={() => this.componentDidMount()}>
			  <View style={styles.button}>
				<Text>Alert with one button</Text>
			  </View>
			</TouchableHighlight>
		  </View>);
	}
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // Start large
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.8,                         // Animate to smaller size
        friction: 1,                          // Bouncier spring
      }
    ).start();                                // Start the animation
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestProject', () => TestProject);
