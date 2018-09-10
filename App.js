import React, { Component } from 'react';
// import Navigation from './src/navigation';

import database from './src/data';
import { createNavigationStack } from './src/navigation';
// Use this as the root component
export default class App extends Component {
  render() {
    const Application = createNavigationStack(database);
    return (
      <Application />
    );
  }
}
