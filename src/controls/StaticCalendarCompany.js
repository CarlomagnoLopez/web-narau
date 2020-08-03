import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import "../css/stylesGlobalOverRide.css"
Date.prototype.addDays = function (days) {
  var dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days);
  return dat;
}
export default class StaticCalendarCompany extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
      flCont: 0
    };
  }

  modifiers = {
    // today: new Date(),
    // thursdays: { daysOfWeek: [4] },
    // navButtonNext:,
    // birthday: new Date(),
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

  // handleDayClick(day, { selected }) {
  //   const { selectedDays } = this.state;
  //   if (selected) {
  //     const selectedIndex = selectedDays.findIndex(selectedDay =>
  //       DateUtils.isSameDay(selectedDay, day)
  //     );
  //     selectedDays.splice(selectedIndex, 1);
  //   } else {
  //     selectedDays.push(day);
  //   }


  //   this.setState({ selectedDays });
  //   // this.props.saveDispositions(selectedDays);
  // }

  // handleDayClick(day, { selected }) {
  //   this.setState({
  //     selectedDay: selected ? undefined : day,
  //   });
  // }

  handleDayClick(day, modifiers = {}) {
    if (modifiers.disabled) {
      return;
    }
    this.setState({
      selectedDay: modifiers.selected ? undefined : day,
    }, (props, state) => {
      this.props.saveDate(this.state.selectedDay)
      // if(this.state.selectedDay){
      //   this.props.enableButton(true)
      // }else{
      //   this.props.enableButton(false)

      // }


      // console.log(this.state.selectedDay)
    });




  }


  convertDays(dates) {
    let dateConverted = []
    if (dates) {
      dates.map((item) => {
        dateConverted.push(new Date(item))
      })
    }


    console.log(dateConverted);

    this.setState({
      flCont: this.props.flCont + 1,
      // selectedDays: dateConverted
    });
  }

  disabledEndDay(dates) {
    // console.log(dates)
    let dateArray = this.getDates(new Date(dates[0]), new Date(dates[dates.length - 1]));
    // console.log(dateArray)
    for (var i = 0; i < dates.length; i++) {
      for (var j = 0; j < dateArray.length; j++) {
        if (dateArray[j] === dates[i]) {
          dateArray.splice(j, 1);
        }
      }
    }
    let arrDateConverter = []
    for (var h = 0; h < dateArray.length; h++) {
      arrDateConverter.push(new Date(dateArray[h]))
    }
    arrDateConverter.push(
      {
        after: new Date(dates[dates.length - 1]),
        before: new Date(dates[0]),
      })
    this.setState({
      finalDate: new Date(dates[dates.length - 1]),
      dateDisabled: arrDateConverter,
      // toMonth:new Date(dates[dates.length - 1 ]).getMonth()
    })



    // console.log(dateArray)

    // console.log(this.state.finalDate)
  }



  getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(currentDate.toISOString())
      currentDate = currentDate.addDays(1);
    }
    return dateArray;
  }



  render() {
    // console.log(this.props.classesEnherance)
    // console.log("date saved")
    // const dateTest = this.props.dateDisposition[0]
    // console.log(this.props.dateDisposition)
    console.log(this.state.flCont + " " + this.props.flCont)
    if (this.state.flCont === this.props.flCont) {
      this.convertDays(this.props.dateDisposition)
      this.disabledEndDay(this.props.dateDisposition);
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
      <div className={`calendarCustomCompany`} >
        <DayPicker
          numberOfMonths={1}
          onDayClick={this.handleDayClick}
          fixedWeeks
          modifiers={this.modifiers}
          month={new Date()}
          fromMonth={new Date()}
          toMonth={this.state.finalDate}
          modifiersStyles={this.modifiersStyles}
          locale="es"
          months={MONTHS}
          weekdaysShort={WEEKDAYS_SHORT}
          disabledDays={
            this.state.dateDisabled
            // [
            //   // new Date(2017, 3, 12),
            //   // new Date(2017, 3, 2),
            //   // this.state.dateDisabled,


            //   {
            //     after: this.state.finalDate,
            //     before: new Date(),
            //   },
            // ]
          }
          selectedDays={this.state.selectedDay}
        />
      </div>
    );
  }
}