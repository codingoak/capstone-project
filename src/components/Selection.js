import Select from 'react-select';
import styled from 'styled-components/macro';

import options from './SelectOptions';
import useStore from '../hooks/useStore';

export default function Selection() {
  const selectedProject = useStore(state => state.selectedProject);
  const setSelectedProject = useStore(state => state.setSelectedProject);

  return (
    <SelectionForm aria-label="Select box">
      <Select
        aria-label="choose a project"
        getOptionLabel={e => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {e.icon}
            <span style={{ marginLeft: 5 }}>{e.label}</span>
          </div>
        )}
        name="Repositories"
        onChange={e => setSelectedProject(e.value)}
        options={options}
        placeholder="Select a repository..."
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            neutral50: 'var(--font-color-medium)',
          },
        })}
        value={options.find(obj => obj.value === selectedProject)}
      />
    </SelectionForm>
  );
}

const SelectionForm = styled.form`
  margin: 0 10px 10px;
  padding-top: 10px;
`;
