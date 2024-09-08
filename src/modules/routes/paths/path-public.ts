/* 
  Public Routes:
  Define list of public routes for entire application
  eg: [HOME, SIGN_IN, SIGN_UP]
*/

export const publicRoutes = {
  home: '/',
  sign_in: 'sign-in',
  get_started: 'get-started'
}

export type PublicRoute = keyof typeof publicRoutes
