import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import "./datePicker.css";
import "react-dates/lib/css/_datepicker.css";

/* https://github.com/airbnb/react-dates/issues/1030
 * In-order to extend styling, wrapper div around date picker is needed.
 */

export default class DatePicker extends React.Component {
  state = {
    focused: false,
    date: moment(),
  };

  render() {
    return (
      <div>
        <SingleDatePicker
          numberOfMonths={1}
          onDateChange={(date) => this.setState({ date })}
          onFocusChange={({ focused }) => this.setState({ focused })}
          focused={this.state.focused}
        />
      </div>
    );
  }
}
