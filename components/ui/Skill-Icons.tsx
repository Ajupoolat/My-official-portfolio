 export default function SimpleIconSvg({
  path,
  color,
  className = 'w-8 h-8',
}: {
  path: string;
  color: string;
  className?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
}