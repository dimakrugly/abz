import { useCallback, useEffect, useMemo } from 'react';
import { HomePageView } from './HomePageView';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { fetchPositions, fetchUsers, getToken } from '../../store/actionCreators/ActionCreator';
import { useValidation } from './hooks/useValidation';

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

  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);

  const handleLoadNextPage = useCallback(() => {
    dispatch(fetchUsers(nextUrl));
  }, [dispatch, nextUrl]);

  const isLastPage = useMemo(() => currentPage === totalPages, [currentPage, totalPages]);

  const {
    handleSubmit, errors, register, watch, setValue, isValid,
  } = useValidation();

  return (
    <HomePageView
      users={users}
      handleLoadNextPage={handleLoadNextPage}
      isLoadingUsers={isLoadingUsers}
      isLastPage={isLastPage}
      positions={positions}
      handleSubmit={handleSubmit}
      errors={errors}
      register={register}
      watch={watch}
      setValue={setValue}
      isValid={isValid}
    />
  );
};
