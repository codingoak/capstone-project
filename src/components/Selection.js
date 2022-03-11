import styled from 'styled-components/macro';
import Select from 'react-select';

export default function Selection({ selectedProject, setSelectedProject }) {
  const handleChange = e => {
    setSelectedProject(e.value);
  };

  const options = [
    {
      label: 'REACT',
      value: 'https://api.github.com/repos/reactjs/reactjs.org/issues',
    },
    {
      label: 'STYLED-COMPONENTS',
      value:
        'https://api.github.com/repos/styled-components/styled-components/issues',
    },
    {
      label: 'NODE.JS',
      value: 'https://api.github.com/repos/nodejs/node/issues',
    },
    {
      label: 'EXPRESS.JS',
      value: 'https://api.github.com/repos/expressjs/express/issues',
    },
  ];

  return (
    <SelectionContainer>
      <Select
        options={options}
        value={options.find(obj => obj.value === selectedProject)}
        onChange={handleChange}
        aria-label="choose a project"
        name="projects"
      />
    </SelectionContainer>
  );
}

const SelectionContainer = styled.form`
  margin: 15px 10px 0;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
