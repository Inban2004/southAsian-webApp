import type { CSSProperties, ChangeEventHandler } from 'react';
import { Colours } from '../../Assets/Colours';
import { Radius } from '../../Assets/Tokens';

type InputFieldProps = {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: CSSProperties;
};

export default function InputField({ type = 'text', placeholder = 'Enter text...', value, onChange, style }: InputFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        background: Colours.neutralCream,
        border: `1px solid ${Colours.neutralBorder}`,
        borderRadius: Radius.md,
        padding: '12px 10px',
        fontFamily: "'Inter', sans-serif",
        fontSize: '16px',
        color: Colours.neutralWarmGrey,
        width: '360px',
        boxSizing: 'border-box',
        ...style,
      }}
    />
  );
}
