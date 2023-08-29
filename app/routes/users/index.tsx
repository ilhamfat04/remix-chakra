import { Button } from "@chakra-ui/react";
import { ActionArgs, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react"
import { deleteUser, getUsers, register } from "~/modules/users/users.service"

export async function loader() {
    const data = await getUsers()
    return data
}

export async function action({ request }: ActionArgs) {
    const body = await request.formData();
    const deleteID = body.get("deleteID")

    if (deleteID) {
        await deleteUser(deleteID)
        return redirect("/users")
    }

    const name = body.get("name")
    const email = body.get("email")

    await register({ name: name, email: email })

    return redirect("/users")

}



export default function Posts() {
    const users = useLoaderData<typeof loader>()

    return (
        <>

            <Form method="post">
                <input type="text" name="name" />
                <input type="email" name="email" />
                <button>Submit</button>

            </Form>


            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>
                        {user.name}
                        <Form method="post">
                            <Button type="submit" value={user.id} colorScheme='blue' name="deleteID" >{user.id}</Button>
                        </Form>
                    </li>
                ))}
            </ul>
        </>
    )
}