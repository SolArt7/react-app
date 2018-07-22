import React, {Component} from 'react';
import ArticleList from "./components/ArticleList";
import articles from './fixtures'
import UserForm from './components/UserForm';
import Counter from './components/Counter';

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
                <Counter />
                <UserForm articles={articles} />
                <h1>Articles</h1>
                <ArticleList articles={articles} />
            </div>
        )
    }
}

export default App;