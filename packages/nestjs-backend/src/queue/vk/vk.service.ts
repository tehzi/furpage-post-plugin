import { Injectable } from "@nestjs/common";
import { ImagesEntity } from "src/images/images.entity";
import { API, Upload, VK } from "vk-io";
import { UsersUserSettingsXtr } from "vk-io/lib/api/schemas/objects";

const START_REPOST = 6;
const END_REPOST = 23;
const REPOST_GAP = 3_600_000;

@Injectable()
export class VkService {
    private accessToken: string;

    private api: API;

    private upload: Upload;

    private vk: VK;

    private getNextRepostSlot(now = new Date()): number {
        const nextSlotWithMinutes = new Date(now.getTime() + REPOST_GAP);
        const nextSlotHour = nextSlotWithMinutes.getHours() + 3;

        if (nextSlotHour > END_REPOST || nextSlotHour < START_REPOST) {
            if (nextSlotHour > END_REPOST) {
                nextSlotWithMinutes.setDate(nextSlotWithMinutes.getDate() + 1);
            }

            nextSlotWithMinutes.setUTCHours(6 - 3);
        }

        nextSlotWithMinutes.setMinutes(0);
        nextSlotWithMinutes.setSeconds(0);
        nextSlotWithMinutes.setMilliseconds(0);

        return nextSlotWithMinutes.getTime();
    }

    async postVk(images: ImagesEntity[]): Promise<unknown> {
        const [{ title, url, fileUrl }] = images;
        const [, publicId] = process.env.PUBLIC_ID.match(/(\d+)$/);

        const attachment = await this.upload.wallPhoto({
            source: {
                values: [
                    {
                        value: fileUrl,
                    },
                ],
            },
            group_id: +publicId,
        });
        const { count } = await this.vk.api.wall.get({
            filter: "postponed",
            owner_id: -publicId,
            count: 1,
        });
        const { items: [{ date = Date.now() / 1000 } = {}] = [] } = await this.vk.api.wall.get({
            filter: "postponed",
            owner_id: -publicId,
            count: 1,
            offset: count !== 0 ? count - 1 : 0,
        });

        await this.vk.api.wall.post({
            owner_id: -publicId,
            from_group: 1,
            message: title,
            copyright: url,
            topic_id: 1,
            attachments: [`${attachment.type}${attachment.ownerId}_${attachment.id}`],
            publish_date: Math.floor(this.getNextRepostSlot(new Date(date * 1000)) / 1000),
        });

        return;
    }

    async getProfile(): Promise<UsersUserSettingsXtr> {
        if (!this.vk) {
            throw new Error("No access token");
        }

        const profile = await this.vk.api.account.getProfileInfo({});

        return profile;
    }

    setAccessToken(accessToken: string): void {
        this.accessToken = accessToken;
        this.vk = new VK({ token: this.accessToken });
        this.api = new API({ token: accessToken });
        this.upload = new Upload({ api: this.api });
    }
}
