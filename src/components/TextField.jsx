export default function TextField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
  inputMode,
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition focus:ring-2 ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
            : 'border-gray-300 focus:border-black focus:ring-gray-200'
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}