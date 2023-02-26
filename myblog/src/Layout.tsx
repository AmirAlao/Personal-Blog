import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Blog from '../pages/Blog';
import Post from './pages/Blog/Post';
import Home from './pages/Home';


const Layout: React.FC = () => {
    return(
        <Router>
           <div>
              <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/post/:slug" component={Post} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    )
};

export default Layout;