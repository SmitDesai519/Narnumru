import React, { useState } from "react";
import {
  Image,
  Button,
  Divider,
  Row,
  Col,
  DatePicker,
  TimePicker,
  Select,
  Input,
} from "antd";
import {
  ClockCircleOutlined,
  RightOutlined,
  InstagramOutlined,
  DownOutlined,
} from "@ant-design/icons";
import moment from "moment";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import { content } from "./content";
const { Option } = Select;

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [clientImageIndex, setClientImageIndex] = useState(0);
  const menuSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "250px",
    slidesToShow: 3,
    dots: false,
    arrows: false,
    speed: 500,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "230px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          centerPadding: "200px",
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const clientSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    dots: false,
    arrows: true,
    speed: 500,
    beforeChange: (current, next) => setClientImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.homeContainer}>
        {/* Eat,Drink and love */}
        <div className={styles.orderContainer}>
          <div className={styles.textArea}>
            <div className={styles.heading}>
              <span style={{ color: "#f4cd54" }}>EAT</span>
              <span style={{ color: "#852e4f" }}>DRINK</span>
              <span style={{ color: "#004a2f" }}>LOVE</span>
            </div>
            <span className={styles.orderOnlineBtn}>
              <Button>order online</Button>
            </span>
            <span className={styles.seeMenuBtn}>
              <Button>see menu</Button>
            </span>
          </div>
          <div className={styles.imageArea}>
            <Image
              src="/assets/images/plate-food.png"
              preview={false}
              alt="Food Dish"
            />
          </div>
        </div>
        {/* Divider */}
        <Divider className={styles.timingDivider}>
          <ClockCircleOutlined /> DAILY 10 A.M - 12 P.M
        </Divider>
        {/* About NARNUMRU */}
        <div className={styles.orderContainer}>
          <div className={styles.aboutImage}>
            <Image
              src="/assets/images/bevri.webp"
              preview={false}
              alt="About narnumru"
            />
          </div>
          <div className={styles.aboutText}>
            <h1 style={{ color: "#004a2f" }}>ABOUT NARNUMRU</h1>
            <p>Narnumru - Healthy Food Restaurant</p>
            <p>
              We are located in the heart of downtown New York. Our team has 30
              of finest chefs who look after guests every day.
            </p>
            <p>
              We work for those who know how to appreciate the taste of life.
              For those who understand what proper nutrition and impeccable
              service are. For whom style, atmosphere and aestetics are
              important.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1rem",
              }}
            >
              <a
                href="#"
                rel="noopener noreferrer"
                style={{ color: "#e1bb4b" }}
              >
                read more
              </a>
              <RightOutlined
                style={{
                  color: "#e1bb4b",
                  marginTop: "0.3rem",
                  marginLeft: "0.3rem",
                }}
              />
            </div>
          </div>
        </div>
        {/* Why we are the best */}
        <div className={styles.whyBestContainer}>
          <Divider className={styles.timingDivider}>
            WHY WE ARE THE BEST
          </Divider>
          <Row gutter={[8, 24]}>
            <Col xs={20} md={11} lg={5} className={styles.card}>
              <Image
                src="/assets/images/forks.webp"
                preview={false}
                alt="Fork"
              />
              <h2>Varied Menu</h2>
              <p>
                Narnumru providers a big variety of healthy meals for every
                taste.
              </p>
            </Col>
            <Col xs={20} md={11} lg={5} className={styles.card}>
              <Image
                src="/assets/images/forks.webp"
                preview={false}
                alt="Fork"
              />
              <h2>Healthy meals</h2>
              <p>
                Narnumru always serves to clients the best fresh, organic and
                healthy foods
              </p>
            </Col>
            <Col xs={20} md={11} lg={5} className={styles.card}>
              <Image
                src="/assets/images/forks.webp"
                preview={false}
                alt="Fork"
              />
              <h2>Delivery service</h2>
              <p>
                You can also order online Narnumru always provide you fastest
                and free delivery
              </p>
            </Col>
            <Col xs={20} md={11} lg={5} className={styles.card}>
              <Image
                src="/assets/images/forks.webp"
                preview={false}
                alt="Fork"
              />
              <h2>Best offer</h2>
              <p>We give the best offer for our valuable customers</p>
            </Col>
          </Row>
        </div>
      </div>
      {/* Explore our menu */}
      <div className={styles.menuContainer}>
        <h1>EXPLORE OUR MENU</h1>
        <Slider {...menuSettings} className={styles.menuSlider}>
          {content.menus?.map((dish, idx) => (
            <div key={idx} className={styles.contentImgContainer}>
              <Image src={dish.imgSrc} preview={false} alt="Pizza Image" />
              <div
                className={
                  idx === imageIndex ? styles.content : styles.hideContent
                }
              >
                <h3 style={{ textAlign: "left" }}>{dish.title}</h3>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>{dish.subTitle}</p>
                  <span>{dish.price}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className={styles.seeMenuBtn}>
          <Button>see all menu</Button>
        </div>
      </div>
      <div className={styles.homeContainer}>
        {/* Discover true meaning of test */}
        <div className={styles.orderContainer}>
          <div className={styles.testText}>
            <h1 style={{ fontSize: "1.8125rem", color: "#004a2f" }}>
              Discover True Meaning of Taste
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#004a2f",
                margin: "1.5rem 0",
              }}
            >
              Reserve a table and spen time with plasure!
            </p>
            <span className={styles.bookTableBtn}>
              <Button>book a table</Button>
            </span>
          </div>
          <div className={styles.testImage}>
            <Image
              src="/assets/images/rice-plate.webp"
              preview={false}
              alt="Food Dish"
            />
          </div>
        </div>
        {/* Never feel hungry */}
        <div className={styles.orderContainer}>
          <div className={styles.hungryText}>
            <h1 style={{ fontSize: "1.8125rem", color: "#004a2f" }}>
              NEVER FEEL HUNGRY!
            </h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Downlaod our mobile app.</p>
              <p>Enjoy delicious foods.</p>
            </div>
            <div className={styles.downloadImage}>
              <Image
                src="/assets/images/app-store.png"
                preview={false}
                alt="App store"
              />
              <Image
                src="/assets/images/google-play.png"
                preview={false}
                alt="Google Play"
              />
            </div>
          </div>
          <div className={styles.hungryImage}>
            <Image
              src="/assets/images/mobile-site.png"
              preview={false}
              alt="Food Dish"
            />
          </div>
        </div>
        {/* Instagram follow us */}
        <div className={styles.instaContainer}>
          <div className={styles.instaTitle}>
            <span>
              <InstagramOutlined />
            </span>
            <h1>narnumru</h1>
          </div>
          <Row gutter={[16, 16]}>
            <Col xs={20} md={11} lg={6}>
              <Image
                src="/assets/images/table-for-two.jpg"
                preview={false}
                alt="Table for two"
              />
            </Col>
            <Col xs={20} md={11} lg={6}>
              <Image
                src="/assets/images/table-for-two.jpg"
                preview={false}
                alt="Table for two"
              />
            </Col>
            <Col xs={20} md={11} lg={6}>
              <Image
                src="/assets/images/table-for-two.jpg"
                preview={false}
                alt="Table for two"
              />
            </Col>
            <Col xs={20} md={11} lg={6}>
              <Image
                src="/assets/images/table-for-two.jpg"
                preview={false}
                alt="Table for two"
              />
            </Col>
          </Row>
          <div className={styles.seeMenuBtn}>
            <Button>follow us</Button>
          </div>
        </div>
        {/* Our talented chefs */}
        <div className={styles.orderContainer}>
          <Row gutter={[64, 24]} className={styles.chefGrid}>
            <Col xs={23} md={10} className={styles.chefImage}>
              <Image
                src="/assets/images/chef1.jpg"
                preview={false}
                alt="Chef Image"
              />
            </Col>
            <Col xs={23} md={14}>
              <Image
                src="/assets/images/chef2.jpg"
                preview={false}
                alt="Chef Image"
              />
              <h1>OUR TALENTED CHEFS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nee hendrerit vestibulum nullam consectetur libero odio. Est, at
                sem nam sed mi.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1rem",
                }}
              >
                <a
                  href="#"
                  rel="noopener noreferrer"
                  style={{ color: "#e1bb4b" }}
                >
                  read more
                </a>
                <RightOutlined
                  style={{
                    color: "#e1bb4b",
                    marginTop: "0.3rem",
                    marginLeft: "0.3rem",
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>
        {/* make a reservation */}
        <div className={styles.reservationContainer}>
          <h1>MAKE A RESERVATION</h1>
          <h3>Get in touch with restaurant</h3>
          <Row gutter={[16, 16]}>
            <Col xs={23} md={8}>
              <DatePicker
                defaultValue={moment()}
                suffixIcon={<DownOutlined color="#832e4f" />}
                format="DD/MM/YY"
              />
            </Col>
            <Col xs={23} md={8}>
              <TimePicker
                format="hh:mm A"
                suffixIcon={<DownOutlined color="#832e4f" />}
              />
            </Col>
            <Col xs={23} md={8}>
              <Select defaultValue="14_persons">
                <Option value="12_persons">12 persons</Option>
                <Option value="14_persons">14 persons</Option>
                <Option value="16_persons">16 persons</Option>
              </Select>
            </Col>
          </Row>
          <div className={styles.bookTableBtn}>
            <Button>book a table</Button>
          </div>
        </div>
        {/* What our clients say about us */}
        <div className={styles.clientsContainer}>
          <h1>WHAT OUR CLIENTS SAY ABOUT US</h1>
          {content.clients.map((client, idx) => (
            <>
              {clientImageIndex === idx && (
                <div key={idx} className={styles.reviewText}>
                  <Image
                    src="/assets/images/quote.png"
                    preview={false}
                    alt="Quote image"
                  />
                  <p>{client.review}</p>
                  <h2>{client.name}</h2>
                  <h3>{client.role}</h3>
                </div>
              )}
            </>
          ))}
          <Slider {...clientSettings} className={styles.clientSlider}>
            {content.clients.map((client, idx) => (
              <div key={idx} className={styles.clientImage}>
                <Image src={client.imgSrc} preview={false} alt="Client Image" />
              </div>
            ))}
          </Slider>
        </div>
        {/* Never miss any updates */}
        <div className={styles.emailContainer}>
          <h1>
            NEVER MISS ANY <br /> EVENT UPDATES OR NEW DISHES
          </h1>
          <Row gutter={[16, 16]}>
            <Col
              xs={23}
              md={14}
              lg={12}
              offset={2}
              className={styles.emailInput}
            >
              <Input placeholder="Enter your email" type="email" required />
            </Col>
            <Col xs={23} md={8} lg={6} className={styles.orderOnlineBtn}>
              <Button>subscribe now</Button>
            </Col>
          </Row>
        </div>
        {/* Where we are  */}
        <div className={styles.locationConatiner}>
          <Row gutter={[16, 16]}>
            <Col xs={23} md={10}>
              <h1>WHERE WE ARE</h1>
              <h3>EAST VILLAGE, MANHATTAN ,NY</h3>
              <p>309 east, 5th street, btw 1st & 2nd Av</p>
              <h2>CALL US</h2>
              <p>
                <b>Phone :</b> +(646) 555 48 90
              </p>
              <h2>WRITE US</h2>
              <p>info@narnumru.az</p>
            </Col>
            <Col xs={23} md={14}>
              <Image
                src="/assets/images/location.jfif"
                preview={false}
                alt="Location Image"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
