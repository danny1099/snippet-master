/* 
  Public Routes:
  Define list of public routes for entire application
  eg: [HOME, SIGN_IN, SIGN_UP]
*/

export const publicRoutes = {
  Home: '/',
  Sign_In: 'sign-in',
  Get_Started: 'get-started'
}

export type PublicRoute = keyof typeof publicRoutes
