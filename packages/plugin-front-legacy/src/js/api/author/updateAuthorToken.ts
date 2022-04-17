export default async function updateAuthorToken(id: string, accessToken: string): Promise<unknown | never> {
    const authorResponse = await fetch(process.env.API_URL, {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            query: `
                mutation updateAuthor($id: ID!, $accessToken: String!) {
                    updateOneAuthor(input: { id: $id, update: { accessToken: $accessToken } }) {
                        id
                    }
                }
            `,
            variables: {
                id,
                accessToken,
            },
        }),
    });

    if (authorResponse.ok) {
        const authorJson = await authorResponse.json();
        const {
            data: {
                updateOneAuthor: { id },
            },
        } = authorJson;

        return id;
    }

    throw new Error("Wrong request");
}
