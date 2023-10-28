import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

type SearchInputProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
};
const SearchInput = ({
    value: initValue,
    onChange,
    debounce = 500,
    ...props
  }: SearchInputProps) => {
    const [value, setValue] = useState(initValue);
    useEffect(() => {
      setValue(initValue);
    }, [initValue]);
  
    // *  0.5s after set value in state
    useEffect(() => {
      const timeout = setTimeout(() => {
        onChange(value);
      }, debounce);
      return () => clearTimeout(timeout);
    }, [value]);

  return (
    <div className="flex gap-0.5 items-center">
        <FaSearch />
        <input {...props} value={value} onChange={(e) => setValue(e.target.value)} className="p-2 bg-transparent outline-none border-b-2 w-3/5 focus:w-4/5 duration-300 border-cyan-500" placeholder="Search..."></input>
    </div>

  );
};

export default SearchInput;
