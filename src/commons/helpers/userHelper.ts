//possède tous les roles
export const hasAllRoles = (user: any, roles: string[]) => {
  return user?.roles.every((element: never) => roles.indexOf(element) > -1)
}
//possède un des roles
export const hasRoles = (user: any, roles: string[]) => {
  return user?.roles.some((element: never) => roles.indexOf(element) > -1)
}
