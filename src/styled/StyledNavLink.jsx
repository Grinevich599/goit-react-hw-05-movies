import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
font-family: 'Oxygen', sans-serif;
display: inline-flex;
padding: 8px 12px;
min-width: 80px;
justify-content: center;
align-items: center;
background-color: transparent;
font-weight: 500;
border-radius: 18px;
border: 1px solid #dbd8d7;
color: #a8a89d;
text-decoration: none;
transition: all 0.3s;

  :hover {
    background-color: #909214;
    color: #ffffff;
  }

  &.active {
    background-color: #909214;
    color: #ffffff;
  }
  
`;
