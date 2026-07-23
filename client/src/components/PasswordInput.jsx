import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInput = ({ id, className = 'form-input', placeholder, value, onChange, name, required, ...rest }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="password-input-wrapper">
      <input
        id={id}
        className={className}
        type={visible ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        {...rest}
      />
      <button
        type="button"
        className="password-toggle-btn"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? 'Hide password' : 'Show password'}
        tabIndex={-1}
      >
        {visible ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
};

export default PasswordInput;
