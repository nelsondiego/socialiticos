"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import { getXataClient } from "@/lib/xata";
import { clearUserData, removeUserCookie, setUserCookie, setUserData } from "@/actions/user-actions";

const xata = getXataClient();

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function signIn(email: string, password: string) {
  const user = await xata.db.User.filter({ email }).getFirst();

  if (!user) throw new Error("User not found");

  const passwordMatch = await bcrypt.compare(password, user.password as string);
  if (!passwordMatch) throw new Error("Invalid password");

  const token = await new SignJWT({ userId: user.id })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1d")
    .sign(SECRET);

  cookies().set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 86400,
    path: "/",
  });

  await setUserData(user.id);
  await setUserCookie(user.id);

  redirect("/feed");
}

export async function signOut() {
  cookies().delete("session");
  await clearUserData();
  await removeUserCookie();
  redirect("/signin");
}
