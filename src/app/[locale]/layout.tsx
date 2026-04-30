import { getDictionary } from "@/src/lib/getDictionaries";
import { Suspense, type ReactNode } from "react";
import { DictionaryProvider } from "../components/providers/dictionary-provider";
import RouteLoader from "../components/providers/route-loader";


export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <DictionaryProvider dictionary={dictionary}>
      <Suspense fallback={null}>
        <RouteLoader />
      </Suspense>
      {children}
    </DictionaryProvider>
  );
}
