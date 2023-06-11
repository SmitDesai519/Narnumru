import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import styles from "./style.module.scss";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"; //<MenuOutlined />

const NavLinks = () => (
  <>
    <Link to="/" className={styles.navLink}>
      Home
    </Link>
    <Link to="#" className={styles.navLink}>
      about us
    </Link>
    <Link to="#" className={styles.navLink}>
      contact
    </Link>
    <Link to="#" className={styles.navLink}>
      menu
    </Link>
    <span className={styles.bookTableBtn}>
      <Button>book a table</Button>
    </span>
  </>
);

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.logo}>NARNUMRU</h2>
        <div className={styles.desktopNavLink}>
          <NavLinks />
        </div>
        <Typography className={styles.menuOutlined}>
          {openMenu ? (
            <CloseOutlined onClick={() => setOpenMenu(!openMenu)} />
          ) : (
            <MenuOutlined onClick={() => setOpenMenu(!openMenu)} />
          )}
        </Typography>
      </div>
      {openMenu && (
        <div className={styles.mobileNavLink}>
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Header;
