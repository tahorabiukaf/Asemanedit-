export function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="email"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="px-4 py-2 rounded-xl border w-full"
    />
  );
}
