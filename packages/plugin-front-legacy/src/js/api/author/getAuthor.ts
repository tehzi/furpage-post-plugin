export interface IAuthorResponse {
    id: string;
}

export default async function getAuthor(vkID: string): Promise<IAuthorResponse | null | never> {
    const authorResponse = await fetch(process.env.API_URL, {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            query: `
                query getAuthor($vkID: String!) {
                    authors(filter: { vkID: { eq: $vkID } }) {
                        edges {
                            node {
                                id
                            }
                        }
                    }
                }
            `,
            variables: {
                vkID,
            },
        }),
    });

    if (authorResponse.ok) {
        let id = null;
        const authorJson = await authorResponse.json();
        const {data: {authors: {edges = []}}} = authorJson;

        if (edges.length) {
            ([{node: { id }}] = edges || []);
        }

        return { id };
    }

    throw new Error("Wrong request");
}