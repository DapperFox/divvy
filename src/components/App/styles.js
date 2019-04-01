import styled from 'styled-components';

export const themeColors = {
  primary: '#222644',
  secondary: '#242B4F',
  tertiary: '#323232',
  text: '#FDFDFD',
  textBold: '#FFFFFF',
  charts: {
    shopping: '#8884d8',
    gifts: '#83a6ed',
    food: '#8dd1e1',
    education: '#82ca9d',
  }
};

export const Container = styled.header`
  background-color: ${themeColors.primary};
  min-height: 100vh;
  display: flex;
  font-size: calc(10px + 1vmin);
  color: white;
`;

export const MainSection = styled.section`
  height: 550px;
  box-sizing: border-box;
  margin: 30px;
  padding: 30px;
  background-color: ${themeColors.secondary}
  border-radius: 5px;
`;

export const PageHeader = styled.h1`
  margin: 0 20px 20px 0;
`;

export const StyledButton = styled.button`
  font-size: 14px;
  height: 30px;
  box-sizing: border-box;
`;
