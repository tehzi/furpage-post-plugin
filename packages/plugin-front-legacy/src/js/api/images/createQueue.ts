export default async function createQueue(authorId: string): Promise<string | never> {
    const queueResponse = await fetch(process.env.API_URL, {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            query: `
                mutation createQueue($authorId: String!) {
                    createOneQueue(input: { queue: { authorId: $authorId } }) {
                        id
                    }
                }
            `,
            variables: {
                authorId,
            },
        }),
    });

    if (queueResponse.ok) {
        const queueJson = await queueResponse.json();
        const {
            data: {
                createOneQueue: { id },
            },
        } = queueJson;

        return id;
    }

    throw new Error("Wrong request");
}
