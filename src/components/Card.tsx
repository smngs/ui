import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className = "", ...props }: CardProps) {
  return <div className={`smngs-card ${className}`.trim()} {...props} />;
}

export function CardHeader({ className = "", ...props }: CardHeaderProps) {
  return <div className={`smngs-card-header ${className}`.trim()} {...props} />;
}

export function CardBody({ className = "", ...props }: CardBodyProps) {
  return <div className={`smngs-card-body ${className}`.trim()} {...props} />;
}
