import react from 'react';

export default function Output(
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) {
  return (
    <input readOnly={true} />
  );
}