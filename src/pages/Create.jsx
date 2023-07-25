import React, { useState } from "react";

import Header from "../common/Header";
import Container from "../common/Container";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

export default function Create({ addPost }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //addPost함수를 받아오기
  const onAddButtonClickHandler = () => {
    const newPost = {
      id: uuid(),
      title,
      content,
    };
    addPost(newPost); //addPost함수에 newPost를 인자로 넣어 실행
    navigate("/"); //등록후 메인페이지로 이동
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <form
          style={{
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            console.log("제출!");
          }}
        >
          <div>
            <input
              placeholder="제목"
              value={title}
              onChange={titleChangeHandler}
              style={{
                width: "100%",
                height: "60px",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              height: "400px",
            }}
          >
            {/* 내용 */}
            <textarea
              placeholder="내용"
              value={content}
              onChange={contentChangeHandler}
              style={{
                resize: "none",
                height: "100%",
                width: "100%",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "12px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            onClick={onAddButtonClickHandler}
            style={{
              width: "100%",
              height: "40px",
              border: "none",
              color: "white",
              borderRadius: "12px",
              backgroundColor: "skyblue",
              cursor: "pointer",
            }}
          >
            추가하기
          </button>
        </form>
      </Container>
    </>
  );
}
