import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

export default function GitHubRedirectPage({ onLogin }) {
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  const code = query.get('code');

  useEffect(() => {
    onLogin(code);
  }, [code, onLogin]);

  return <h2>{code}</h2>;
}
