import URI from "urijs";

export default async function addToQueue(tags, url, caption, imgUrl, userId) {
    const { protocol } = new URL(url);
    const uri = new URI(`${protocol}//furrycard.furries.ru/api.php`);
    uri.addQuery({
        method: "push",
        tags: encodeURI(tags),
        url,
        caption: caption.replace(/'/g, ""),
        img_url: imgUrl,
        user_id: userId,
    });
    let response = await fetch(uri.normalize());
    if (response.ok) {
        response = await response.text();
        return response;
    }
    throw new Error("Wrong request");
}
