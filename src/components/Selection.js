import styled from 'styled-components/macro';
import Select from 'react-select';
import options from './SelectOptions.js';

export default function Selection({ selectedProject, handleRepoChange }) {
  const handleChange = e => {
    handleRepoChange(e);
  };

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
}

const SelectionForm = styled.form`
  margin: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
