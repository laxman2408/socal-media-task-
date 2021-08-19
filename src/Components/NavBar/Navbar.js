import React from "react";
import "./Nav.css";
// import { Input } from 'antd';
import { Avatar } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  BellOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
function Navbar() {
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value) => console.log(value);

  return (
    <div
      className="navigation"
      style={{
        position: "sticky",
        height: 60,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div className="leftnav" style={{ position: "sticky", display: "flex" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ul
            style={{
              display: "flex",
              paddingLeft: 10,
              paddingTop: 10,
              listStyle: "none",
              cursor: "pointer",
            }}
          >
            <li className="abc" style={{ paddingLeft: 30 }}>
              {" "}
              <HomeOutlined /> Home
            </li>
            <li style={{ paddingLeft: 30 }}>
              <BellOutlined /> Navigation
            </li>
            <li style={{ paddingLeft: 30 }}>
              <MessageOutlined /> Message
            </li>
          </ul>

          <h1
            style={{
              fontWeight: "500",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "space-between",
              marginLeft: 200,
            }}
          >
            Trip Gyan
          </h1>
        </div>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ marginLeft: 150, padding: 10, width: 400, paddingLeft: 40 }}
        />

        <Avatar size={40} icon={<UserOutlined />} style={{ marginTop: 10 }} />
        <button
          style={{
            background: "#FF8300",
            marginLeft: 20,
            marginTop: 10,
            borderRadius: 6,
            border: "none",
            color: "white",
            width: "100px",
            textAlign: "center",
            height: "25px",
          }}
        >
          Add post
        </button>
      </div>
    </div>
  );
}

export default Navbar;
