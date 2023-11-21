import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <WrapperBtn >
      <Wrapper >
        <h3 className="font20 extraBold">{title}</h3>
        <StyledParagraph>{text}</StyledParagraph>
        <AuthorText>{author}</AuthorText>
        {tag && <Tag className="coralBg radius6 font13 extraBold">{tag}</Tag>}
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;

const StyledParagraph = styled.p`
  font-size: 16px; // Increased font size
  line-height: 1.6; // Improved line height for readability
  padding: 30px 0;
  color: #333; // Darker color for better readability
`;

const AuthorText = styled.p`
  font-size: 14px; // Slightly larger for author's name
  font-weight: bold; // Bold for emphasis
  color: #555; // Different color for distinction
`;

const Tag = styled.div`
  // Add any specific styles for your tag here
`;

const WrapperBtn = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  
`;
