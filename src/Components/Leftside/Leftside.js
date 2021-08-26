import React, { useEffect, useState } from "react";
import { Card, Input, Image } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import images from "./1.jpg";

function Leftside() {
  const [Post, setPost] = useState([]);
  //   const data = Post;
  useEffect(() => {
    News();
  }, []);
  async function News() {
    const responce = await fetch(
      "https://api.ritekit.com/v1/search/trending?green=1&latin=1"
    );
    const data = await responce.json();
    setPost([data]);
  }

  return (
    <div>
      <Card
        style={{
          marginTop: 20,
          marginLeft: 100,
          //   alignItems: "left",
          textAlign: "left",
          width: 250,
          height: 250,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div>
          {/* <ul> */}
          {Post.map((abc) => {
            return (
              <div>
                <div style={{ display: "flex" }}>
                  <h3>Hashtags</h3>
                  <h5
                    style={{
                      float: "right",
                      marginLeft: 100,

                      color: "#FF8300",
                    }}
                  >
                    Change
                  </h5>
                </div>
                <li
                  style={{
                    color: "#FF8300",
                    listStyle: "none",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                  key={abc.id}
                >
                  #{abc.tags[0].tag}
                </li>
                <li
                  style={{
                    color: "#FF8300",
                    listStyle: "none",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                  key={abc.id}
                >
                  #{abc.tags[1].tag}
                </li>
                <li
                  style={{
                    color: "#FF8300",
                    listStyle: "none",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                  key={abc.id}
                >
                  #{abc.tags[2].tag}
                </li>
                <li
                  style={{
                    color: "#FF8300",
                    listStyle: "none",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                  key={abc.id}
                >
                  #{abc.tags[4].tag}
                </li>
                <li
                  style={{
                    color: "#FF8300",
                    listStyle: "none",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                  key={abc.id}
                >
                  #{abc.tags[3].tag}
                </li>
                <li
                  style={{
                    color: "#FF8300",
                    listStyle: "none",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                  key={abc.id}
                >
                  #{abc.tags[5].tag}
                </li>
                <li
                  style={{
                    color: "#FF8300",
                    listStyle: "none",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                  key={abc.id}
                >
                  #{abc.tags[6].tag}
                </li>
              </div>
            );
          })}
          {/* </ul> */}
        </div>
      </Card>{" "}
      <Card
        style={{
          marginTop: 20,
          marginLeft: 100,
          alignItems: "center",
          width: 250,
          height: 250,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div style={{ display: "flex" }}>
          <h3>Places Near you</h3>
          <h5
            style={{
              float: "right",
              marginLeft: 40,
              marginTop: 10,
              color: "#FF8300",
            }}
          >
            View all
          </h5>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src={images}
            style={{ height: 30, width: 30, borderRadius: "50%" }}
          ></img>
          <div style={{ marginLeft: 30 }}>
            <h4 style={{ color: "#FF8300" }}>cafe coffee day</h4>
            <p style={{ color: "grey", marginTop: -10 }}>chennai</p>
            <span>
              <StarFilled style={{ color: "#FF8300" }} />
              <StarFilled style={{ color: "#FF8300" }} />
              <StarFilled style={{ color: "#FF8300" }} />
              <StarFilled style={{ color: "#FF8300" }} />
              <StarOutlined />
            </span>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <img
            src={images}
            style={{ height: 30, width: 30, borderRadius: "50%" }}
          ></img>
          <div style={{ marginLeft: 30 }}>
            <h4 style={{ color: "#FF8300" }}>wings cafe</h4>
            <p style={{ color: "grey", marginTop: -10 }}>chennai , velacheri</p>
            <span>
              <StarFilled style={{ color: "#FF8300" }} />
              <StarFilled style={{ color: "#FF8300" }} />
              <StarFilled style={{ color: "#FF8300" }} />
              <StarOutlined />
              <StarOutlined />
            </span>
          </div>
        </div>
      </Card>
      <Card
        style={{
          marginTop: 20,
          marginLeft: 100,
          alignItems: "center",
          width: 250,
          height: 200,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div style={{ display: "flex" }}>
          <h3>Groups</h3>
          <h5
            style={{
              float: "right",
              marginLeft: 40,
              marginTop: 10,
              color: "#FF8300",
            }}
          >
            View all
          </h5>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src={images}
            style={{ height: 30, width: 30, borderRadius: "50%" }}
          ></img>
          <div style={{ marginLeft: 30 }}>
            <h4 style={{ color: "#FF8300" }}>travelors</h4>
            <p style={{ color: "grey", marginTop: -10 }}>24 members</p>
          </div>
          <div>
            <button
              style={{
                color: "white",
                backgroundColor: "#FF8300",
                borderColor: "#FF8300",

                // border: 2,
              }}
            >
              Add
            </button>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <img
            src="https://1.bp.blogspot.com/-3MGn5TwdTE0/X5cMKA-O5II/AAAAAAAAftk/kbH3sP5aRrk5_ftohRWwXDHa5T8JoyzcgCLcBGAsYHQ/s1280/friendship%2Bdp%2B%25283%2529.jpg"
            style={{ height: 30, width: 30, borderRadius: "50%" }}
          ></img>
          <div style={{ marginLeft: 30 }}>
            <h4 style={{ color: "#FF8300" }}>ui developers</h4>
            <p style={{ color: "grey", marginTop: -10 }}>32 members</p>
          </div>
          <div>
            <button
              style={{
                color: "white",
                backgroundColor: "#FF8300",
                borderColor: "#FF8300",
                float: "right",

                // border: 2,
              }}
            >
              Add
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Leftside;
