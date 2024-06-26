import { User } from '../../store/models/User';

export interface HomePageViewProps {
    users: User[];
    handleLoadNextPage: () => void;
    isLoadingUsers: boolean;
    isLastPage: boolean;
}
