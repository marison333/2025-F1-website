export const getTeamVariable = (teamId: string) => {
    switch (teamId) {
        case 'alpine':
            return '--alpine';
        case 'aston-martin':
            return '--aston-martin';
        case 'ferrari':
            return '--ferrari';
        case 'haas':
            return '--haas';
        case 'kick-sauber':
            return '--kick-sauber';
        case 'mclaren':
            return '--mclaren';
        case 'mercedes':
            return '--mercedes';
        case 'racing-bulls':
            return '--racing-bulls';
        case 'red-bull':
            return '--red-bull';
        case 'williams':
            return '--williams';
        default:
            return '--gray-500';
    }
};

export const getTeamGradientClass = (teamId: string) => {
    switch (teamId) {
        case 'alpine':
            return 'from-alpine';
        case 'aston-martin':
            return 'from-aston-martin';
        case 'ferrari':
            return 'from-ferrari';
        case 'haas':
            return 'from-haas';
        case 'kick-sauber':
            return 'from-kick-sauber';
        case 'mclaren':
            return 'from-mclaren';
        case 'mercedes':
            return 'from-mercedes';
        case 'racing-bulls':
            return 'from-racing-bulls';
        case 'red-bull':
            return 'from-red-bull';
        case 'williams':
            return 'from-williams';
        default:
            return 'from-gray-500';
    }
};

const DEFAULT_VAR = '--gray-500';
const DEFAULT_BG = 'bg-gray-500';
const DEFAULT_FROM = 'from-gray-500';

export const teamBackgroundColor = (teamId: string): string => {
    const cssVar = getTeamVariable(teamId);
    return cssVar === DEFAULT_VAR ? DEFAULT_BG : `bg-[rgb(var(${cssVar}))]`;
};

export const teamGradientColor = (teamId: string): string => {
    const cssVar = getTeamGradientClass(teamId);
    return cssVar === DEFAULT_FROM ? DEFAULT_FROM : cssVar;
};
