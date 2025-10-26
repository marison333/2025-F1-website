export const LayoutTypes = {
    default: 'default-layout',
    profile: 'profile-layout'
} as const;

export type LayoutType = (typeof LayoutTypes)[keyof typeof LayoutTypes];
