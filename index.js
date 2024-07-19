/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import Store from './Components/redux/Store';
const AppRedux=()=>(
    <Provider store={Store}>
        <App></App>

    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);
