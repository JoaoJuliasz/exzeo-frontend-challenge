import React from 'react';
import NotFound from '../NotFound.page';
import './Album.styles.scss';
const Album = ({ album, error }) => {
    if (error) {
        return (
            <NotFound />
        )
    }
    return (
        <div className='text-center music-page-container'>
            <img className='dynamic-page-img album-img' src={album['im:image'][2].label} alt="music" />
            <p className='infos-title'>Album Name</p>
            <h2 className='infos'>{album['im:name'].label}</h2>
            <p className='infos-title'>Artist/Band Name</p>
            <h3 className='infos'>{album['im:artist'].label}</h3>
            <p className='infos-title'>Link to artist/band profile</p>
            <a href={album['im:artist'].attributes && album['im:artist'].attributes.href ? album['im:artist'].attributes.href : '/*'} target='_blank'>
                <h3 className='infos'>Artist/Band Profile</h3>
            </a>
            <p className='infos-title'>album Release Date</p>
            <h4 className='infos'>{album['im:releaseDate'].attributes.label}</h4>
            <p className='infos-title'>album Price</p>
            <a href={album.link.attributes.href} target='_blank'><h4 className='infos'>{album['im:price'].label}</h4></a>
            <p className='album-rights'>Rights{album.rights.label}</p>

        </div>
    );
}
export default Album;