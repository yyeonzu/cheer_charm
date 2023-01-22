import styled from 'styled-components';
import background from '../../assets/images/background.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-repeat: repeat-y;
  background-size: 100%;
  padding-bottom: 100px;
`;

export const TitleBar = styled.div`
  width: 350px;
  margin-top: 100px;
`;

export const LoginBox = styled.div`
  width: 350px;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  border-radius: 20px;
  background-color: #fdfbf7;
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const Input = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #f5b5a2;
  border-radius: 0px;

  background: none;
  outline: none;

  margin-bottom: 22px;
  font-family: ${(props) => props.fontFamily || 'NanoomSquare'};
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: 14px;
  padding-left: 8px;
  padding-bottom: 8px;

  ::placeholder {
    font-family: NanoomSquare;
  }
  background-image: url(${(props) => props.icon});
  background-size: 14px;
  background-repeat: no-repeat;
  background-position: 95%;
`;

export const Button = styled.button`
  width: 210px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9d7cd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;

  margin-left: 40px;
  margin-right: 40px;
  margin-top: 64px;
  margin-bottom: 30px;
`;

export const Line = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const Hr = styled.div`
  margin-left: 18px;
  margin-right: 18px;
  margin-top: 4px;
  border-top: 2px solid #ffffff;
  width: 156px;
`;

export const Kakao = styled.div``;

export const Text = styled.div`
  font-size: 13px;
  font-family: NanoomSquare;
  color: ${(props) => props.color};
  margin-left: 8px;
`;
