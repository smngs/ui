import React, { useState, useMemo } from "react";

interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Dates to highlight (YYYY-MM-DD strings) */
  dates?: string[];
  /** Initial year-month to display (YYYY-MM) */
  defaultMonth?: string;
  /** Callback when a highlighted date is clicked */
  onDateClick?: (date: string) => void;
}

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function formatMonth(year: number, month: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}`;
}

function parseMonth(ym: string): [number, number] {
  const [y, m] = ym.split("-").map(Number);
  return [y, m - 1];
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    { dates = [], defaultMonth, onDateClick, className = "", ...props },
    ref
  ) => {
    const initialMonth = defaultMonth
      ? parseMonth(defaultMonth)
      : [new Date().getFullYear(), new Date().getMonth()];

    const [year, setYear] = useState(initialMonth[0]);
    const [month, setMonth] = useState(initialMonth[1]);

    const dateSet = useMemo(() => new Set(dates), [dates]);

    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfWeek(year, month);

    const prevMonth = () => {
      if (month === 0) {
        setYear(year - 1);
        setMonth(11);
      } else {
        setMonth(month - 1);
      }
    };

    const nextMonth = () => {
      if (month === 11) {
        setYear(year + 1);
        setMonth(0);
      } else {
        setMonth(month + 1);
      }
    };

    const cells: React.ReactNode[] = [];
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} className="smngs-calendar-cell" />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const isHighlighted = dateSet.has(dateStr);
      const isToday =
        dateStr ===
        `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`;

      cells.push(
        <div
          key={day}
          className={`smngs-calendar-cell${isHighlighted ? " smngs-calendar-cell-active" : ""}${isToday ? " smngs-calendar-cell-today" : ""}`}
          onClick={
            isHighlighted && onDateClick
              ? () => onDateClick(dateStr)
              : undefined
          }
        >
          <span className="smngs-calendar-day">{day}</span>
          {isHighlighted && <span className="smngs-calendar-dot" />}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={`smngs-calendar ${className}`.trim()}
        {...props}
      >
        <div className="smngs-calendar-header">
          <button
            className="smngs-calendar-nav"
            onClick={prevMonth}
            aria-label="前の月"
          >
            ‹
          </button>
          <span className="smngs-calendar-title">
            {year}/{String(month + 1).padStart(2, "0")}
          </span>
          <button
            className="smngs-calendar-nav"
            onClick={nextMonth}
            aria-label="次の月"
          >
            ›
          </button>
        </div>
        <div className="smngs-calendar-weekdays">
          {WEEKDAYS.map((w) => (
            <div key={w} className="smngs-calendar-weekday">
              {w}
            </div>
          ))}
        </div>
        <div className="smngs-calendar-grid">{cells}</div>
      </div>
    );
  }
);
Calendar.displayName = "Calendar";
