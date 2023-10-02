import React from 'react';
import './Footer.scss';

function Footer(props) {
    const linkObjects = [
        { "content": "This", "id": "id1" },
        { "content": "is the beginning", "id": "id2" },
        { "content": "of the craft", "id": "id3" },
        { "content": "which we all", "id": "id4" },
        { "content": "developed from ages", "id": "id5" }
    ];

    const bottomLinks = [
        { "content": "This", "id": "id1" },
        { "content": "beginning", "id": "id2" },
        { "content": "of ", "id": "id3" },
        { "content": "which ", "id": "id4" },
        { "content": " from ages", "id": "id5" },
        { "content": " craft", "id": "id6" },
        { "content": "developed ", "id": "id7" }
    ];

    const createLinks = (links) => {
        return links.map(link => (
            <li key={link.id}><a href="#">{link.content}</a></li>
        ));
    };

    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-top'>
                    <div className='first-row'>
                        <ul>
                            {createLinks(linkObjects)}
                        </ul>
                    </div>
                    <div className='second-row'>
                        <ul>
                            {createLinks(linkObjects)}
                        </ul>
                    </div>
                    <div className='third-row'>
                        <ul>
                            {createLinks(linkObjects)}
                        </ul>
                    </div>
                    <div className='fourth-row'>
                        <ul>
                            {createLinks(linkObjects)}
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <ul>
                        {createLinks(bottomLinks.slice(0, 5))}
                    </ul>
                    <ul>
                        {createLinks(bottomLinks.slice(5))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
