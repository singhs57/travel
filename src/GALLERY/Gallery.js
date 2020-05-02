import React from 'react'
import './Gallery.css';
import Header from '../Header/Header';


class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedCategory: 'all',
            imagesObj: [{
               id:'1', category: 'beach',
                src: 'https://pixelz.cc/wp-content/uploads/2016/11/railay-beach-thailand-4k-wallpaper.jpg'
            },
            {
               id:'2', category: 'resorts',
                src: 'https://wallpapercave.com/wp/wp2601482.jpg'
            },
            {
               id:'3', category: 'travels',
                src: 'https://wallpapercave.com/wp/wp2601482.jpg'
            },
            {
               id:'4', category: 'waterparks',
                src: 'https://pixelz.cc/wp-content/uploads/2016/11/railay-beach-thailand-4k-wallpaper.jpg'
            },
            {
               id:'5', category: 'travels',
                src: 'https://wallpapercave.com/wp/wp2601482.jpg'
            },
            {
               id:'6', category: 'travels',
                src: 'https://pixelz.cc/wp-content/uploads/2016/11/railay-beach-thailand-4k-wallpaper.jpg'
            },
            {
               id:'7', category: 'waterparks',
                src: 'https://wallpapercave.com/wp/wp2601482.jpg'
            },
            {
               id:'8', category: 'travels',
                src: 'https://pixelz.cc/wp-content/uploads/2016/11/railay-beach-thailand-4k-wallpaper.jpg'
            },
            {
               id:'9', category: 'travels',
                src: 'https://pixelz.cc/wp-content/uploads/2016/11/railay-beach-thailand-4k-wallpaper.jpg'
            },
            {
               id:'10', category: 'waterparks',
                src: 'https://wallpapercave.com/wp/wp2601482.jpg'
            }, {
               id:'11', category: 'waterparks',
                src: 'https://pixelz.cc/wp-content/uploads/2016/11/railay-beach-thailand-4k-wallpaper.jpg'
            },
            {
               id:'12', category: 'resorts',
                src: 'https://wallpapercave.com/wp/wp2601482.jpg'
            }

            ]
        }
    }
    setImageCategory = (type) => {
        this.setState({ selectedCategory: type });
    }

    render() {
        const { imagesObj, selectedCategory  } = this.state;
        return (
            <div>
            <div className='gallery-container' >
               
                <div className='gallery-text'>
                    <h1>Photo Gallery</h1>
                    <p>Find your personal space.....!</p>
                </div>
                <div className='navigation'>
                    <button className='navi active' onClick={() => this.setImageCategory('all')}>All Images</button>
                    <button className='navi' onClick={() => this.setImageCategory('beach')}>Beaches</button>
                    <button className='navi' onClick={() => this.setImageCategory('resorts')}>Resorts</button>
                    <button className='navi' onClick={() => this.setImageCategory('waterparks')}>Waterparks</button>
                    <button className='navi' onClick={() => this.setImageCategory('travels')}>Travels</button>
                </div>
                <div className='ImageContainer'>

                    <div className='gallery-box'>
                        {imagesObj.map((item, index) =>{
                            if(selectedCategory === item.category || selectedCategory === "all"){
                                return(
                                    <img key={item.id} className='gal-img' src={item.src} alt='im1' />
                                )
                            }
                           
                        }
                        )}

                    </div>

                </div>
            </div>
            </div>
        )
    }

}

export default Gallery;