import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID f605b0b10d31dca1db51741901011a1d6c3a7b0ce523de64089547bce47964c7'
            },
            params: { query: term }
        });       

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;