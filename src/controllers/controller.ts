import { Person } from "@/protocols/protocol";
import { getPersonService } from "@/services/service";
import { Request, Response } from "express";

export default async function getPerson (req: Request, res: Response) :Promise<Response> {
    const person = await getPersonService();
    return res.status(200).send(person)
}