import { useLoaderData } from "@remix-run/react"


export async function loader() {
    const data = [
        {
            id: 1,
            title: "ilham"
        }
    ]

    const datas = await fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())


    return datas
}


export default function Posts() {
    const posts = useLoaderData<typeof loader>()

    return (
        <>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        {post.username}
                    </li>
                ))}
            </ul>
        </>
    )
}