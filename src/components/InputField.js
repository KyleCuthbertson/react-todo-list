import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-size: 26px;
  margin-bottom: 15px;
  cursor: pointer;
  @media screen and (min-width: 767px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
`

const Input = styled.input`
  width: 75%;
  min-height: 50px;
  max-width: 400px;
  margin: 0 auto;
  padding: 5px;
  font-size: 22px;
  border: 0;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  @media screen and (min-width: 767px) {
    font-size: 30px;
  }
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