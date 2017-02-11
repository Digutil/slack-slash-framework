import { SlackBodyJSON, SlackResponseJSON } from '../interfaces/slack'

import HelloCommand from './HelloCommand'
import XkcdCommand from './XkcdCommand'

/**
 * Commands
 *
 * Processes and direct commands to rightful classes
 */
class Commands {

    /**
     * Process Command
     *
     * @param body
     * @returns {any}
     */
    public static process(body: SlackBodyJSON): SlackResponseJSON {

        if(body.token !== process.env.SLACK_SLASHER_TOKEN) {
            return {
                'response_type': 'ephemeral',
                'text': 'Slack Slasher token is invalid.',
                'attachments': null
            };
        }

        const dirtyWords = body.text.trim();
        const words = dirtyWords.split(' ');

        switch (words[0]) {
            case 'hello':
                return {
                    'response_type': 'in_channel',
                    'text': HelloCommand.say_hello(body, words),
                    'attachments': null
                };

            case 'xkcd':
                return {
                    'response_type': 'ephemeral',
                    'text': XkcdCommand.recentImage(body, words),
                    'attachments': null
                };

            case 'help':
            default:
                return {
                    'response_type': 'ephemeral',
                    'text': Commands.help_response(body),
                    'attachments': null
                };

        }

    }

    /**
     * Help Response
     *
     * @param body
     * @returns {string}
     */
    private static help_response(body: SlackBodyJSON) {
        let message = '```' + "\n";
        message += '- ' + body.command + ' hello {person_name}  [Says hello to {person_name}]' + "\n";
        message += '- ' + body.command + ' xkcd  [Displays the latest xkcd web comic]' + "\n";
        message += '```';
        return message;
    }

}

export default Commands;