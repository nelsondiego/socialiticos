"use server";

import { getXataClient } from "@/lib/xata";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import sharp from 'sharp';

const xata = getXataClient();

export async function signUp(data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) {
  const { email, password, firstName, lastName } = data;

  const existingUser = await xata.db.User.filter({ email }).getFirst();

  if (existingUser) throw new Error("El usuario ya existe");

  const hashedPassword = await bcrypt.hash(password, 10);

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    firstName + " " + lastName
  )}&background=random`;

  // Obtener la imagen, convertirla a WebP y luego a base64
  const response = await fetch(avatarUrl);
  const arrayBuffer = await response.arrayBuffer();
  const webpBuffer = await sharp(Buffer.from(arrayBuffer))
    .webp()
    .toBuffer();
  const base64 = webpBuffer.toString('base64');
  
  const newUser = await xata.db.User.create({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    photoUrl: {
      name: `${firstName.toLowerCase()}-${lastName.toLowerCase()}.webp`,
      mediaType: "image/webp",
      base64Content: base64,
    },
  });

  redirect("/signin");
  return newUser;
}
