/* 
  Private Routes:
  Define list of private routes for entire application and this requerid 
  for authentication eg: [SNIPPETS, FAVORITES]
*/

export const privateRoutes = {
  snippets: 'private/ws/snippets',
  favorites: 'private/ws/favorites',
  tags: 'private/ws/tags',
  trash: 'private/ws/trash'
}

export type PrivateRoute = keyof typeof privateRoutes
