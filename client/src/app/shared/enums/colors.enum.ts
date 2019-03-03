export enum colorsEnum {
    white = 'is-white',
    black = 'is-black',
    primary = 'is-primary',
    link = 'is-link',
    info = 'is-info',
    success = 'is-success',
    warning = 'is-warning',
    dark = 'is-dark',
    light = 'is-light',
}

export type Colors = colorsEnum.white | colorsEnum.black | colorsEnum.primary | colorsEnum.link |
    colorsEnum.info | colorsEnum.success | colorsEnum.warning | colorsEnum.dark | colorsEnum.light;
