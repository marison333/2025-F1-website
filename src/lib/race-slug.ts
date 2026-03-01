export function raceIdToSlug(id: string): string {
    return id.replace(/-gp$/i, '').toLowerCase();
}

export function slugToRaceCandidates(slug: string): string[] {
    const normalized = slug.trim().toLowerCase();

    if (!normalized) {
        return [];
    }

    if (normalized.endsWith('-gp')) {
        return [normalized, normalized.replace(/-gp$/i, '')];
    }

    return [`${normalized}-gp`, normalized];
}
