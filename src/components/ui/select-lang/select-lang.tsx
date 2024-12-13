import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SelectLangProps = {
  lang: string;
}

const SelectLang = ({ lang }: SelectLangProps) => {
  const [selectedLang, setSelectedLang] = useState(lang);

  const langOptions = [
    {
      value: "en",
      label: "en",
    },
    {
      value: "es",
      label: "es",
    },
  ];

  useEffect(() => {
    setSelectedLang(lang);
  }, [lang]);

  const onChangeLang = (value: string) => {
    setSelectedLang(value);
    window.location.href = `/${value}`;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSelectedLang(lang);
    }
    , 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Select value={selectedLang} onValueChange={onChangeLang}>
      <SelectTrigger className="w-[80px] text-black dark:text-white">
        <SelectValue placeholder={selectedLang} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {langOptions.map((langOption) => (
            <SelectItem key={langOption.value} value={langOption.value}>
              {langOption.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectLang;