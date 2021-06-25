import styled from 'styled-components';

const Head = styled.header`
  margin: 0 auto;
  text-align: center;
  padding: 10px 5px;
  margin-bottom: 10px;
  border-bottom: 2px solid #FFF;
  h1 {
    font-size: 40px;
    padding: 15px 0;
  }
  p {
    font-size: 12px;
    margin-bottom: 10px;
  }
`

const Header = () => {
  return (
    <>
      <Head>
        <h1>To Do List</h1>
        <p>By Kyle Cuthbertson</p>
      </Head>
    </>
  )
}

export default Header;