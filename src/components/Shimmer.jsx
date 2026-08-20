export default function Shimmer() {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((el) => (
        <div key={el} className="shimmer-card"></div>
      ))}
    </div>
  );
}
