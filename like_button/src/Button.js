import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Button = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("http://https://tl-9glx.onrender.com/likes")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error(err));
  }, []);
  const handleLikeToggle = () => {
    if (liked) return; // prevent multiple likes from same user in this simple example
    fetch("http://https://tl-9glx.onrender.com/likes/increment", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setLiked(true);
      })
      .catch(console.error);

    //   const handleLikeToggle = () => {
    //     if (!liked) {
    //       setCount((prev) => prev + 1);
    //     } else {
    //       setCount((prev) => prev - 1);
    //     }
    //     setLiked((prev) => !prev);
  };

  return (
    <StyledWrapper>
      <div className="like-button">
        <input
          className="on"
          id="heart"
          type="checkbox"
          checked={liked}
          onChange={handleLikeToggle}
        />
        <label className="like" htmlFor="heart">
          <svg
            className="like-icon"
            fillRule="nonzero"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
          {/* <span className="like-text">Likes</span> */}
        </label>
        <span className="like-count one">{liked ? count - 1 : count}</span>
        <span className="like-count two">{liked ? count : count + 1}</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #heart {
    display: none;
  }

  .like-button {
    position: relative;
    cursor: pointer;
    display: flex;
    height: 30px;
    width: 50px;
    border-radius: 5px;
    border: none;
    background-color: #ef9b9c;
    overflow: hidden;
    box-shadow: inset -2px -2px 2px rgba(255, 255, 255, 0.2),
      inset 2px 2px 2px rgba(0, 0, 0, 0.1),
      4px 4px 10px rgba(239, 155, 156, 0.4),
      -2px -2px 8px rgba(255, 255, 255, 0.1);
  }

  .like {
    width: 60%;
    height: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-evenly;
  }

  .like-icon {
    fill: #505050;
    height: 22px;
    width: 22px;
  }

  .like-text {
    color: #505050;
    font-size: 14px;
    font-family: "Verdana", Tahoma, Geneva, Verdana, sans-serif;
  }

  .like-count {
    position: absolute;
    right: 0;
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #505050;
    font-size: 16px;
    // border-left: 2px solid #4e4e4e;
    transition: all 0.5s ease-out;
    padding-right: 5px;
  }

  .like-count.two {
    transform: translateY(40px);
  }

  // changes the heart color
  .on:checked ~ .like .like-icon {
    fill: #fc4e4e;
    animation: enlarge 0.2s ease-out 1;
    transition: all 0.2s ease-out;
  }

  // changes the count number
  .on:checked ~ .like-count.two {
    transform: translateX(0);
    color: #505050;
  }

  .on:checked ~ .like-count.one {
    transform: translateY(-40px);
  }

  @keyframes enlarge {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;

export default Button;
