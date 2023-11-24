import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  background-color: rgba(175, 47, 47, 0.15);
  color: white;

  &:hover {
    background-color: #f5f5f5;
    border-color: rgba(175, 47, 47, 0.15) !important;
    a {
      color: red;
    }
  }
`;