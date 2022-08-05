import React, { FC, useState } from 'react';
import './Timetable.scss';
import { checkSlotAvailability } from '../../helperFunctions';
import cn from 'classnames';

interface TimetableProps {
  calendarItems: CalendarItem[];
  currentSliderValue: number;
}

export const Timetable: FC<TimetableProps> = React.memo(({ calendarItems, currentSliderValue }) => {
  const timeSlots = [9,10,11,12,13,14,15,16,17];
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [cellIndex, setCellIndex] = useState(-1);

  return (
    <table className="Timetable" onLoad={() => setIsDisabled(true)}>
      <thead className="Timetable__headings">
        <tr className="Timetable__row">
          <th className="Timetable__data"></th>
          {
            calendarItems.map((calendarItem: CalendarItem) => (
              <th key={calendarItem.Date} className="Timetable__data">{(calendarItem.Date)}</th>
            ))
          }
        </tr>        
      </thead>

      <tbody className="Timetable__body">
        {
          timeSlots.map((slot, index) => (
            <tr className="Timetable__row">
              <td className="Timetable__data" key={slot}>{`${slot} - ${slot + 1}`}</td>
              {
                calendarItems.map((item, i) => {
                  return <td
                    className={cn(
                      'Timetable__data',
                      {
                        'Timetable__data--disabled': isDisabled,
                        'Timetable__data--bgColor': cellIndex === i}
                    )}
                    key={i}
                    defaultValue={''}
                    onClick={(event) => {
                      setCellIndex(i);
                      if (cellIndex === i) {
                        setIsSelected(true);
                      }
                      console.log(event.target);
                    }}
                  >
                    <>
                      {
                        checkSlotAvailability(10, currentSliderValue, item.Date, item.HoursAvailable)
                      }
                    </>
                  </td>
                })
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
});
