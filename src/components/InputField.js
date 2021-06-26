import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-size: 24px;
  margin-bottom: 15px;
  cursor: pointer;
`

const Input = styled.input`
  width: 200px;
  min-height: 50px;
  margin: 0 auto;
  padding: 5px;
  font-size: 22px;
  border: 0;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
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