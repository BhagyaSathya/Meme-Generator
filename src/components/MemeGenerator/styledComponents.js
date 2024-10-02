import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-right: 24px;
  padding-left: 24px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  @media screen and (min-width: 768px){
    font-size: 36px;
    text-align: left;
  }
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px){
    flex-direction: row-reverse;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding-bottom: 50px;
  padding-right: 10px;
  padding-left: 10px;
  @media screen and (min-width: 768px){
    width:48%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`

export const TextContent = styled.p`
  color: "#ffffff";
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans';
`
export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px){
    width: 40%;
  }
`
export const CustomLabel = styled.label`
  color: #7e858e;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0px;
  line-height:  1.4;
  font-family: 'Open Sans';

`

export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-size: 12px;
  outline: none;
  margin-top: 5px;
  border-radius: 5px;
  margin-bottom: 20px;
  height:  40px;
  font-family: 'Open Sans';
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 14px;
  padding-left: 14px;
  border: 1px solid #d7dfe9;
`

export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  outline: none;
  margin-top: 10px;
  border-radius: 5px;
  margin-bottom: 100px;
  height:  40px;
  font-family: 'Open Sans';
  padding: 10px;
  border: 1px solid #d7dfe9;
`

export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 14px;
  padding-left: 14px;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-size: 12px;
  outline: none;
  border: none;
  cursor: pointer:
  border-radius: 6px;
  margin-bottom: 20px;
  min-width: 25px;
  max-width: 150px;
  font-family: 'Open Sans';
  font-weight: 600;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  padding-left: 24px;
`
