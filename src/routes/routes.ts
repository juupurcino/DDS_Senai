import { Express } from 'express';
import auth from '../routes/auth.ts'
import express from 'express'

export default function (app: Express) {
    app
        .use(express.json())
        .use('/api/auth', auth)
}