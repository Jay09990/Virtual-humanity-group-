import { CircleAlert } from "lucide-react";

type BaseProps = {
  id: string;
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
};

type InputFieldProps = BaseProps & { type?: string; multiline?: false };

type TextareaFieldProps = BaseProps & { multiline: true };

export function FormField(props: InputFieldProps | TextareaFieldProps) {
  if (props.multiline) {
    const { id, name, label, error, required } = props;
    const describedBy = error ? `${id}-error` : undefined;
    return (
      <div className="form-field">
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
        <textarea
          className="form-control"
          id={id}
          name={name}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
        />
        {error && (
          <span id={describedBy} className="field-error">
            <CircleAlert size={16} aria-hidden="true" />
            {error}
          </span>
        )}
      </div>
    );
  }

  const { id, name, label, error, required, autoComplete, type } = props;
  const describedBy = error ? `${id}-error` : undefined;
  return (
    <div className="form-field">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-control"
        id={id}
        name={name}
        required={required}
        autoComplete={autoComplete}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
      />
      {error && (
        <span id={describedBy} className="field-error">
          <CircleAlert size={16} aria-hidden="true" />
          {error}
        </span>
      )}
    </div>
  );
}
