import { AssignmentIndOutlined,ExpandMore,FeaturedPlayListOutlined,Home, NotificationAddOutlined,PeopleAltOutlined, Search,} from "@mui/icons-material";
import "./css/QuoraHeader.css";
import { Avatar, Button, Input } from "@mui/material";
import Modal from "react-responsive-modal";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import 'react-responsive-modal/styles.css'
import axios from "axios"
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";

const QuoraHeader = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
        .post("/api/questions", body,config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          setIsModalOpen(false);
          window.location.href = "/";
          
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/image-ac3b3.appspot.com/o/Quora%2Fquora.png?alt=media&token=708e9491-4ae0-49aa-bb03-b92c3536e35f"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <Home />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlined />
          </div>
          <div className="qHeader__icon">
            <AssignmentIndOutlined />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlined />
          </div>
          <div className="qHeader__icon">
            <NotificationAddOutlined />
          </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search Question" />
        </div>
        <div className="qHeader__Rem">
          <span onClick={handleLogout}>
          <Avatar src={user?.photo} />
          </span>
          
          <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
        </div>
        <Modal
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar src={user?.photo} className="avatar" />
            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type=" text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                  margin: "5px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
                placeholder="Optional: inclue a link that gives context"
              />
              {inputUrl !== "" && (
                <img
                  style={{
                    height: "40vh",
                    objectFit: "contain",
                  }}
                  src={inputUrl}
                  alt="displayimage"
                />
              )}
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button onClick={handleSubmit} type="submit" className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default QuoraHeader;
