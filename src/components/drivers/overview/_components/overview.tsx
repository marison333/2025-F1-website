import type { Driver } from "@/types";
import { DriverCard } from "../../driverCard";

interface OverviewProps {
    drivers: Driver[];
}

export function Overview({ drivers }: OverviewProps) {
    return (
        <ul
            className='w-full flex flex-col gap-4 list-none [@media(min-width:679px)]:grid [@media(min-width:679px)]:grid-cols-2'
            data-slot='driver-list'>
            {drivers.map((driver) => (
                <li key={driver.code}>
                    <DriverCard className="dark" driver={driver} />
                </li>
            ))}
        </ul>
    );
}
