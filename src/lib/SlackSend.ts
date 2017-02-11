import { SlackBodyJSON, SlackResponseJSON } from '../interfaces/slack'

import * as request from 'request'

/**
 * Slack Send
 *
 * Responsible for posting to Slack
 */
class SlackSend {

    /**
     * Post
     *
     * @param body
     * @param payload
     */
    public static post(body: SlackBodyJSON, payload: SlackResponseJSON) : void {

        request({
            method: "POST",
            url: body.response_url,
            json: payload
        }, function(error, response, response_body){
            if (!error && response.statusCode == 200) {

            }else{

            }
        });

    }

}

export default SlackSend;