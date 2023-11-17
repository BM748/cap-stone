import React from 'react';

// Import only the necessary components from 'mdb-react-ui-kit'
import { MDBBtn } from 'mdb-react-ui-kit';

import './Profile.scss';
import { useParams } from 'react-router-dom';
import ArtistInfo from '../ArtistInfo/ArtistInfo';
import Works from '../Works/works';
import ArtistGallery from '../ArtistGallery/artistGallery';


const Profile = () => {
 //let {UserID}= useParams();

 // const isLoggedInUser = UserID === token.id;

  return (
    <div className="MainProfileDiv">
      <div className='profile-container'>
        <div className='top-portion'>
          <div className="user-profile-bg-img">
            <img id="prf-bg-img" src="" alt="" />
          </div>
          <img src="" alt="" />
          <div className="user-profile-img">
            <img id="prf-img" src="" alt="" />
          </div>
          <div className="userNam">
            Test
          </div>
        </div>
        <div className="bottom-portion">
          <div className="right-side">
            <ArtistInfo/>
          </div>
          <div className="left-side">
            <Works/>
          </div>
          </div>
          <div className="gallery">
            Gallery
            <ArtistGallery/>
          </div>
          <div className="reviews">
          Reviews
          </div>
        
      </div>
    </div>
  );
};

export default Profile;
