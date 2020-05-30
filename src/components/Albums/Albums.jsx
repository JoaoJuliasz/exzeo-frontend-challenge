import React from 'react';
import { Link } from 'react-router-dom';

import './Albums.scss';

class Albums extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { filteredalbums } = this.props;
        return (
            filteredalbums.map(album =>
                <div className='card-container'>
                    <Link to={'album/' + album.id.attributes['im:id']}>
                            <>
                                <img className='album-img' src={album['im:image'][2].label} alt="music" />
                                <p>{album['im:name'].label}</p>
                                <p>{album['im:artist'].label}</p>
                                <p>{album.category.attributes.label}</p>
                            </>
                    </Link>
                </div>
            )
        );
    }
}
export default Albums;