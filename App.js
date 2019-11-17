import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { DestinationButton } from "./components/DestinationButton";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Polyline from "@mapbox/polyline";

export default class MapApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null
    };

    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({
      enabledHighAccuracy: true
    });
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045
    };
    this.setState({ region: region });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Hi </Text>
        <DestinationButton />
        <MapView
          initialRegion={this.state.region}
          showCompass={true}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          rotateEnabled={false}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
