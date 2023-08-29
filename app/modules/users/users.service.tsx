import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getUsers() {
    return await prisma.user.findMany()
}

export async function register(data: any) {
    return await prisma.user.create({ data })
}

export async function deleteUser(id: any) {
    return await prisma.user.delete({ where: { id: parseInt(id) } })

}