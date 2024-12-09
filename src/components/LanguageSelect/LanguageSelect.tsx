import React, { useState, useRef, useEffect } from "react";
import styles from "./LanguageSelect.module.scss";

interface LanguageSelectProps {
    language: "pt" | "en" | "es";
    onChange: (language: "pt" | "en" | "es") => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
    language,
    onChange,
}) => {
    const [selectedLanguage, setSelectedLanguage] =
        useState<"pt" | "en" | "es">(language);
    const [isOpen, setIsOpen] = useState(false);
    const languageMap: { [key in "pt" | "en" | "es"]: string } = {
        pt: "PT",
        en: "EN",
        es: "ES",
    };
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (newLanguage: "pt" | "en" | "es") => {
        setSelectedLanguage(newLanguage);
        onChange(newLanguage);
        setIsOpen(false);
    };

    return (
        <div className={styles.container} ref={ref}>
            <button
                type="button"
                className={styles.selectedLanguage}
                onClick={() => setIsOpen(!isOpen)}
            >
                {languageMap[selectedLanguage]}
            </button>
            {isOpen && (
                <ul className={styles.options}>
                    {Object.entries(languageMap).map(([value, label]) => (
                        <li
                            key={value}
                            onClick={() => handleChange(value as "pt" | "en" | "es")}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSelect;