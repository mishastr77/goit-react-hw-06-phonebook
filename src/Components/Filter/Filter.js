import React from "react";
import PropTypes from "prop-types";
import styles from "./filter.module.css";
import { connect } from "react-redux";
import contactAction from "../../redux/contacts/contacts-actions";

const Filter = ({ filter, onChangeFilter }) => (
  <label className={styles.filterLabel}>
    Find contacts by name and number
    <input
      className={styles.filterInput}
      type="text"
      value={filter}
      onChange={onChangeFilter}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (e) => dispatch(contactAction.filterChange(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
