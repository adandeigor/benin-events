import prisma from '@/lib/prisma-client';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import MagicLinkEmail from '@/email-template/magic-link';
import  renderEmail  from '@/email-template/renderEmail';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const token = uuidv4();
        const hashedToken = bcrypt.hashSync(token, 10);
        const link = `${process.env.FRONTEND_URL}/auth/register-with-email/${encodeURIComponent(hashedToken)}`;

        const user_data = {
            email,
            token,
            expires: new Date(Date.now() + 30 * 60 * 1000) // Expire dans 30 min
        };

        // Sauvegarde du token dans la base de données
        await prisma.verificationToken.create({
            data: user_data
        });

        // Configuration du transporteur Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
            }
        });
        MagicLinkEmail

        // Envoi de l'email
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Connexion avec votre email',
            html: await renderEmail(link)
        });

        return NextResponse.json({ message: 'Verification email sent' });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
