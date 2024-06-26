import { User } from '../../../../store/models/User';

export interface ListProps {
    users: User[];
    handleLoadNextPage: () => void;
    isLoadingUsers: boolean;
    isLastPage: boolean;
}
