import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');

export default class NotifPanel extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View>
          <Text style={styles.contentTitle}>Content Title</Text>
          <Image style={styles.contentImage} source={require('../img/tinder-photo.jpg')} />
          <Text style={styles.contentBody}>This is the content body</Text>
        </View>

        <View style={styles.panelContainer}>
          <Interactable.View
            verticalOnly={true}
            snapPoints={[{y: 0}, {y: -Screen.height + 80}]}
            initialPosition={{y: -Screen.height + 80}}
            boundaries={{bottom: 0, bounce: 2, haptics: true}}>
            <View style={styles.panel}>
              <Text style={styles.panelHeader}>Today</Text>
              <Notification title='First Notification' body='This is the body of the first notification' />
              <Notification title='Second Notification' body='This is the body of the 2nd notification' />
              <Notification title='Third Notification' body='This is the body of the 3rd notification' />
              <Text style={styles.panelHeader}>Yesterday</Text>
              <Notification title='Fourth Notification' body='This is the body of the 4th notification' />
              <View style={styles.panelFooter}>
                <Text style={styles.panelFooterText}>4 NOTIFICATIONS</Text>
                <View style={styles.panelHandle} />
              </View>
            </View>
          </Interactable.View>
        </View>

      </View>
    );
  }
}

class Notification extends Component {
  render() {
    return (
      <View style={styles.notificationContainer}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle}>{this.props.title}</Text>
        </View>
        <Text style={styles.notificationBody}>{this.props.body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  panel: {
    height: Screen.height,
    backgroundColor: '#182e43f0',
    padding: 15,
    paddingTop: 50
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 10
  },
  contentImage: {
    width: Screen.width-50,
    height: Screen.width-50
  },
  contentBody: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10
  },
  panelHeader: {
    fontSize: 24,
    color: 'white',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 10
  },
  panelFooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  panelFooterText: {
    fontSize: 13,
    color: '#ffffff80',
    marginBottom: 10
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff80'
  },
  notificationContainer: {
    backgroundColor: '#b0cbdd',
    borderRadius: 14,
    marginBottom: 10
  },
  notificationHeader: {
    height: 30,
    backgroundColor: '#c3d6e1',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingHorizontal: 20
  },
  notificationTitle: {
    marginTop: 5,
    fontSize: 16,
    color: '#1c5675'
  },
  notificationBody: {
    marginVertical: 14,
    marginHorizontal: 20
  }
});
