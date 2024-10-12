import { FC } from 'react';

interface SeparatorProps {
  className?: string;
}

export const Separator: FC<SeparatorProps> = ({ className = '' }) => {
  return <div className={`border-t border-gray-50 dark:border-gray-800 h-px w-full ${className}`} />;
};
