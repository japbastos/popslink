import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'ios' ? '35px' : '15px'};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ContainerContent = styled.View`
  margin-top: ${Platform.OS === 'ios' ? '25%' : '15%'};
`;

export const Title = styled.Text`
  font-size: 35px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
  padding-bottom: 10%;
`;

export const ContainerInput = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 15px 0;
  padding: 0 15px;
`;

export const BoxIcon = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  width: 10%;
  height: 50px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: rgba(255,255,255, 0.15);
`;

export const Input = styled.TextInput`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  padding: 10px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgba(255,255,255, 0.15);
  font-size: 16px;
`;

export const ButtonLink = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  background-color: #fff;
  margin: 0 15px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const ButtonLinkText = styled.Text`
  font-size: 18px;
`;
