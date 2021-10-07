interface TextAreaProps {
  spanText: string;
  text: string;
  onChange(): void;
}
const TextAreaField = ({ spanText, text, onChange }: TextAreaProps) => {
  return (
    <>
      <textarea
        className="relative w-full py-4 pl-4 text-sm border rounded resize-none md:mb-0"
        cols={30}
        rows={10}
        placeholder={text}
        onChange={onChange}
      ></textarea>
      <label className="absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs text-gray-500 bg-white">
        {spanText}
      </label>
    </>
  );
};

export default TextAreaField;
