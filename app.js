"use strict";
exports.__esModule = true;
require("react-native-gesture-handler");
var stack_1 = require("@react-navigation/stack");
var native_1 = require("@react-navigation/native");
var routes_1 = require("./src/config/routes");
var Stack = (0, stack_1.createStackNavigator)();
function App() {
    return (<native_1.NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        {routes_1["default"].map(function (r, i) { return (<Stack.Screen key={i} name={r.name} component={r.component}/>); })}
      </Stack.Navigator>
    </native_1.NavigationContainer>);
}
exports["default"] = App;
