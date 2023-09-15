import { Person } from "@/protocols/protocol";
import { getPersonRepository } from "@/respository/repository";

export async function getPersonService() :Promise<Person> {
    const person = await getPersonRepository();
    return person;
}