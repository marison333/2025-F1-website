export const teamColor: Record<string, string> = {
    ferrari: 'from-ferrari',
    mercedes: 'from-mercedes',
    'red-bull': 'from-red-bull',
    mclaren: 'from-mclaren',
    alpine: 'from-alpine',
    'kick-sauber': 'from-kick-sauber',
    'aston-martin': 'from-aston-martin',
    'racing-bulls': 'from-racing-bulls',
    williams: 'from-williams',
    haas: 'from-haas'
};

export function getTeamColor(team: string): string {
    return teamColor[team] || 'from-neutral-100';
};
