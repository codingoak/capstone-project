import HeadingIssues from './HeadingIssues';
import Issues from './Issues';

export default function FetchedIssues({ fetchedIssues, togglePin }) {
  return (
    <main>
      <HeadingIssues />
      <Issues issues={fetchedIssues} togglePin={togglePin} />
    </main>
  );
}
