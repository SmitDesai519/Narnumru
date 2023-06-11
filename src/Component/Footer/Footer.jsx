import React from "react";
import { Row, Col } from "antd";
import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Row className={styles.topFooter}>
        <Col xs={24} md={6} lg={9}>
          <h2>NAR</h2>
          <h2>NUMRU</h2>
          <div className={styles.iconsWrapper}>
            <a href="#" target={"_blank"} rel="noopener noreferrer">
              <InstagramOutlined />
            </a>
            <a href="#" target={"_blank"} rel="noopener noreferrer">
              <TwitterOutlined />
            </a>
            <a href="#" target={"_blank"} rel="noopener noreferrer">
              <FacebookOutlined />
            </a>
          </div>
        </Col>
        <Col xs={24} md={5} lg={4}>
          <h4 className={styles.listTitle}>ABOUT</h4>
          <ul className={styles.footerList}>
            <li>ABOUT US</li>
            <li>CAREERS</li>
            <li>CONTACT US</li>
          </ul>
        </Col>
        <Col xs={24} md={7} lg={6}>
          <h4 className={styles.listTitle}>RESERVATIONS</h4>
          <ul className={styles.footerList}>
            <li>REQUEST AN INVOICE</li>
            <li>FIND A RESERVATION</li>
            <li>EMAIL PREFERENCES</li>
          </ul>
        </Col>
        <Col xs={24} md={6} lg={5}>
          <h4 className={styles.listTitle}>NEWS</h4>
          <ul className={styles.footerList}>
            <li>PRESS ROOM</li>
            <li>NEWS OPENING</li>
            <li>MAGAZINE</li>
            <li>NEWSLETTER</li>
          </ul>
        </Col>
      </Row>
      <Row className={styles.bottomFooter}>
        <Col xs={24} md={12} lg={12}>
          © 2021 Narnumru. All Rights Reserved.
        </Col>
        <Col xs={24} md={12} lg={12} className={styles.contactNo}>
          +1(646) 555 39 80
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
