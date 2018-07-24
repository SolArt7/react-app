import React, {Component} from 'react';
import ArticleList from "./ArticleList";
import articles from '../fixtures'
import UserForm from './UserForm/UserForm';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
			articles: articles
        };
    }
    
    render() {
        const {articles} = this.state;
        return (
            <div>
                <UserForm articles={articles} />
                <h1>Articles</h1>
                <ArticleList />
            </div>
        )
    }
}

export default App;