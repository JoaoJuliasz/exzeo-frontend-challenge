import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Album from './pages/Album/Album.page';
import NotFound from './pages/NotFound.page';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            albums: [],
            isLoading: true,
            error: false,
        }
    }
    componentDidMount() {
        fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
            .then(res => res.json())
            .then(data => this.setState({
                albums: data.feed.entry,
                isLoading: false
            }, () => console.warn(this.state.albums)))
            .catch(err => this.setState({
                error: true,
                isLoading: false,
            },
                () => console.error(err)
            ))
    }
    render() {
        const { albums, isLoading, error } = this.state;
        return (
            <>
                <Link to='/'><h1 className='text-center'>Joao's albums</h1></Link>
                <Switch>
                    <Route exact path='/' component={() =>
                        <Home albums={albums}
                            isLoading={isLoading}
                            error={error}
                        />
                    } />
                    <Route path='/album/:id' render={routerProps => this.renderAlbums(routerProps)} />
                    <Route path='/*' component={NotFound} />
                </Switch>
            </>
        )

    }
    renderAlbums = (routerProps) => {
        const { albums, error } = this.state;
        let albumId = routerProps.match.params.id;
        let foundAlbum = albums.find(album => album.id.attributes['im:id'] === albumId)
        return foundAlbum ? <Album album={foundAlbum} error={error} /> : null
    }
}
export default App;