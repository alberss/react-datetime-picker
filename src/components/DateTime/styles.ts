import styled from 'styled-components'

export default styled.div`
  .input {
    display: flex;
    flex: 0 0 auto;
    width: 272px;
    position: relative;
    height: 40px;
    padding: 0 8px 0 12px;
    border-radius: 2px;
    border: 1.5px solid transparent;
    cursor: pointer;
    font-size: 16px;
    box-sizing: border-box;

    &:disabled {
      cursor: not-allowed;
    }
  }
`
