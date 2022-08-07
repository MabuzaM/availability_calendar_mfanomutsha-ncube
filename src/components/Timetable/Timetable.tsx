import React, { FC, useState } from 'react';
import './Timetable.scss';
import { checkSlotAvailability } from '../../helperFunctions';
import cn from 'classnames';

interface TimetableProps {
  calendarItems: CalendarItem[];
  currentSliderValue: number;
  time: number;
}

export const Timetable: FC<TimetableProps> = React.memo(({
  calendarItems,
  currentSliderValue,
  time,
}) => {
  const timeSlots: number[] = [9,10,11,12,13,14,15,16,17];
  const [isFull, setIsFull] = useState<boolean>(false);
  const [isUnavailable, setIsUnavailable] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const styleTableCellsConditionally = (status: string) => {
    switch (status) {
      case 'Full':
        setIsFull(true);
        break;
      case 'Unavailable':
        setIsUnavailable(true);
        break;
      default: setIsSelected(false);
    }
  }

  return (
    <table className="Timetable">
      <thead className="Timetable__headings">
        <tr className="Timetable__row">
          <th className="Timetable__heading"></th>
          {
            calendarItems.map((calendarItem: CalendarItem) => (
              <th key={calendarItem.Date} className="Timetable__heading">{(calendarItem.Date)}</th>
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
                  const { Date, HoursAvailable } = item;

                  return <td
                    key={i}
                    className="Timetable__data"
                  >
                    <button
                      className={cn(
                        'Timetable__button',
                        {
                          'Timetable__button--disabled': isDisabled,
                          'Timetable__button--selected': isSelected,
                          'Timetable__button--full': isFull,
                          'Timetable__button--unAvailable': isUnavailable,
                        }
                      )}
                      disabled={isDisabled}
                      onClick={(event) => {
                        const { nodeValue } = event.currentTarget.childNodes[0];
                        console.log(event.currentTarget.childNodes[0].nodeValue)
                        if (nodeValue === 'Available') {
                          setIsSelected(true);
                        }
                      }}
                    >
                      {
                        checkSlotAvailability(time, currentSliderValue, Date, HoursAvailable)
                      }
                    </button>
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
