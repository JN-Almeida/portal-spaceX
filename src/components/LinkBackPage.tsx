import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function LinkBackPage({ href, text }: { href: string; text: string }) {
  return (
    <div className="mb-6">
      <Link
        href={href}
        className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        <span>{text}</span>
      </Link>
    </div>
  );
}
