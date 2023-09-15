import { db } from "@/database/database.connection";
import { Person } from "@/protocols/protocol";

export async function getPersonRepository ():Promise<Person> {
    const persons = await db.query<Person[]>(` SELECT * FROM people ORDER BY RANDOM() LIMIT 1`);
    return persons.rows[0];
}