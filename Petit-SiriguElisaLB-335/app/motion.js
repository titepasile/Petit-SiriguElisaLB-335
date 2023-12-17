import { DeviceMotion } from 'expo-sensors';
import { View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

const Motion = () => {
  const [circle1Position, setCircle1Position] = useState({ x: 0, y: 0 });
  const [circle2Position, setCircle2Position] = useState({ x: 0, y: 0 });

  useEffect(() => {
    DeviceMotion.addListener(onDeviceMotionChange);
    return () => {
      DeviceMotion.removeListener(onDeviceMotionChange);
    };
  }, []);

  const onDeviceMotionChange = (event) => {
    const { x, y } = event.accelerationIncludingGravity;
    setCircle1Position({ x: x * 200, y: y * 200 });
    setCircle2Position({ x: -x * 200, y: -y * 200 });
  }

  return (
    <View style={styles.container}>
      <View style={[styles.circle1, { left: circle1Position.x, top: circle1Position.y }]} />
      <View style={[styles.circle2, { left: circle2Position.x, top: circle2Position.y }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    position: 'absolute'
  },
  circle2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    position: 'absolute'
  }
});

export default Motion;