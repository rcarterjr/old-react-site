import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParticleComponent from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap';

ReactDOM.render(<ParticleComponent />, document.getElementById('root'));
registerServiceWorker();
