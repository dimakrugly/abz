import { User } from '../../store/models/User';
import { Position } from '../../store/models/Position';

export interface HomePageViewProps {
    users: User[];
    handleLoadNextPage: () => void;
    isLoadingUsers: boolean;
    isLastPage: boolean;
    positions: Position[];
}
