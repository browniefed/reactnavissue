import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { StackNavigator, DrawerNavigator, NavigationActions } from "react-navigation";

const resetAction = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName: "Later" })],
});

const ScreenFirst = props => (
  <View>
    <TouchableOpacity onPress={() => props.navigation.dispatch(resetAction)}>
      <Text>Broken</Text>
    </TouchableOpacity>
  </View>
);

const ScreenLater = props => (
  <View>
    <Text>You can't touch me</Text>
  </View>
);

const StackStart = StackNavigator({
  First: {
    screen: ScreenFirst,
  },
});

const StackAfter = StackNavigator({
  Later: {
    screen: ScreenLater,
  },
});

const RootNavigator = DrawerNavigator({
  Start: {
    screen: StackStart,
  },
  After: {
    screen: StackAfter,
  },
});

export default class App extends React.Component {
  render() {
    return <View style={styles.container}><RootNavigator /></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
