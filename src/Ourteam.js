import React from 'react';
import './Ourteam.css';
import Button from '@material-ui/core/Button';



const Ourteam = (props) => {
return(
<div className='wrapper'>
    <h1>Our Team</h1>
    <p>"Teamwork begins by building trust"</p>
<div className='team'>
   <div className='team-member'>
       <div className='team-images'>
           <img src='https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2017/08/final-1.png' alt='image1'/>
       </div>
    <h3>Shubham Singh</h3>
    <p className='role'>UI Developer</p>
    <p>
    Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, 
    such as adding or removing a star to an item.
    </p>
    
<Button variant="contained" color="primary">
  Know More
</Button>
   </div>
   <div className='team-member'>
   <div className='team-images'>
           <img src='https://larkr.com/wp-content/uploads/2017/12/jon-circle-headshot-p-500.png' alt='image2'/>
       </div>
   <h3>Vishal Snehi</h3>
    <p className='role'>Accountant</p>
    <p>
    Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, 
    such as adding or removing a star to an item.
    </p>
    <Button variant="contained" color="primary">
  Know More
</Button>
   </div>
   <div className='team-member'>
   <div className='team-images'>
           <img src='https://images.squarespace-cdn.com/content/v1/5a05973fdc2b4a4f11a58402/1546973548937-AOIZCR7VTYMQV1EK9XGI/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmrMDYraMJMCQwFxTSOIP7LpSBEQpA-g5k6VTjWbSuadHJq0dp98hg5AZvIaPb3DoM/Henry+Circle.png' alt='image3'/>
       </div>
   <h3>Prabir Kumar Das</h3>
    <p className='role'>Tester</p>
    <p>
    Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, 
    such as adding or removing a star to an item.
    </p>
    <Button variant="contained" color="primary">
  Know More
</Button>
   </div>
   <div className='team-member'>
   <div className='team-images'>
           <img src='https://levelupliving.com/wp-content/uploads/2019/07/Lucas-Headshot-for-Email.png' alt='image4'/>
       </div>
   <h3>Haddi</h3>
    <p className='role'>Dealer</p>
    <p>
    Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, 
    such as adding or removing a star to an item.
    </p>
    <Button variant="contained" color="primary">
  Know More
</Button>
   </div>
</div>
</div>

);
}
export default Ourteam;