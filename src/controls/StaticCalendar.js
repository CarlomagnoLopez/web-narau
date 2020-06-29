import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import "../css/stylesGlobalOverRide.css"

export default class StaticCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
      flCont: 0
    };
  }

  modifiers = {
    // today: new Date(),
    // thursdays: { daysOfWeek: [4] },
    // navButtonNext:,
    birthday: new Date(),
  };
  modifiersStyles = {
    birthday: {
      color: 'white',
      backgroundColor: '#696969',
    },
    // thursdays: {
    //   color: '#ffc107',
    //   backgroundColor: '#fffdee',
    // },
    // today: {
    //   backgroundColor: '#fffdee',
    // }
  };

  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }


    this.setState({ selectedDays });
    this.props.saveDispositions(selectedDays);
  }

  // componentDidMount = () => {
  //   if (this.props.dateDisposition) {
  //     this.convertDays(this.props.dateDisposition)
  //   }
  // }

  convertDays(dates) {
    let dateConverted = []
    dates.map((item) => {
      dateConverted.push(new Date(item))
    })

    console.log(dateConverted);

    this.setState({
      flCont: this.props.flCont + 1,
      selectedDays: dateConverted
    });
  }



  render() {
    // console.log(this.props.classesEnherance)
    // console.log("date saved")
    // const dateTest = this.props.dateDisposition[0]
    // console.log(this.props.dateDisposition)
    console.log(this.state.flCont + " " + this.props.flCont)
    if (this.state.flCont === this.props.flCont) {
      this.convertDays(this.props.dateDisposition)
    }
    console.log(this.props.flCont)
    const WEEKDAYS_SHORT = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
    const MONTHS = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    return (
      <div className={`calendarCustom ${this.props.classesEnherance}`} >
        <DayPicker
          // navButtonPrev={<div>hola</div>}
          // selectedDays={[
          //   new Date(dateTest),
          //   // new Date(2017, 3, 2),
          //   // {
          //   //   after: new Date(2017, 3, 20),
          //   //   before: new Date(2017, 3, 25),
          //   // },
          // ]}
          numberOfMonths={2}
          showOutsideDays
          selectedDays={this.state.selectedDays}
          // selectedDays={this.props.dateDisposition}
          onDayClick={this.handleDayClick}
          fixedWeeks
          modifiers={this.modifiers}
          month={new Date()}
          fromMonth={new Date()}
          modifiersStyles={this.modifiersStyles}
          locale="es"
          months={MONTHS}
          weekdaysShort={WEEKDAYS_SHORT}
          disabledDays={[
            // new Date(2017, 3, 12),
            // new Date(2017, 3, 2),
            {
              // after: new Date(2017, 3, 20),
              before: new Date(),
            },
          ]}
        />
      </div>
    );
  }
}