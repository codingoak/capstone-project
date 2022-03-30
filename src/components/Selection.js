import Select from 'react-select';
import styled from 'styled-components/macro';

import options from './SelectOptions';

export default function Selection({ selectedProject, handleRepoChange }) {
  return (
    <SelectionForm aria-label="Select box">
      <Select
        options={options}
        value={options.find(obj => obj.value === selectedProject)}
        onChange={handleChange}
        aria-label="choose a project"
        name="Repositories"
        placeholder="Select a repository..."
        getOptionLabel={e => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {e.icon}
            <span style={{ marginLeft: 5 }}>{e.label}</span>
          </div>
        )}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            neutral50: 'var(--font-color-medium)',
          },
        })}
      />
    </SelectionForm>
  );

  function handleChange(e) {
    handleRepoChange(e);
  }
}

const SelectionForm = styled.form`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 0 20px 10px;
  padding-top: 10px;
`;
