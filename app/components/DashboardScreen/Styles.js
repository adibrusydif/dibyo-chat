'use strict';

import React, { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  statusBar: {
    backgroundColor: '#ff0000',
  },
  tabBar: {
    marginTop: 20,
  },
  activityContainer: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#000000',
    opacity: 0.5,
  },
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
  },
});