import { type AsideLink } from '@/modules/snippets/types'

export const stackLinks: AsideLink[] = [
  {
    text: 'All Snippets',
    icon: 'view-list',
    route: 'snippets'
  },
  {
    text: 'Favorites',
    icon: 'heart',
    route: 'favorites'
  },
  {
    text: 'Tags',
    icon: 'bookmarks',
    route: 'tags'
  },
  {
    text: 'Trash',
    icon: 'trash3',
    route: 'trash'
  }
]
