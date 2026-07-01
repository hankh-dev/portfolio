import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

// The root path has no UI of its own; send visitors to the default locale.
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
