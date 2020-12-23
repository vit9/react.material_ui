/* eslint-disable no-return-assign */
export const checkRoles = (roles, userRoles = ['admin'], isRenderPage) => roles.map((role) => userRoles.map((userRole) => (userRole === role ? true : isRenderPage))[0]);
