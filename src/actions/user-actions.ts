"use server";

import { getXataClient } from "@/lib/xata";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const xata = getXataClient();

export type UserData = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  photoUrl?: string;
};

let globalUserData: UserData | null = null;

export async function setUserData(userId: string): Promise<void> {
  const user = await xata.db.User.read(userId);
  if (user) {
    globalUserData = {
      id: user.id,
      email: user.email as string,
      firstName: user.firstName as string,
      lastName: user.lastName as string,
      photoUrl: user.photoUrl?.url,
    };
  }
  console.log('set user data from db');
}

export async function getUserData(): Promise<UserData | null> {
  return globalUserData;
}

export async function clearUserData(): Promise<void> {
  globalUserData = null;
}

export async function initializeUserData(): Promise<void> {
  const userId = cookies().get("userId")?.value;
  if (userId) {
    await setUserData(userId);
  }
  console.log('initialized user data');
}

export async function logout(): Promise<void> {
  clearUserData();
  cookies().delete("userId");
  redirect("/signin");
}

export async function setUserCookie(userId: string): Promise<void> {
  cookies().set("userId", userId, { httpOnly: true, secure: true });
}

export async function removeUserCookie(): Promise<void> {
  cookies().delete("userId");
}
