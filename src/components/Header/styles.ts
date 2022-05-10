import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  padding: ${(props) => props.theme.size.padding.pd3};
  background: ${(props) => props.theme.palette.primary.main};
  display: flex;
  align-items: center;
`;

export const SpanLogo = styled.span`
  color: ${(props) => props.theme.palette.text.fuchsia};
  font-size: ${(props) => props.theme.size.title.tx2};
  display: flex;
  align-items: center;
`;
