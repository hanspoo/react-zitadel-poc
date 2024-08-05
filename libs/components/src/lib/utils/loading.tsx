import { PropsWithClassName } from './PropsWithClassName';

export function Loading({ className = '' }: PropsWithClassName) {
  return (
    <span className={`loading loading-spinner loading-sm ${className}`}></span>
  );
}
