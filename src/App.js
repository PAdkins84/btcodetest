import { Component } from 'react';
import { SearchBox } from './components/search-box/search-box';
import { NewsFeed } from './components/news-feed/news-feed';
import './App.scss';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor() {
    super();

    this.state = {
      newsResults: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&from=2021-04-27&sortBy=popularity&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => this.setState({ newsResults: data }))
  };

  handleChange = e => {
    console.log(e.target.value)
    fetch(`https://newsapi.org/v2/everything?q=${e.target.value}&from=2021-04-27&sortBy=popularity&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => this.setState({ newsResults: data }))
  };

  render() {
  return (
    <div className="container">
      <header>
        <img className="bt-logo" src="https://img01.bt.co.uk/s/assets/290321/images/logo/logo-2018.svg" alt="BT Logo" />
        <div className="header-right">
          <a className="head-links" href="#home">Help</a>
          <a className="head-links" href="#contact">My Bt</a>
          <a className="head-links" href="#about">Email</a>
        </div>
      </header>
      
      
      <SearchBox handleChange={this.handleChange} />
      <NewsFeed news={this.state.newsResults.articles} />
      
      <h1 className="pa-code-test">BT React Code Test - by Peter Adkins - 27/04/21</h1>

      <footer className="footer">
        <div className="footer fixed-bottom mb-0">
          <img className="bt-logo-footer" src="https://img01.bt.co.uk/s/assets/290321/images/logo/logo-2018.svg" alt="BT Logo" />
          <p className="">© {(new Date().getFullYear())}</p>
        </div>
      </footer>
    </div>
  )};
}

export default App;
