import { Component } from 'react';
import { SearchBox } from './components/search-box/search-box';
import { NewsFeed } from './components/news-feed/news-feed';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newsResults: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-04-26&sortBy=popularity&apiKey=e87358ae2179467192971f92961d5b8f')
      .then(response => response.json())
      .then(data => this.setState({ newsResults: data }))
  };

  handleChange = (e) => {
    console.log(e.target.value)
    // this.setState({ searchField: e.target.value })
  };

  render() {
  return (
    <div>
      <img className="bt-logo" src="https://img01.bt.co.uk/s/assets/290321/images/logo/logo-2018.svg" alt="BT Logo" />
      <h1>BT React Code Test - by Peter Adkins - 26/04/21</h1>
      
      <SearchBox handleChange={this.handleChange} />
      <NewsFeed />

      
    </div>
  )};
}

export default App;
