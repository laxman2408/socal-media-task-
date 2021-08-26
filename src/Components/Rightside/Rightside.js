import React, { useEffect, useState } from "react";
import { Card, Input, Image } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import images from "./1.jpg";
function Rightside() {
  const [Post, setPost] = useState([]);
  useEffect(() => {
    News();
  }, []);
  async function News() {
    const responce = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a621eb217a7b4784ae2356f5c16ca061"
    );
    const data = await responce.json();
    setPost([data]);
  }

  return (
    <div>
      <Card
        style={{
          marginTop: 20,
          marginLeft: 30,
          alignItems: "center",
          width: 250,
          height: 300,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        {" "}
        <div style={{ display: "flex" }}>
          <h4>People Near you</h4>
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
        <div>
          {Post.map((user) => {
            return (
              <div>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://tuckys.com/wp-content/uploads/2020/08/Singapore-portrait-photographer_studio-portrait-photography_Tuckys-photography_corporate-portraits_Seagate_-BS-Teh-senior-VP-of-Global-sales-2.jpg"
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: "50%",
                      marginTop: 10,
                    }}
                  ></img>
                  <div style={{ marginLeft: 30 }}>
                    <h4> {user.articles[0].author}</h4>
                    <button
                      style={{
                        borderRadius: " 10px",
                        color: "#FF8300",
                        backgroundColor: "white",
                        borderColor: "#FF8300",
                        width: 70,
                        height: 25,
                        // border: 2,
                      }}
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: "50%",
                      marginTop: 10,
                    }}
                  ></img>
                  <div style={{ marginLeft: 30 }}>
                    <h4> {user.articles[1].author}</h4>
                    <button
                      style={{
                        borderRadius: " 10px",
                        color: "#FF8300",
                        backgroundColor: "white",
                        borderColor: "#FF8300",
                        width: 70,
                        height: 25,
                        // border: 2,
                      }}
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTJSOb_78OweTVGiqNTdZWrw0U5agHkNiI3tbUVW7Z_yLq_7XA_hKWVitt2zQQuN-Wv8&usqp=CAU"
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: "50%",
                      marginTop: 10,
                    }}
                  ></img>
                  <div style={{ marginLeft: 30 }}>
                    <h4> {user.articles[2].author}</h4>
                    <button
                      style={{
                        borderRadius: " 10px",
                        color: "#FF8300",
                        backgroundColor: "white",
                        borderColor: "#FF8300",
                        width: 70,
                        height: 25,
                        // border: 2,
                      }}
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYMr4NyD9mAiLimFtY60_deSALyvgb-cU7L64EdwdUJcj0RSDbIdFm0KPGQDMt0VNHkM&usqp=CAU"
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: "50%",
                      marginTop: 10,
                    }}
                  ></img>
                  <div style={{ marginLeft: 30 }}>
                    <h4> {user.articles[3].author}</h4>
                    <button
                      style={{
                        borderRadius: " 10px",
                        color: "#FF8300",
                        backgroundColor: "white",
                        borderColor: "#FF8300",
                        width: 70,
                        height: 25,
                        // border: 2,
                      }}
                    >
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
      <Card
        style={{
          marginTop: 20,
          marginLeft: 30,
          alignItems: "center",
          width: 250,
          height: 350,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <h3 style={{ fontWeight: "500" }}>News</h3>
        <div>
          {/* <ul> */}
          {Post.map((abc) => {
            return (
              <div>
                <li
                  style={{
                    color: "#FF8300",
                    listStyle: "none",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                  key={abc.id}
                >
                  {abc.articles[0].title}
                </li>
                <li
                  style={{
                    color: "grey",
                    listStyle: "none",
                    fontSize: 14,
                  }}
                  key={abc.id}
                >
                  {abc.articles[0].publishedAt}
                </li>
              </div>
            );
          })}
          {/* </ul> */}
        </div>
        <br></br>
        <div>
          {/* <ul> */}
          {Post.map((abc) => {
            return (
              <div>
                <li
                  style={{
                    color: "#FF8300",
                    listStyle: "none",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                  key={abc.id}
                >
                  {abc.articles[1].title}
                </li>
                <li
                  style={{
                    color: "grey",
                    listStyle: "none",
                    fontSize: 14,
                  }}
                  key={abc.id}
                >
                  {abc.articles[1].publishedAt}
                </li>
              </div>
            );
          })}
          {/* </ul> */}
        </div>
      </Card>{" "}
    </div>
  );
}

export default Rightside;
