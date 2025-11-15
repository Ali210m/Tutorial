import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import tr from '../i18n/tr.json' 
import en from '../i18n/en.json' 

type Language = 'tr' | 'en'
type Translations = typeof tr

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Translations> = {
    tr,
    en,
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('tr')

    useEffect(() => {
        const saved = localStorage.getItem('language')
        if (saved === 'tr' || saved === 'en') {
            setLanguage(saved)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])

    function t(key: string): string {
        const keys = key.split('.')
        let value: any = translations[language]
        for (const k of keys) {
            value = value?.[k]
        }
        return value || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}