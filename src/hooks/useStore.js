import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(set => ({
  comparedIssues: null,
  hasError: false,
  isLoading: false,
  paginationUrls: null,
  selectedProject: null,
  userDataStatus: null,
  username: '',

  setComparedIssues: comparedIssues => {
    set({ comparedIssues });
  },
  setHasError: hasError => {
    set({ hasError });
  },
  setIsLoading: isLoading => {
    set({ isLoading });
  },
  setPaginationUrls: paginationUrls => {
    set({ paginationUrls });
  },
  setSelectedProject: selectedProject => {
    set({ selectedProject });
  },
  setUserDataStatus: userDataStatus => {
    set({ userDataStatus });
  },
  setUsername: username => {
    set({ username });
  },
}));

export default useStore;

export const useMyIssues = create(
  persist(
    set => ({
      myIssues: [],

      setMyIssues: myIssues => {
        set({ myIssues });
      },
    }),
    {
      name: 'my-issues',
    }
  )
);

export const usePinnedIssues = create(
  persist(
    set => ({
      pinnedIssues: [],

      setPinnedIssues: pinnedIssues => {
        set({ pinnedIssues });
      },
    }),
    {
      name: 'pinned-issues',
    }
  )
);

export const useUserdata = create(
  persist(
    set => ({
      userdata: [],

      setUserdata: userdata => {
        set({ userdata });
      },
    }),
    {
      name: 'userdata',
    }
  )
);
