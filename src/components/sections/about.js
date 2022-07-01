import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  #bold-text {
    ${({ theme }) => theme.mixins.strong}
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'Golang',
    'C++',
    'React + Redux',
    'Node.js',
    'GraphQL',
    'PostgreSQL',
    'AWS',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi, my name is Yash, and I enjoy creating projects that can be fun or solves a
              problem. My interest in computer science started in 2016 when I took it as a subject
              in my senior high. I adore that a simple API can reach millions of people, hiding all
              the system complexities and giving real added value.
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of graduating from{' '}
              <a href="https://www.msit.in/" title="Maharaja Surajmal Institute of Technology">
                MSIT
              </a>
              , contributing to projects like{' '}
              <a href="https://nodejs.org/en/" title="Node.js Foundation">
                Node.js
              </a>{' '}
              and{' '}
              <a
                href="https://whatwg.org/"
                title="Web Hypertext Application Technology Working Group">
                WHATWG
              </a>
              , and working for a{' '}
              <a href="https://wednesday.is/" title="Wednesday Solution">
                start-up
              </a>
              . Currently, I’m looking for{' '}
              <strong id="bold-text">
                <span>New Opportunities</span>
              </strong>{' '}
              in Full-Stack Development roles (incl., Distributed, Microservice and Cloud-based
              systems).
            </p>

            <p>
              Apart from that, I also love researching various{' '}
              <a href="https://www.investopedia.com/terms/f/financialinstrument.asp">
                financial instruments
              </a>{' '}
              and{' '}
              <a href="https://www.investopedia.com/articles/active-trading/101014/basics-algorithmic-trading-concepts-and-examples.asp">
                Algo Trading
              </a>{' '}
              strategies for the forex and crypto markets.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
