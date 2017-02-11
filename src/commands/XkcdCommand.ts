import { SlackBodyJSON, SlackResponseJSON } from '../interfaces/slack'
import SlackSend from '../lib/SlackSend'

import * as request from 'request'

/**
 * Xkcd Command
 *
 * Retrieves last web comic
 */
class XkcdCommand {

    /**
     * Get recent image from xkcd
     *
     * @param body
     * @param words
     * @returns {string}
     */
    public static recentImage(body: SlackBodyJSON, words: Array<string>): string {

        let recentImageUrl = 'http://xkcd.com/info.0.json';

        request({
            method: "GET",
            url: recentImageUrl
        }, function(error, response, response_body){
            if (!error && response.statusCode === 200) {

                XkcdCommand.processAndSend(body, response_body);

            }
        });

        return 'Retrieving image...';

    }

    /**
     * Processes the JSON response from xkcd
     * and sends it off to Slack
     *
     * @param body
     * @param response_body
     */
    private static processAndSend(body: SlackBodyJSON, response_body: any): void {

        let formattedResponseBody = JSON.parse(response_body);

        if(formattedResponseBody.title && formattedResponseBody.img) {
            let payload: SlackResponseJSON = {
                'response_type': 'in_channel',
                'text': 'Today \'s xkcd',
                'attachments': [
                    {
                        title: formattedResponseBody.title,
                        author_name: 'Requested by: ' + body.user_name,
                        image_url: formattedResponseBody.img
                    }
                ]
            };

            SlackSend.post(body, payload);
        }

    }

}

export default XkcdCommand;