import React from "react";
import { View, Text } from "react-native";

import skipStyles from "./skipArea.styles";

const SkipArea: React.FC = () => {
  return (
    <View style={skipStyles.skipContainer}>
      <Text style={skipStyles.skipText}>^^skip</Text>
    </View>
  );
};

export default SkipArea;
