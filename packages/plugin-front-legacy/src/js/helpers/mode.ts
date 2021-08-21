import { chain } from "lodash";

export const findFa = (url = window.location.href): string => {
    return (
        /htt(p|ps):\/\/www\.furaffinity\.net\/view\/\d+\//.test(url) &&
        "furaffinity"
    );
};

export const findDa = (url = window.location.href): string => {
    return (
        /htt(p|ps):\/\/\S*\.?deviantart.com\/\w+\/art\/\w+/i.test(url) &&
        "deviantart"
    );
};

export const findBlank = (url = window.location.href): string => {
    return /htt(p|ps):\/\/oauth.vk.com\/blank.html/i.test(url) && "blank";
};

export const findPopup = (url = window.location.href): string => {
    return /chrome-extension:\/\/.+\/popup\.html$/i.test(url) && "popup";
};

export const findMode = (url = window.location.href): string => {
    return chain([findFa(url), findDa(url), findPopup(url)])
        .compact()
        .first()
        .value();
};

export const findImageUrl = (url = window.location.href): string => {
    return chain([findFa(url), findDa(url)])
        .compact()
        .first()
        .value();
};
