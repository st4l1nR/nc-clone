import jwt from 'jsonwebtoken'
export default function generateToken(user) {
    return jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.SECRET as string,
        {
          expiresIn: 60 * 60 * 24 * 30,
        }
      );
}
