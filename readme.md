#Slack Slash Framework

A simple to use framework to receive and respond to Slack Slash events.

## Set Up

#### Slack Slash Commands
Navigate to https://slack.com/apps and click on "Build your own".  
Select "Something just for my team" from the next menu.  
Select Slash Commands, give your command a name and click on the button.  
Enter the URL of where you will be hosting this framework.  
Copy the Slack Token and add it to the environment variables of your server.  

On a Mac:  
`export SLACK_SLASHER_TOKEN={slack_token}`

#### Slack Slash Framework
Clone the repository onto the server (with a publicly accessible address).  
Install node packages by running:  
`$ npm install`  
Ensure you have Gulp installed:  
`$ npm install -g gulp`

When making changes to the src files, watch the changes with gulp:  
`$ gulp`

To start the server, run:  
`$ npm start`

To run the tests:  
`$ npm test`


## Examples

In the src directory, you will find two example commands.

#### Hello Command
A command that reads the `hello` command and responds with text.

#### xkcd Command
A command that reads the `xkcd` command and responds with the latest xkcd web comic image.
As Slack will only wait 3 seconds for a response, here I use the `response_url` that Slack sends me to send the image back to Slack channel.
In the mean time, I send a "Processing..." message to the user to notify that the slash command was indeed received.


## References

Slack Slash Commands  
https://api.slack.com/slash-commands

Introduction to message formatting  
https://api.slack.com/docs/messages

Adding attachments to the message  
https://api.slack.com/docs/message-attachments