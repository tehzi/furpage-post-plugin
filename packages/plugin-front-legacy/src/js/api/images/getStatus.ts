interface IStatusResponse {
    id: string;
    url: string;
    created: string;
    date: number;
}

export default async function getStatus(
    // accessToken: string = null,
    url = window.location.href,
): Promise<IStatusResponse | null | never> {
    // if (!accessToken) {
    //     throw new Error("No access token");
    // }

    const statusResponse = await fetch(process.env.API_URL, {
        method: "POST",
        headers: {
            // Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            query: `
                query getStatus($url: String!) {
                    histories(filter: {url: {eq: $url}}) {
                        edges {
                            node {
                                id
                                url
                                created
                            }
                        }
                    }
                    vkQueue(url: $url) {
                        date
                    }
                }
            `,
            variables: {
                url,
            },
        }),
    });

    if (statusResponse.ok) {
        let status = {};
        const statusJson = await statusResponse.json();
        const {
            data: {
                histories: { edges },
                vkQueue: { date },
            },
        } = statusJson;

        if (edges.length > 0) {
            [{ node: status }] = edges;

            return { ...status, date } as IStatusResponse;
        }

        return status as IStatusResponse;
    }

    throw new Error("Wrong request");
}
