import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

export const sessionOptions = {
  cookieName: "myapp_session", // Your chosen cookie name
  password: "a_secure_random_password_that_is_at_least_32_characters_long", // Your generated password,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export function withSessionSSR(handler) {
    return withIronSessionSsr(handler, sessionOptions)
}

export function withSessionAPI(handler) {
    return withIronSessionApiRoute(handler, sessionOptions)
}