export default async function registerAuthor(accessToken: string): Promise<string | never> {
    const authorResponse = await fetch(process.env.API_URL, {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            query: `
                mutation createAuthor($accessToken: String!) {
                    createOneAuthor(
                        input: {
                            author: {
                                accessToken: $accessToken
                            }
                        }
                    ) {
                        id
                    }
                }
            `,
            variables: {
                accessToken,
            },
        }),
    });

    if (authorResponse.ok) {
        const authorJson = await authorResponse.json();
        const {data: {createOneAuthor: {id}}} = authorJson;

        return id;
    }

    throw new Error("Wrong request");
}