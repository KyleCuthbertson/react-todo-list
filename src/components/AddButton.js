import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  min-height: 50px;
  padding: 5px 10px;
  border: 2px solid #FFF;
  border-left: 0;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  color: #FFF;
  font-size: 22px;
  background: none;
  cursor: pointer;
  @media screen and (min-width: 767px) {
    font-size: 30px;
  }
`


const AddButton = (props) => {

  const { add } = props;

  return (
    <>
      <Button onClick={add}><i className="fas fa-plus"></i></Button>
    </>
  )
}

export default AddButton;