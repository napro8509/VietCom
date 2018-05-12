
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Picker,
  TouchableOpacity,
  Image,
  Switch,
  Button,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import { DrawerItems, SafeAreaView, DrawerActions, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Accountant from './Screens/Accountant';
import DashBoard from './Screens/ManageRequest/DashBoard';
import CardEditHistory from './Screens/ManageRequest/CardEditHistory';
import CardDetail from './Screens/ManageRequest/CardDetail';
import Filter from './Screens/ManageRequest/Filter';
import Arlam from './Screens/ManageRequest/Arlam';
import WaitApprove from './Screens/WaitApprove';
import ManageContract from './Screens/ManageContract';
import Login from './Login/Login';
import { YellowBox } from 'react-native';
import Global from '../Global/Global';
import getToken from '../Api/getToken';
import DrawerComponent from './Screens/Drawer/DrawerComponent';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../src/icon/back.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../src/icon/back.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerComponent/>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);
CustomDrawerContentComponent.propTypes = {
  navigation: PropTypes.object
};
const MyApp = createDrawerNavigator({
  DashBoard: {
    screen: createStackNavigator({
      DashBoard: {
        screen: DashBoard,
      },
      WaitApprove: {
        screen: WaitApprove
      }
    },
      {
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        }
      }
    ),
  },
  Accountant: {
    screen: Accountant,
  },

  CardEditHistory: {
    screen: CardEditHistory,
  },
  CardDetail: {
    screen: CardDetail,
  },
  Filter: {
    screen: Filter,
  },
  Arlam: {
    screen: Arlam,
  },
  ManageContract: {
    screen: ManageContract
  }
}, {
  contentComponent:CustomDrawerContentComponent
  });


const TestLogIn = createStackNavigator({
  Hey: {
    screen: Login,
  },
  Hello: {
    screen: MyApp,
  },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  })
const defaultState={isLogIn:false,profile:{}}
function todos(state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {isLogIn:true,profile:action.profile};
    default:
      return state;
  }
}

const navReducer = createNavigationReducer(TestLogIn);

const appReducer = combineReducers({
  nav: navReducer,
  todos
});

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const addListener = createReduxBoundAddListener("root");

const mapStateToProps = (state) => ({
  nav: state.nav
});


class Test extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TestLogIn />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const AppWithNavigationState = connect(mapStateToProps)(Test);

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
