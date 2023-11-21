import React from "react";
 import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Testimonials</h1>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
               <BlogBox
                
                text={
                  <p style={paragraphStyle}>
                    "I'm thoroughly impressed with Domain Health's domain health analysis. It's detailed, user-friendly, and incredibly insightful. Our team now navigates email campaigns with greater confidence, knowing our domain is secure and our emails are reaching our audience."
                  </p>
                }
                author={<span style={authorStyle}>Emily Smith, Digital Marketing Lead at InnovateStart</span>}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
               <BlogBox
                
                text={
                  <p style={paragraphStyle}>
                    "The depth of analysis provided by [Your Product Name] is unparalleled. From SSL/TLS assessments to blacklist monitoring, it covers all bases. It's an essential tool for anyone looking to enhance their domain's health and security."
                  </p>
                }
                author={<span style={authorStyle}>Alex Johnson, CEO of WebSecure LLC</span>}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
               <BlogBox
                
                text={
                  <p style={paragraphStyle}>
                    "As a freelancer managing multiple domains, Domain Health has been a lifesaver. The detailed health scores and actionable insights have helped me optimize my clients' domains for better performance and security. It's an invaluable tool for web professionals."
                  </p>
                }
                author={<span style={authorStyle}>Michael Brown, Freelance Web Developer</span>}
              />
            </div>
            </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;



const paragraphStyle = {
  marginBottom: '20px',
  maxWidth: '600px',
};

const authorStyle = {
  fontWeight: 'bold',
  color: '#555',
};
