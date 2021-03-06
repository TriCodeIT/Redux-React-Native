import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement, reset} from './redux/actions/counter';

class Counter extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>REDUX itu GAMPANG</Text>
        <Text style={styles.textcount}>{this.props.count}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight
            onPress={this.props.increment}
            style={styles.increment}>
            <Text style={styles.textcnt}>INCREMENT</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.props.decrement}
            style={styles.decrement}>
            <Text style={styles.textcnt}>DECREMENT</Text>
          </TouchableHighlight>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableHighlight onPress={this.props.reset} style={styles.reset}>
            <Text style={styles.textcnt}>RESET</Text>
          </TouchableHighlight>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableHighlight
            onPress={() => this.props.increment({payload: 5})}
            style={styles.increment}>
            <Text style={styles.textcnt}>INCREMENT + 5</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.decrement({payload: 5})}
            style={styles.decrement}>
            <Text style={styles.textcnt}>DECREMENT - 5</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({count: state.count});

const mapDispatchToProps = dispatch => ({
  increment: ({payload}) => dispatch(increment(payload)),
  decrement: ({payload}) => dispatch(decrement(payload)),
  //   increment5: () => dispatch({type: 'INCREMENT', payload: 5}),
  //   decrement5: () => dispatch({type: 'DECREMENT', payload: 5}),
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    alignItems: 'center',
    margin: 10,
  },
  textcount: {
    fontSize: 35,
    alignItems: 'center',
    margin: 10,
  },
  increment: {
    backgroundColor: 'green',
    marginRight: 5,
    padding: 10,
  },
  decrement: {
    backgroundColor: 'red',
    marginLeft: 5,
    padding: 10,
  },
  textcnt: {
    fontSize: 20,
    color: 'white',
  },
  reset: {
    backgroundColor: 'black',
    marginLeft: 5,
    padding: 10,
  },
});
