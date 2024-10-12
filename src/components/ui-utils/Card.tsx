import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white dark:bg-[#0e0f17] rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};
