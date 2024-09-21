export default function TabButtton({ label, onClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onClick}>
        {label}
      </button>
    </li>
  );
}
