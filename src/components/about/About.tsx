import React from "react";
import style from "./about.module.css";
import { Row, Col } from "react-bootstrap";
import { SectionContainer } from "../section/SectionContainer";
import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiWebrtc,
  SiExpress,
  SiNestjs,
} from "react-icons/si";
export const About = () => {
  return (
    <SectionContainer id="about" title="About Me" count="02">
      <Row>
        <Col md={6} sm={12} className="mb-lg-0 mb-4">
          <div className={style.profile_wrapper}>
            <img src="/media/images/my.png" className={style.profile_pic} />
          </div>
        </Col>
        <Col md={6} sm={12} className="mt-lg-0 mt-4">
          <h2 className={style.subtitle}>Mohammad Nazim Hossain</h2>
          <p className={style.description}>
            Hi! My name is Mohammad and I am a Front-End focused Full Stack Web Developer from Bangladesh. I enjoy designing and developing Web Applications
            that are creative, eye-catching, and usable with the aim to ehance
            and ease your browsing experience.
          </p>
          <p className={style.description}>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className={style.list}>
            <li className={style.list_item}>
              <SiTypescript fontSize={18} className="ms-0 mx-1" /> Typescript
            </li>
            <li className={style.list_item}>
              <SiReact fontSize={18} className="ms-0 mx-1" /> React
            </li>
            <li className={style.list_item}>
              <SiNextdotjs fontSize={18} className="ms-0 mx-1" /> Next.js
            </li>
             <li className={style.list_item}>
              <SiTailwindcss fontSize={18} className="ms-0 mx-1" /> TailwindCSS
            </li>
            <li className={style.list_item}>
              <SiNodedotjs fontSize={18} className="ms-0 mx-1" /> Node.js
            </li>
            <li className={style.list_item}>
              <SiExpress fontSize={18} className="ms-0 mx-1" /> Express.js
            </li>
            <li className={style.list_item}>
              <SiNestjs fontSize={18} className="ms-0 mx-1" /> NestJS
            </li>
            <li className={style.list_item}>
              <SiWebrtc fontSize={18} className="ms-0 mx-1" /> WebRTC
            </li>

            <li className={style.list_item}>
              <SiPostgresql fontSize={18} className="ms-0 mx-1" /> PostgreSQL
            </li>
            <li className={style.list_item}>
              <SiMongodb fontSize={18} className="ms-0 mx-1" /> MongoDB
            </li>
          </ul>

          <div className="d-flex align-items-center mt-4 flex-wrap">
            <a
              href="/media/resume/Mohammad-Nazim-Hossain.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download='Mohammad-Nazim-Hossain.pdf'
              className={style.about_link + " mx-3 ms-0 small"}
            >
              <RiExternalLinkFill fontSize={28} /> &nbsp; Resume
            </a>
            <a
              href="https://github.com/Nazim777"
              target="_blank"
              rel="noopener noreferrer"
              className={style.about_link + " small"}
            >
              <RiGithubFill fontSize={28} /> &nbsp; GitHub
            </a>
          </div>
        </Col>
      </Row>
    </SectionContainer>
  );
};
