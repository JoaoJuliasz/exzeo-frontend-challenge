import React from 'react';
import './Home.styles.scss';
import Albums from '../../components/Albums/Albums';
import NotFound from '../NotFound.page'
import SearchBar from '../../components/SearchField/SearchField'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: '',
    }
  }
  render() {
    const { albums, isLoading, error } = this.props;
    const { searchBar } = this.state
    const filteredalbums = albums.filter(album => {
      return (album['im:name'].label.toLowerCase().includes(searchBar.toLowerCase()) || album['im:artist'].label.toLowerCase().includes(searchBar.toLowerCase()) ||
        album.category.attributes.label.toLowerCase().includes(searchBar.toLowerCase())
      )
    })
    if (isLoading) {
      return (
        <div className='text-center'>Loading...</div>
      )
    }
    if(error) {
      return(
        <NotFound/>
      )
    }
    return (
      <div className='text-center'>
        <SearchBar onChange={this.onChange}/>
        <div className='home-container'>
          <Albums filteredalbums={filteredalbums} />
        </div>
      </div>
    );
  }

  onChange = event => {
    this.setState({
      searchBar: event.target.value
    })
  }

}

export default App;
