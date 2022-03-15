import styled from 'styled-components/macro';
import Select from 'react-select';

export default function Selection({ selectedProject, setSelectedProject }) {
  const handleChange = e => {
    setSelectedProject(e.value);
  };

  const options = [
    {
      label: 'React',
      value: 'https://api.github.com/repos/reactjs/reactjs.org/issues',
    },
    {
      label: 'Styled-components',
      value:
        'https://api.github.com/repos/styled-components/styled-components/issues',
    },
    {
      label: 'Git',
      value: 'https://api.github.com/repos/git/git/issues',
    },
    {
      label: 'Node.js',
      value: 'https://api.github.com/repos/nodejs/node/issues',
    },
    {
      label: 'Express',
      value: 'https://api.github.com/repos/expressjs/express/issues',
    },
    {
      label: 'Angular',
      value: 'https://api.github.com/repos/angular/angular/issues',
    },
    {
      label: 'Babel',
      value: 'https://api.github.com/repos/babel/babel/issues',
    },
    {
      label: 'Sass',
      value: 'https://api.github.com/repos/sass/sass/issues',
    },
    {
      label: 'ESLint',
      value: 'https://api.github.com/repos/eslint/eslint/issues',
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
  margin: 20px 10px 10px;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
