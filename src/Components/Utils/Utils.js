import React from "react";
import { format as formatDate, parseISO } from "date-fns";
import './Utils.css'

export function Section({ className, list, ...props }) {
    const classes = ["Section", list && "Section--list", className]
      .filter(Boolean)
      .join(" ");
    return <section className={classes} {...props} />;
  }

  export function Required({ className, ...props }) {
    return (
      <span className={["Required", className].join(" ")} {...props}>
        &#42;
      </span>
    );
  }

  export function Button({ className, ...props }) {
    return <button className={['Button', className].join(' ')} {...props} />
  }
  
  export function Textarea({ className, ...props }) {
    return (
      <textarea className={['Textarea', className].join(' ')} {...props} />
    )
  }

  export function Hyph() {
    return <span className='Hyph'>{' - '}</span>
  }

  export function Input({ className, ...props }) {
    return <input className={["Input", className].join(" ")} {...props} />;
  }

  export function NiceDate({ date, format = "d MMM yyyy" }) {
    const isoString = parseISO(date);
    return formatDate(isoString, format);
  }