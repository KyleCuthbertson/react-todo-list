import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-size: 24px;
  margin-bottom: 15px;
  cursor: pointer;
`

const Input = styled.input`
  min-width: 220px;
  margin: 0 auto;
  padding: 5px;
  font-size: 22px;
  border: 0;
  border-radius: 2px;
`

const InputField = () => {
  return (
    <>
      <Label htmlFor="taskinput">Enter a task</Label>
      <Input type="text" id="taskinput" name="taskinput"></Input>
    </>
  )
}

export default InputField;