import React from 'react';

import { Container, Code, Nav, NavItem, NavText, SingoutButton, SingoutButtonText } from './styled';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode';

export default function Menu({ translateY }) {
    return (
        <Container style={{ 
            opacity: translateY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, 1]
                }),
            }}>
            <Code>
                <QRCode 
                    value="https://rocketseat.com.br"
                    size={80}
                    fgColor="#FFF"
                />
            </Code>

            <Nav> 
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configurações do App</NavText>
                </NavItem>
            </Nav>

            <SingoutButton onpress={() => {}}>
                <SingoutButtonText>
                    Sair do App
                </SingoutButtonText>
            </SingoutButton>
        </Container>
    );
}