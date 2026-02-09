import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
  ] as const;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-current hover:bg-white/10"
          aria-label="Select language"
        >
          <Globe size={18} />
          <span className="hidden sm:inline">{languages.find((l) => l.code === i18n.language)?.label ?? i18n.language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {languages.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => i18n.changeLanguage(code)}
            className={i18n.language === code ? 'bg-brand-lightBlue/10 font-medium' : ''}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
