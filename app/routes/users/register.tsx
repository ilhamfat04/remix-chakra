import { ActionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react"
import { register } from "~/modules/users/users.service";

export async function action({ request }: ActionArgs) {
    const body = await request.formData();
    const name = body.get("name")
    const email = body.get("email")

    await register({ name: name, email: email })

    return redirect("/users")

}
export default function Register() {
    return (
        <>
            <Form method="post">
                <input type="text" name="name" />
                <input type="email" name="email" />
                <button>Submit</button>

            </Form>
        </>
    )
}