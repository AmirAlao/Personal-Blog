import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../src/App';
import './index.css';
import reportWebVitals from '../src/reportWebVitals';


// Apollo client
const client = new ApolloClient({
  uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cleg252yo0cnj01updto9091w/master",
  cache: new InMemoryCache()
});

ReactDOM.render(
 <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();