export default async function publishQueue(queueId: string): Promise<string | never> {
    const queueResponse = await fetch(process.env.API_URL, {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            query: `
                mutation updateQueue($queueId: ID!) {
                    updateOneQueue(input: { id: $queueId, update: { published: true } }) {
                        id
                    }
                }
            `,
            variables: {
                queueId,
            },
        }),
    });

    if (queueResponse.ok) {
        const queueJson = await queueResponse.json();
        const {
            data: {
                updateOneQueue: { id },
            },
        } = queueJson;

        return id;
    }

    throw new Error("Wrong request");
}
