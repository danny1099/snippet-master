/* 
  Private Routes:
  Define list of private routes for entire application and this requerid 
  for authentication eg: [SNIPPETS, FAVORITES]
*/

export const privateRoutes = {
  Snippets: 'private/ws/snippets',
  Favorites: 'private/ws/favorites'
}

export type PrivateRoute = keyof typeof privateRoutes
