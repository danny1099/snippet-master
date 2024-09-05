import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations('intro')

  return (
    <section className="size-full bg-background justify-center items-center flex flex-col text-center">
      <h1 className="text-3xl text-primary font-medium">Snippet Storage</h1>
      <p className="text-accent-foreground text-sm">{t('welcome')}</p>
    </section>
  )
}
