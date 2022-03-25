import HeadingIssues from './HeadingIssues';
import Issues from './Issues';

export default function FetchedIssues({ savedIssues, togglePin }) {
  return (
    <main>
      <HeadingIssues />
      <Issues issues={savedIssues} togglePin={togglePin} />
    </main>
  );
}
