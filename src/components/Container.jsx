import React, { useState } from "react";
import styles from "./container.module.css";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Container = () => {
  const [category, setCategory] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.headText}>Book an Appointment in 2 Minutes</div>
        <div className={styles.divContainer}>
          <div className={styles.rowContainer}>
            <div className={styles.labelContainer}>
              <label htmlFor="location">
                Preferred Location/Pincode
                <span style={{ color: "red" }}>*</span>
              </label>
              <div className={styles.inputElement}>
                <div className={styles.location}>
                  <CiLocationOn />
                  <span>Delhi Cantonment New Delhi</span>
                </div>
                <FaLocationCrosshairs />
              </div>
            </div>
            <div className={styles.labelContainer}>
              <label htmlFor="date">
                Select Date
                <span style={{ color: "red" }}>*</span>
              </label>
              <div className={styles.inputElement}>
                <span>Today</span>
                <FaRegCalendarAlt />
              </div>
            </div>
          </div>
          <div className={styles.rowContainer}>
            <div className={styles.labelContainer}>
              <label htmlFor="speciality">
                Select Speciality
                <span style={{ color: "red" }}>*</span>
              </label>
              <div
                onClick={() => setCategory(!category)}
                className={styles.inputElement}
              >
                <span>Category</span>
                <IoIosArrowDown
                  style={{ transform: category ? "rotate(180deg)" : "" }}
                />
              </div>
            </div>
            <div className={styles.labelContainer}>
              <div className={styles.submit}>Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
