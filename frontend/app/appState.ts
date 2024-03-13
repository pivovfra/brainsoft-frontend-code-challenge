import { makeVar, useReactiveVar } from '@apollo/client';

type AppState = {
  searchQuery: string;
  filterType: string;
  isFavorite: boolean;
  offset: number;
};

type ViewType = 'list' | 'grid';

export const appStateVar = makeVar<AppState>({
  searchQuery: '',
  filterType: '',
  isFavorite: false,
  offset: 0,
});

export const viewStateVar = makeVar<ViewType>('grid');

export const useAppState = (): AppState => {
  return useReactiveVar(appStateVar);
};

export const useViewState = (): ViewType => {
  return useReactiveVar(viewStateVar);
};
