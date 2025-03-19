import { Html, Head, Body, Container, Heading, Text, Button, Tailwind } from "@react-email/components";

interface MagicLinkEmailProps {
  link: string;
}

export default function MagicLinkEmail({ link }: MagicLinkEmailProps) {
  return (
    <Html>
      <Head />
      <Body className="bg-gray-100 text-gray-900">
        <Tailwind>
          <Container className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <Heading className="text-xl font-bold text-center text-blue-600">
              Connexion à Benin Event's
            </Heading>
            <Text className="text-sm text-gray-700 text-center">
              Cliquez sur le bouton ci-dessous pour vous connecter à Benin Event's. Ce lien expirera dans 30 minutes.
            </Text>
            <div className="text-center mt-4">
              <Button
                href={link}
                className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
              >
                Se connecter
              </Button>
            </div>
            <Text className="text-xs text-gray-500 text-center mt-4">
              Si vous n'avez pas demandé cette connexion, ignorez simplement cet email.
            </Text>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
}
