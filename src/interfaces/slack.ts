/**
 * Slack Attachments Interface
 *
 * - Belongs in the attachments property of SlackResponseJSON
 * - Can be modified to include more attachment parameters
 */
interface SlackAttachments {
    title: string,
    author_name: string,
    image_url: string
}

/**
 * Slack Response Interface
 *
 * The formatted response Slack expects
 */
export interface SlackResponseJSON {
    response_type: string,
    text: string,
    attachments: Array<SlackAttachments>
}

/**
 * Slack Body
 *
 * The format Slack will send the post request
 * - Content type: application/x-www-form-urlencoded
 */
export interface SlackBodyJSON {
    token: string,
    team_id: string,
    team_domain: string,
    channel_id: string,
    channel_name: string,
    user_id: string,
    user_name: string,
    command: string,
    text: string,
    response_url: string
}