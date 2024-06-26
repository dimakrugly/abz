import { useCallback, useEffect, useMemo } from 'react';
import { HomePageView } from './HomePageView';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { fetchPositions, fetchUsers } from '../../store/actionCreators/ActionCreator';

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const {
    users,
    nextUrl,
    isLoadingUsers,
    currentPage,
    totalPages,
    positions,
  } = useAppSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(fetchUsers('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  const handleLoadNextPage = useCallback(() => {
    dispatch(fetchUsers(nextUrl));
  }, [dispatch, nextUrl]);

  const isLastPage = useMemo(() => currentPage === totalPages, [currentPage, totalPages]);

  return (
    <HomePageView
      users={users}
      handleLoadNextPage={handleLoadNextPage}
      isLoadingUsers={isLoadingUsers}
      isLastPage={isLastPage}
      positions={positions}
    />
  );
};
