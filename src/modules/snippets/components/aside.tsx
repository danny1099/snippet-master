import { SiJavascript, SiTypescript } from 'react-icons/si'
import { getTranslations } from 'next-intl/server'
import { Logo } from '@/modules/common/components'
import { Group, Link } from '@/modules/snippets/components'
import { stackLinks } from '@/modules/snippets/helpers'

export const Aside = async () => {
  const t = await getTranslations('aside')

  return (
    <aside className="w-3/12 flex flex-col bg-background p-5 h-full gap-y-2 border-r border-border">
      <Logo />
      <nav className="w-full flex flex-col mt-10">
        <Group title={t('quick_links')}>
          <ul className="flex flex-col w-full gap-1 mt-3 text-xs">
            {stackLinks.map((option) => {
              return <Link key={option.text} {...option} />
            })}
          </ul>
        </Group>
        <Group title={t('languages')} className="mt-10">
          <ul className="flex flex-col w-full gap-2 mt-3 text-xs">
            <li className="bg-background flex gap-2 items-center py-2 px-4 rounded-md w-[90%] hover:bg-primary hover:text-primary-foreground">
              <SiJavascript size={16} className="text-slate-600" />
              <span className="text-accent-foreground">Javascript</span>
            </li>
            <li className="bg-background flex gap-2 items-center py-2 px-4 rounded-md w-[90%] hover:bg-primary hover:text-primary-foreground">
              <SiTypescript size={16} className="text-slate-600" />
              <span className="text-accent-foreground">Typescript</span>
            </li>
          </ul>
        </Group>
      </nav>
    </aside>
  )
}
