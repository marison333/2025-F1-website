import { FlagIconWithText } from '@/components/flag';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';

interface StandingsTableProps {
    drivers: {
        position: number;
        information: {
            countryCode: string;
            countryName: string;
            name: string;
            points: number;
            team: string;
        };
    }[];
    teams: {
        position: number;
        information: {
            name: string;
            points: number;
        };
    }[];
    type: 'drivers' | 'teams';
    className?: string;
}

export default function StandingsTable(props: StandingsTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow className='[&>*]:uppercase'>
                    <TableHead>pos.</TableHead>
                    <TableHead>driver</TableHead>
                    <TableHead>nationality</TableHead>
                    <TableHead>team</TableHead>
                    <TableHead className='text-right'>pts.</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.type === 'drivers' &&
                    props.drivers.map((driver) => (
                        <TableRow key={driver.position}>
                            <TableCell>{driver.position}</TableCell>
                            <TableCell>{driver.information.name}</TableCell>
                            <TableCell>
                                <FlagIconWithText
                                    iconUrl={driver.information.countryCode}
                                    name={driver.information.countryName}
                                />
                            </TableCell>
                            <TableCell>{driver.information.team}</TableCell>
                            <TableCell className='text-right'>{driver.information.points}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    );
}
