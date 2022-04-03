import HeadingIssues from './HeadingIssues';
import Issues from './Issues';
import useStore from '../hooks/useStore';

export default function FetchedIssues() {
  const comparedIssues = useStore(state => state.comparedIssues);

  return (
    <main>
      <HeadingIssues />
      <Issues issues={comparedIssues} />
    </main>
  );
}
