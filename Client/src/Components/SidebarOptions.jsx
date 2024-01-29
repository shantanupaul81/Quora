import "./css/SidebarOptions.css";
import React from "react";
import AddIcon from '@mui/icons-material/Add';


const SidebarOptions = () => {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/image-ac3b3.appspot.com/o/Quora%2FHistory.jpg?alt=media&token=45920861-4bb8-40af-866b-1a28b91f3e2b"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/image-ac3b3.appspot.com/o/Quora%2FBusiness.jpg?alt=media&token=dd9918ad-7ad1-4106-8b54-660531e0611e"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/image-ac3b3.appspot.com/o/Quora%2Fpexels-cottonbro-studio-4101143.jpg?alt=media&token=8ce11a12-a4a6-4a6a-963e-8d843cd13c72"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/image-ac3b3.appspot.com/o/Quora%2Fcooking.jpg?alt=media&token=862afe4d-73c0-484a-a6a1-1f44a844c125"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/image-ac3b3.appspot.com/o/Quora%2FMusic.jpg?alt=media&token=8174216b-fcf3-4fd6-9297-414cd039a3e3"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/image-ac3b3.appspot.com/o/Quora%2FScience.jpg?alt=media&token=9d4f7ae8-3932-4b0b-95c8-9951bb55c18f"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/image-ac3b3.appspot.com/o/Quora%2FHealth.jpg?alt=media&token=59598f80-e92a-4577-9a7e-fa70ab8cce5a"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/image-ac3b3.appspot.com/o/Quora%2Fpexels-nathan-engel-436413.jpg?alt=media&token=54cf8dab-6fc2-43bc-998a-e367a1f6b7b8"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/image-ac3b3.appspot.com/o/Quora%2FTechnology.jpg?alt=media&token=04e56950-6166-4e31-b300-da933d66fcb3"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/image-ac3b3.appspot.com/o/Quora%2FEducation.jpg?alt=media&token=1b34ce20-40c9-437c-a53a-29b86dbfbf2d"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <AddIcon/>
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  )
}

export default SidebarOptions
