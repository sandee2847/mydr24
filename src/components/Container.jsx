import React, { useState, useRef } from "react";
import styles from "./container.module.css";
import DatePicker from "react-datepicker";
// react icons start
import { CiLocationOn } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
// react icons end
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const Container = () => {
  // Create a ref for the date input
  const datePickerRef = useRef(null);
  // handle category dropdown
  const [category, setCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [selectedDate, setSelectedDate] = useState(null);
  const [location, setLocation] = useState("");

  // Sample categories for dropdown
  const categories = ["Cardiology", "Dermatology", "Orthopedics", "Pediatrics"];

  // Function to handle date picker opening
  const openDatePicker = () => {
    datePickerRef.current.setFocus(); // Open the date picker
  };

  const handleSubmit = () => {
    if (location === "") {
      toast.error("Location is required!");
    } else if (!selectedDate) {
      toast.error("Date is required!");
    } else if (!categories.includes(selectedCategory)) {
      toast.error("Category is required!");
    } else {
      toast.success("Submit successfully!");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* form head text */}
        <div className={styles.headText}>Book an Appointment in 2 Minutes</div>
        {/* form inputs start */}
        <div className={styles.divContainer}>
          <div className={styles.rowContainer}>
            {/* Location Input */}
            <div className={styles.labelContainer}>
              <label htmlFor="location">
                Preferred Location/Pincode
                <span style={{ color: "red" }}>*</span>
              </label>
              <div className={styles.inputElement}>
                <CiLocationOn />
                <input
                  type="text"
                  id="location"
                  value={location}
                  placeholder="Enter your location"
                  onChange={(e) => setLocation(e.target.value)}
                  className={styles.inputField}
                />
                <FaLocationCrosshairs />
              </div>
            </div>

            {/* Date Picker */}
            <div className={styles.labelContainer}>
              <label htmlFor="date">
                Select Date
                <span style={{ color: "red" }}>*</span>
              </label>
              {/* DatePicker component */}
              <div onClick={openDatePicker} className={styles.inputElement}>
                <DatePicker
                  ref={datePickerRef}
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="MMMM d, yyyy"
                  className={styles.datePicker}
                  placeholderText="Select Date"
                />
                {/* Calendar Icon with onClick to open DatePicker */}
                <FaRegCalendarAlt />
              </div>
            </div>
          </div>

          <div className={styles.rowContainer}>
            {/* Category Dropdown */}
            <div
              style={{ position: "relative" }}
              className={styles.labelContainer}
            >
              <label htmlFor="speciality">
                Select Speciality
                <span style={{ color: "red" }}>*</span>
              </label>
              <div
                onClick={() => setCategory(!category)}
                className={styles.inputElement}
              >
                <span>{selectedCategory}</span>
                <IoIosArrowDown
                  style={{ transform: category ? "rotate(180deg)" : "" }}
                />
              </div>
              {category && (
                <ul className={styles.dropdown}>
                  {categories.map((cat, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCategory(false);
                      }}
                      className={styles.dropdownItem}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit Button */}
            <div onClick={handleSubmit} className={styles.labelContainer}>
              <div className={styles.submit}>Submit</div>
            </div>
          </div>
        </div>
        {/* form inputs end */}
      </div>
    </div>
  );
};

export default Container;
