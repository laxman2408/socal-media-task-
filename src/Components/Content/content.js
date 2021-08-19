import React, { useState } from "react";
import { Card, Input, Image } from "antd";
import { Avatar } from "antd";
import { UserOutlined, HeartFilled, MessageFilled } from "@ant-design/icons";
import images from "./dark1.jpg";
import images2 from "./dark2.jpg";
import Images3 from "./sh.jpg";
import propic from "./propic3.jpg";
import images4 from "./bb.jpg";
import propic2 from "./propic2.jpg";
// import images3 from './ram.jpg'
// import images4 from './kb.jpg'
function Content() {
  const [Like, setLike] = useState(250);
  const [Liked, setLiked] = useState(false);
  const HandleClick = () => {
    setLike(Liked ? Like - 1 : Like + 1);
    setLiked(!Liked);
  };

  const [Comment, setComment] = useState("");

  const commentHandler = (e, name) => {
    setComment(e.target.value);
  };
  const submitHanlder = (e) => {
    e.preventDefault();
    setCount(count + 1);
    setComment("");
  };

  const [Comments] = useState([]);
  const [count, setCount] = useState(0);
  const data = Comments;
  return (
    <div style={{ backgroundColor: "#EEF2F5" }}>
      <div>
        <h5 style={{ color: "transparent" }}>laxman</h5>
        <Card
          style={{
            marginLeft: 450,
            alignItems: "center",
            width: 500,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <span>
            {" "}
            <Avatar
              size={30}
              icon={<UserOutlined />}
              style={{ marginBottom: 10, marginRight: 10 }}
            />
            <Input
              placeholder="What happening ? "
              style={{ paddingRight: 10, width: 300 }}
            />
          </span>
        </Card>

        <Card
          style={{
            marginLeft: 450,
            alignItems: "center",
            width: 500,
            marginTop: 20,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          {" "}
          <span>
            <img
              src={propic}
              size={30}
              style={{
                height: 30,
                width: 30,
                borderRadius: "50%",
                marginBottom: 10,
              }}
            />
            {"Tony stark "}
          </span>
          <br></br>
          <img width={450} src={Images3} />
          <br></br>
          <HeartFilled
            style={{ color: "red", marginBottom: 10 }}
            onClick={HandleClick}
          >
            {" "}
          </HeartFilled>
          {Like}
          <MessageFilled style={{ paddingLeft: 10, marginBottom: 10 }} />{" "}
          {count} <br></br>
          <span style={{ paddingTop: 10 }}>
            <Avatar
              size={30}
              icon={<UserOutlined />}
              style={{ marginRight: 10, marginBottom: 10 }}
            />
            <Input
              placeholder="What happening ? "
              style={{ paddingTop: 10, paddingLeft: 10 }}
              style={{ width: 300 }}
              onChange={commentHandler}
              value={Comment}
            />
            <button
              onClick={submitHanlder}
              style={{
                background: "#FF8300",

                borderRadius: 6,
                border: "none",
                color: "white",
                width: "70px",
                textAlign: "center",
                height: "25px",
              }}
            >
              ADD
            </button>
          </span>
        </Card>

        <Card
          style={{
            marginLeft: 450,
            alignItems: "center",
            width: 500,
            marginTop: 20,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          {" "}
          <span>
            <img
              src={propic2}
              size={30}
              style={{
                height: 30,
                width: 30,
                borderRadius: "50%",
                marginBottom: 10,
              }}
            />
            {"Bryan Cranston "}
          </span>
          <br></br>
          <img width={450} src={images4} />
          <br></br>
          <HeartFilled
            style={{ color: "red", marginBottom: 10 }}
            onClick={HandleClick}
          >
            {" "}
          </HeartFilled>
          {Like}
          <MessageFilled style={{ paddingLeft: 10, marginBottom: 10 }} />{" "}
          {count} <br></br>
          <span style={{ paddingTop: 10 }}>
            <Avatar
              size={30}
              icon={<UserOutlined />}
              style={{ marginRight: 10, marginBottom: 10 }}
            />
            <Input
              placeholder="What happening ? "
              style={{ paddingTop: 10, paddingLeft: 10 }}
              style={{ width: 300 }}
              onChange={commentHandler}
              value={Comment}
            />
            <button
              onClick={() => setCount(count + 1)}
              style={{
                background: "#FF8300",

                borderRadius: 6,
                border: "none",
                color: "white",
                width: "70px",
                textAlign: "center",
                height: "25px",
              }}
            >
              ADD
            </button>
          </span>
        </Card>

        <Card
          style={{
            marginLeft: 450,
            alignItems: "center",
            width: 500,
            marginTop: 20,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          {" "}
          <img
            src={propic2}
            size={30}
            style={{
              height: 30,
              width: 30,
              borderRadius: "50%",
              marginBottom: 10,
            }}
          />
          {"Chrishtopher Nolen"}
          <br></br>
          <img width={450} src={images2} />
          <br></br>
          <HeartFilled
            style={{ color: "red", marginBottom: 10 }}
            onClick={HandleClick}
          >
            {" "}
          </HeartFilled>
          {Like}
          <MessageFilled style={{ paddingLeft: 10, marginBottom: 10 }} />{" "}
          {count} <br></br>
          <span style={{ paddingTop: 10 }}>
            <Avatar
              size={30}
              icon={<UserOutlined />}
              style={{ marginRight: 10, marginBottom: 10 }}
            />
            <Input
              placeholder="What happening ? "
              style={{ paddingTop: 10, paddingLeft: 10 }}
              style={{ width: 300 }}
              onChange={commentHandler}
              value={Comment}
            />
            <button
              onClick={() => setCount(count + 1)}
              style={{
                background: "#FF8300",

                borderRadius: 6,
                border: "none",
                color: "white",
                width: "70px",
                textAlign: "center",
                height: "25px",
              }}
            >
              ADD
            </button>
          </span>
        </Card>
      </div>
    </div>
  );
}

export default Content;
