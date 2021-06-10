import React from "react";
import Footer from "./Footer";
import "./CSS/main.css";
import NavBar from "./NavBar";
import Header from "./Header";

const Main = ({
  title = "My Title",
  description = "My description",
  className = "",
  children,
  isSlideShow = false,
}) => {
  return (
    <div className="" style={{ overflowX: "hidden" }}>
      <df-messenger
        intent="WELCOME"
        chat-title="Sanjay Ghodawat Polytechnic"
        agent-id="4b375b9d-e266-44bb-9298-e32859d0df31"
        language-code="en"
        chat-icon="https://firebasestorage.googleapis.com/v0/b/sgpoly-86d3b.appspot.com/o/staticFiles%2FdialogflowIcon.png?alt=media&token=2f94e296-28bd-43fc-8c5f-cdb2780ca126"
      ></df-messenger>

      <Header />
      <NavBar />
      <div className="backcolor">
        <div className={className} id="page-wrap">
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Main;
