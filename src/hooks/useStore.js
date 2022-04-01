import create from 'zustand';
// import { persist } from 'zustand/middleware';

const useStore = create(set => ({
  comparedIssues: null,
  hasError: false,
  isLoading: false,
  paginationUrls: null,
  selectedProject: null,
  userDataStatus: null,
  username: '',

  setComparedIssues: comparedIssues => {
    set({ comparedIssues: comparedIssues });
  },
  setHasError: hasError => {
    set({ hasError: hasError });
  },
  setIsLoading: isLoading => {
    set({ isLoading: isLoading });
  },
  setPaginationUrls: paginationUrls => {
    set({ paginationUrls: paginationUrls });
  },
  setSelectedProject: selectedProject => {
    set({ selectedProject: selectedProject });
  },
  setUserDataStatus: userDataStatus => {
    set({ userDataStatus: userDataStatus });
  },
  setUsername: username => {
    set({ username: username });
  },
}));

export default useStore;
