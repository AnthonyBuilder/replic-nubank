import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';
import { isExistsTypeAnnotation } from '@babel/types';

export const Container = styled(Animated.ScrollView)`
    margin: 0 30px;
`;

export const Code = styled.View`
    padding: 5px;
    align-self: center;
    overflow:hidden;
`;

export const Nav = styled.View`
    margin-top: 30px;
    align-self: stretch;
    border-top-width: ${StyleSheet.hairlineWidth}px;;
    border-top-color: rgba(255, 255, 255, 0.4);
`;

export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;;
    border-bottom-color: rgba(255, 255, 255, 0.4);
`;

export const NavText = styled.Text`
    font-size: 15px;
    color: #FFF;
    padding-left: 5px;
`;

export const SingoutButton = styled.TouchableOpacity`
    background: grey;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 15px; 
`; 

export const SingoutButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 13px;
`;