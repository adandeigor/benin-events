import React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Link } from '@react-email/components';

interface ResetPasswordEmailProps {
  resetLink: string;
}

const ResetPasswordEmail: React.FC<ResetPasswordEmailProps> = ({ resetLink }) => (
  <Html>
    <Head />
    <Preview>Réinitialisation de mot de passe</Preview>
    <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f6f6f6', padding: '20px' }}>
      <Container style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px' }}>
        <Heading style={{ fontSize: '24px', marginBottom: '20px' }}>Réinitialisation de mot de passe</Heading>
        <Text style={{ fontSize: '16px', marginBottom: '20px' }}>
          Vous avez demandé à réinitialiser votre mot de passe. Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :
        </Text>
        <Link href={resetLink} style={{ fontSize: '16px', color: '#007bff', textDecoration: 'none' }}>
          Réinitialiser mon mot de passe
        </Link>
        <Text style={{ fontSize: '16px', marginTop: '20px' }}>
          Si vous n'avez pas demandé cette réinitialisation, veuillez ignorer cet email.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ResetPasswordEmail;