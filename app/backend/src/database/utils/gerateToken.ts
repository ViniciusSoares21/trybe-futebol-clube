import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secretJWT';

export default function generateToken(email:string) {
  const token = jwt.sign(
    { data: { email } },
    secret,
    { algorithm: 'HS256', expiresIn: '7d' },
  );

  return token;
}
