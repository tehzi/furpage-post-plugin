export default async function addToQueue(
    queueId: string,
    url: string,
    title: string,
    tags: string,
    fileUrl: string,
): Promise<string | never> {
    const queueResponse = await fetch(process.env.API_URL, {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            query: `
                mutation addImage($queueId: String!, $url: String!, $title: String!, $tags: String!, $fileUrl: String!) {
                    createOneImages(
                        input: {
                            images: {
                                queueId: $queueId
                                url: $url
                                title: $title
                                tags: $tags
                                fileUrl: $fileUrl
                            }
                        }
                    ) {
                        id
                    }
                }
            `,
            variables: {
                queueId,
                url,
                title,
                tags,
                fileUrl,
            },
        }),
    });

    if (queueResponse.ok) {
        const queueJson = await queueResponse.json();
        const {
            data: {
                createOneImages: { id },
            },
        } = queueJson;

        return id;
    }

    throw new Error("Wrong request");
}
