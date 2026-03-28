type Buttonprops = {
  text: string;
  className?: string;
};

export default function Button({ text, className }: Buttonprops) {
  return (
    <>
      <button className={className}>{text}</button>
    </>
  );
}
