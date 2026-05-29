import { SITE_META } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 font-sans">
      <p>
        Built with ❤️ by {SITE_META.name}
      </p>
    </footer>
  );
}
