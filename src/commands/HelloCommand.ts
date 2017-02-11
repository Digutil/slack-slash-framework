import {SlackBodyJSON} from '../interfaces/slack'

/**
 * Hello Command
 *
 * Says Hello!
 * or Hello {name} (if name is present)
 */
class HelloCommand {

    public static say_hello(body: SlackBodyJSON, words: Array<string>): string {

        let name: string = (typeof words[1] !== 'undefined') ? ' ' + words[1] : '!';

        return 'Hello' + name;

    }

}

export default HelloCommand;