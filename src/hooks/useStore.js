import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(set => ({
  comparedIssues: null,
  hasError: false,
  isLoading: false,
  paginationUrls: null,
  selectedProject: null,
  showRemoveDialog: false,
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
  setShowRemoveDialog: showRemoveDialog => {
    set({ showRemoveDialog });
  },
  setUserDataStatus: userDataStatus => {
    set({ userDataStatus });
  },
  setUsername: username => {
    set({ username });
  },

  sortPins: issues => {
    issues.sort((a, b) => {
      if (a.isPinned === true) {
        return -1;
      }
      if (b.isPinned === true) {
        return +1;
      }
      return 0;
    });
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
