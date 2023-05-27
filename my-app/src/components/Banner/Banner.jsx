import React from "react";

import styles from "../../styles/Home.module.css";

import bannerImg from "../../images/banner.jpg";

const Banner = () => (
    <section className={styles.banner}>
        <div className={styles.left}>
            <p className={styles.content}>
                ЛЕТНИЙ
                <span>SALE</span>
            </p>
            <button className={styles.more}>Подробнее</button>
        </div>

        <div
            className={styles.right}
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <p className={styles.discount}>
                экономия до <span>50%</span>
            </p>
        </div>
    </section>
);

export default Banner;