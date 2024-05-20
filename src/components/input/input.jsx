import styles from "./input.module.css";

export default function InputGroup({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
