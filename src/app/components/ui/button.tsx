type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  text,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
}