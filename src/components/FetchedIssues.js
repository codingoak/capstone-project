import HeadingIssues from './HeadingIssues';
import Issues from './Issues';

export default function FetchedIssues({ comparedIssues, togglePin }) {
  return (
    <main>
      <HeadingIssues />
      <Issues issues={comparedIssues} togglePin={togglePin} />
    </main>
  );
}
