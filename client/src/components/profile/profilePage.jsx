import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Works from '../Works/works';
import ArtistGallery from '../ArtistGallery/artistGallery';
import Reviews from '../Reviews/reviews';
import ArtistInfo from '../ArtistInfo/ArtistInfo';
import "./Profile.scss"

const Profile = () => {
  const { ArtistID } = useParams();
  const [artistData, setArtistData] = useState({});

  useEffect(() => {
    // Fetch user data using Axios
    const fetchArtistData = async () => {
      try {
        const response = await axios.get(`http://localhost:5081/api/artist/${ArtistID}`); 
        setArtistData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchArtistData();
  }, [ArtistID]);

  return (
    <div className="MainProfileDiv">
      <div className='profile-container'>
        <div className='top-portion'>
          <div className="user-profile-bg-img">
            <img id="prf-bg-img"  alt="" />
          </div>
          <img src="" alt="" />
          <div className="user-profile-img">
            <img id="prf-img" src="https://i.redd.it/jfgtkxb2rv671.png" alt="" />
          </div>
          <div className="userNam">
            BoBo
            {artistData.username}
          </div>
        </div>
        <div className="bottom-portion">
          <div className="right-side">
            <ArtistInfo/>
          </div>
          <div className="left-side">
            <Works />
          </div>
        </div>
        <div className="gallery">
          Gallery
          <ArtistGallery />
        </div>
        <div className="reviews">
          Review
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Profile;
