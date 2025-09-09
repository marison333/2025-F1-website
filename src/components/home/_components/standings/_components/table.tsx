import { DriverStanding, TeamStanding } from '@/types/standings';

import { FlagIconWithText } from '@/components/flag';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';

interface StandingsTableProps {
    data: DriverStanding[] | TeamStanding[];
}

const isDriverStanding = (
    standings: DriverStanding[] | TeamStanding[]
): standings is DriverStanding[] => {
    return standings.length > 0 && 'driver' in standings[0];
};

export default function StandingsTable({ data }: StandingsTableProps) {
    const renderDriverTableHeaders = () => (
        <>
            <TableHead>pos.</TableHead>
            <TableHead>driver</TableHead>
            <TableHead>nationality</TableHead>
            <TableHead>team</TableHead>
            <TableHead className='text-right'>pts.</TableHead>
        </>
    );

    const renderDriverTableBody = (standing: DriverStanding, index: number) => {
        return (
            <TableRow className='[&>*]:capitalize' key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                    <span className='block sm:inline'>
                        <span className='hidden sm:inline'>
                            {standing.driver.givenName} {standing.driver.familyName}
                        </span>
                        <span className='sm:hidden uppercase'>
                            {standing.driver.familyName.slice(0, 3)}
                        </span>
                    </span>
                </TableCell>
                <TableCell>
                    <FlagIconWithText
                        iconUrl={standing.driver.nationality.code}
                        name={standing.driver.nationality.name}
                    />
                </TableCell>
                <TableCell>{standing.driver.team.id.replace(/-/g, ' ')}</TableCell>
                <TableCell className='text-right'>{standing.points}</TableCell>
            </TableRow>
        );
    };

    const renderTeamTableHeaders = () => (
        <>
            <TableHead>pos.</TableHead>
            <TableHead>team</TableHead>
            <TableHead className='text-right'>pts.</TableHead>
        </>
    );

    const renderTeamTableBody = (standing: TeamStanding, index: number) => {
        return (
            <TableRow className='[&>*]:capitalize' key={standing.team.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{standing.team.id.replace(/-/g, ' ')}</TableCell>
                <TableCell className='text-right'>{standing.points}</TableCell>
            </TableRow>
        );
    };

    return (
        <Card className='p-4'>
            <Table data-slot='standings-table'>
                <TableHeader>
                    <TableRow className='font-extrabold [&>*]:uppercase'>
                        {isDriverStanding(data)
                            ? renderDriverTableHeaders()
                            : renderTeamTableHeaders()}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {isDriverStanding(data)
                        ? data.map((standing, index) => renderDriverTableBody(standing, index))
                        : data.map((standing, index) =>
                              renderTeamTableBody(standing as TeamStanding, index)
                          )}
                </TableBody>
            </Table>
        </Card>
    );
}
