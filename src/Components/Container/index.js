import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Colors} from '../../Constants/Colors';

const Container = ({children}) => {
  return (
    <ScrollView style={{backgroundColor: Colors.Red}}>{children}</ScrollView>
  );
};

export default Container;
