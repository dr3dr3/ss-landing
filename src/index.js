import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createInstance } from '@featurevisor/sdk';
import { FeaturevisorProvider } from '@featurevisor/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const f = createInstance({
  datafileUrl: "https://dr3dr3.github.io/devops-demo-ff/datafiles/ci/datafile-tag-all.json"
});

root.render(
  <React.StrictMode>
    <FeaturevisorProvider instance={f}>
      <App />
    </FeaturevisorProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
