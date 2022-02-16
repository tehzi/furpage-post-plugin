import React, {
    Component,
    ComponentClass,
    ComponentType,
    ReactNode,
    SyntheticEvent,
} from "react";
import { isElement, last } from "lodash";
import { compose } from "redux";
import {
    connect,
    InferableComponentEnhancerWithProps,
    MapDispatchToProps,
    MapStateToProps,
} from "react-redux";
import { vkAuth } from "~actions/login";
import ButtonState from "~components/ButtonState";
import { canAdd, isAdded, isQueue } from "~helpers/image";
import { addImage } from "~actions/images";
import AppStore from "~types/AppStore";
import { ImageState } from "~store/reducers/images";
import Button from "~components/Button";

export const pluginMount = "furpage-button-nest";

interface OwnSiteProps {
    onStartAuth: () => void;
    onAddImage: () => void;
}

type SiteFromStoreProps = Pick<AppStore["updateUrl"], "url"> & {
    loginIn: boolean;
    image: ImageState;
};

const mapStateToProperties: MapStateToProps<
    SiteFromStoreProps,
    OwnSiteProps,
    AppStore
> = (store) => {
    let userId = null;
    const {
        updateUrl: { url = null } = {},
        images: { [window.location.href]: image = null } = {},
    } = store;

    if (store?.login?.auth) {
        ({login: { auth: { userId = null } = {} }} = store)
    }

    return ({
        url,
        image,
        loginIn: !!userId,
    });
};

export interface DispatchSiteProps {
    onStartAuth: () => void;
    onAddImage: (e: SyntheticEvent, image: string, tagSelector: string) => void;
}

type SiteProps = OwnSiteProps & SiteFromStoreProps & DispatchSiteProps;

const mapDispatchToProperties: MapDispatchToProps<
    DispatchSiteProps,
    OwnSiteProps
> = dispatch => ({
    onStartAuth(): void {
        dispatch(vkAuth());
    },
    onAddImage(event, image, tagSelector): void {
        let tags: string[] = [];
        if (tagSelector) {
            tags = [
                ...((document.querySelectorAll(
                    tagSelector,
                ) as unknown) as Iterable<Element>),
            ].map(element => element.textContent);
        }
        dispatch(
            addImage({
                url: window.location.href,
                image,
                tags,
                title: document.title,
            }),
        );
    },
});

export default function withSite(
    condition: string,
    selector: string,
    tagSelector: string = null,
): InferableComponentEnhancerWithProps<SiteProps, OwnSiteProps> {
    return compose(
        connect(mapStateToProperties, mapDispatchToProperties),
        (Site: ComponentType<SiteProps & { mount: Element }>) =>
            class extends Component<SiteProps> {
                image: HTMLImageElement = document.querySelector(selector);

                static displayName = `withSite(${
                    (Component as ComponentClass).displayName
                })`;

                constructor(properties: SiteProps) {
                    super(properties);
                    if (condition && isElement(this.image)) {
                        this.insertRoot();
                    }
                }

                shouldComponentUpdate(nextProperties: SiteProps): boolean {
                    if (!condition || !isElement(this.image)) {
                        return false;
                    }
                    const { url, loginIn, image: storeImageInfo } = this.props;
                    const isUpdate =
                        url !== nextProperties.url ||
                        loginIn !== nextProperties.loginIn ||
                        storeImageInfo !== nextProperties.image;
                    if (isUpdate) {
                        this.image = last([
                            ...((document.querySelectorAll(
                                selector,
                            ) as unknown) as Iterable<HTMLImageElement>),
                        ]);
                        const isElementAppended = isElement(
                            document.querySelector(`#${pluginMount}`),
                        );
                        if (isElementAppended) {
                            document.querySelector(`#${pluginMount}`).remove();
                        }
                        this.insertRoot();
                    }
                    return isUpdate;
                }

                insertRoot = (): void => {
                    const {
                        parentNode,
                        parentNode: { insertBefore = (): void => {} } = {},
                    } = this.image;
                    const isElementAppended = isElement(
                        document.querySelector(`#${pluginMount}`),
                    );
                    if (!isElementAppended) {
                        const buttonNest = document.createElement("div");
                        buttonNest.id = pluginMount;
                        insertBefore.call(
                            parentNode,
                            buttonNest,
                            this.image.nextSibling,
                        );
                    }
                };

                render(): ReactNode {
                    if (!condition || !isElement(this.image)) {
                        return null;
                    }
                    const {
                        onStartAuth = (): void => {},
                        onAddImage = (): void => {},
                        image,
                        loginIn,
                        url,
                    } = this.props;

                    return (
                        <Site
                            image={image}
                            loginIn={loginIn}
                            mount={document.querySelector(`#${pluginMount}`)}
                            url={url}
                            onStartAuth={onStartAuth}
                            onAddImage={onAddImage}
                        >
                            <Button
                                warning={!loginIn || isQueue(image)}
                                error={isAdded(image)}
                                onClick={(event: SyntheticEvent): void => {
                                    if (!loginIn) {
                                        onStartAuth();
                                        return;
                                    }
                                    if (canAdd(image)) {
                                        onAddImage(
                                            event,
                                            this.image.src,
                                            tagSelector,
                                        );
                                    }
                                }}
                            >
                                <ButtonState />
                            </Button>
                        </Site>
                    );
                }
            },
    );
}
