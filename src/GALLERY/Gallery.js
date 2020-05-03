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
                src: 'https://www.itl.cat/pngfile/big/22-225234_maldives-resorts.jpg'
            },
            {
               id:'3', category: 'travels',
                src: 'https://www.ezzholidays.com/wp-content/uploads/2016/04/banner5-1024x640.jpg'
            },
            {
               id:'4', category: 'waterparks',
                src: 'https://bonadvisor.com/wp-content/uploads/2018/07/1531990358-9389-Chimelong-Waterpark-Canton.jpg'
            },
            {
               id:'5', category: 'travels',
                src: 'https://iphone-wallpaper.pics/wallpaper/3/4/34b53aa9e3072e3dd711b5140561f70c_8058d0fff6346945471fe2a921d12a24_raw.jpg'
            },
            {
               id:'6', category: 'beach',
                src: 'https://cdn.wallpapersafari.com/20/30/r3JdIG.jpg'
            },
            {
               id:'7', category: 'waterparks',
                src: 'https://trendwaterpark.com/uploads/allimg/160829/1-160R9164406-50.jpg'
            },
            {
               id:'8', category: 'travels',
                src: 'https://www.thomsonmedical.com/wp-content/uploads/2017/08/iStock-597927618.jpg'
            },
            {
               id:'9', category: 'beach',
                src: 'https://www.itl.cat/pngfile/big/22-224480_goa-wallpaper-hawaii-background.jpg'
            },
            {
               id:'10', category: 'waterparks',
                src: 'https://www.fodors.com/wp-content/uploads/2019/12/06_LazyRiverAdults__AtlantisParadiseIsland_6.-Rapids-River-2.jpg'
            }, {
               id:'11', category: 'waterparks',
                src: 'https://blog.atlantisthepalm.com/wp-content/uploads/2017/11/shark-safari.jpg'
            },
            {
               id:'12', category: 'resorts',
                src: 'https://wallpapercave.com/wp/wp2406649.jpg'
            },
            {
               id:'13', category: 'resorts',
                src: 'https://wallpaperplay.com/walls/full/b/b/b/324094.jpg'
            },
            {
               id:'14', category: 'resorts',
                src: 'https://www.wallpaperback.net/wp-content/uploads/2018/09/shanti-hotel-nira-resort981288970.jpg'
            }
            ,
            {
               id:'15', category: 'beach',
                src: 'https://wallpaperaccess.com/full/35961.jpg'
            }
            ,
            {
               id:'16', category: 'beach',
                src: 'https://www.planetware.com/wpimages/2019/08/thailand-top-resorts-for-couples-the-shore-at-katathani.jpg'
            },
            {
               id:'17', category: 'resorts',
                src: 'https://data.whicdn.com/images/17896791/original.jpg'
            },
            {
               id:'18', category: 'travels',
                src: 'https://medvisit.io/wp-content/uploads/2018/03/travel.jpg'
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