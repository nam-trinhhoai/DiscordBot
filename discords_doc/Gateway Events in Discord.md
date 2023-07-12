# Gateway Events in Discord

## Receive Events

Receive events are Gateway events encapsulated in an [event payload](https://discord.com/developers/docs/topics/gateway-events#payload-structure),
 and are sent by Discord to an app through a Gateway connection. Receive
 events correspond to events that happen in a Discord server where the 
app is installed.

| Name | Description |
| --- | --- |
| https://discord.com/developers/docs/topics/gateway-events#hello | Defines the heartbeat interval |
| https://discord.com/developers/docs/topics/gateway-events#ready | Contains the initial state information |
| https://discord.com/developers/docs/topics/gateway-events#resumed | Response to https://discord.com/developers/docs/topics/gateway-events#resume |
| https://discord.com/developers/docs/topics/gateway-events#reconnect | Server is going away, client should reconnect to gateway and resume |
| https://discord.com/developers/docs/topics/gateway-events#invalid-session | Failure response to https://discord.com/developers/docs/topics/gateway-events#identify or https://discord.com/developers/docs/topics/gateway-events#resume or invalid active session |
| https://discord.com/developers/docs/topics/gateway-events#application-command-permissions-update | Application command permission was updated |
| https://discord.com/developers/docs/topics/gateway-events#auto-moderation-rule-create | Auto Moderation rule was created |
| https://discord.com/developers/docs/topics/gateway-events#auto-moderation-rule-update | Auto Moderation rule was updated |
| https://discord.com/developers/docs/topics/gateway-events#auto-moderation-rule-delete | Auto Moderation rule was deleted |
| https://discord.com/developers/docs/topics/gateway-events#auto-moderation-action-execution | Auto Moderation rule was triggered and an action was executed (e.g. a message was blocked) |
| https://discord.com/developers/docs/topics/gateway-events#channel-create | New guild channel created |
| https://discord.com/developers/docs/topics/gateway-events#channel-update | Channel was updated |
| https://discord.com/developers/docs/topics/gateway-events#channel-delete | Channel was deleted |
| https://discord.com/developers/docs/topics/gateway-events#channel-pins-update | Message was pinned or unpinned |
| https://discord.com/developers/docs/topics/gateway-events#thread-create | Thread created, also sent when being added to a private thread |
| https://discord.com/developers/docs/topics/gateway-events#thread-update | Thread was updated |
| https://discord.com/developers/docs/topics/gateway-events#thread-delete | Thread was deleted |
| https://discord.com/developers/docs/topics/gateway-events#thread-list-sync | Sent when gaining access to a channel, contains all active threads in that channel |
| https://discord.com/developers/docs/topics/gateway-events#thread-member-update | https://discord.com/developers/docs/resources/channel#thread-member-object for the current user was updated |
| https://discord.com/developers/docs/topics/gateway-events#thread-members-update | Some user(s) were added to or removed from a thread |
| https://discord.com/developers/docs/topics/gateway-events#guild-create | Lazy-load for unavailable guild, guild became available, or user joined a new guild |
| https://discord.com/developers/docs/topics/gateway-events#guild-update | Guild was updated |
| https://discord.com/developers/docs/topics/gateway-events#guild-delete | Guild became unavailable, or user left/was removed from a guild |
| https://discord.com/developers/docs/topics/gateway-events#guild-audit-log-entry-create | A guild audit log entry was created |
| https://discord.com/developers/docs/topics/gateway-events#guild-ban-add | User was banned from a guild |
| https://discord.com/developers/docs/topics/gateway-events#guild-ban-remove | User was unbanned from a guild |
| https://discord.com/developers/docs/topics/gateway-events#guild-emojis-update | Guild emojis were updated |
| https://discord.com/developers/docs/topics/gateway-events#guild-stickers-update | Guild stickers were updated |
| https://discord.com/developers/docs/topics/gateway-events#guild-integrations-update | Guild integration was updated |
| https://discord.com/developers/docs/topics/gateway-events#guild-member-add | New user joined a guild |
| https://discord.com/developers/docs/topics/gateway-events#guild-member-remove | User was removed from a guild |
| https://discord.com/developers/docs/topics/gateway-events#guild-member-update | Guild member was updated |
| https://discord.com/developers/docs/topics/gateway-events#guild-members-chunk | Response to https://discord.com/developers/docs/topics/gateway-events#request-guild-members |
| https://discord.com/developers/docs/topics/gateway-events#guild-role-create | Guild role was created |
| https://discord.com/developers/docs/topics/gateway-events#guild-role-update | Guild role was updated |
| https://discord.com/developers/docs/topics/gateway-events#guild-role-delete | Guild role was deleted |
| https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-create | Guild scheduled event was created |
| https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-update | Guild scheduled event was updated |
| https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-delete | Guild scheduled event was deleted |
| https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-user-add | User subscribed to a guild scheduled event |
| https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-user-remove | User unsubscribed from a guild scheduled event |
| https://discord.com/developers/docs/topics/gateway-events#integration-create | Guild integration was created |
| https://discord.com/developers/docs/topics/gateway-events#integration-update | Guild integration was updated |
| https://discord.com/developers/docs/topics/gateway-events#integration-delete | Guild integration was deleted |
| https://discord.com/developers/docs/topics/gateway-events#interaction-create | User used an interaction, such as an https://discord.com/developers/docs/interactions/application-commands |
| https://discord.com/developers/docs/topics/gateway-events#invite-create | Invite to a channel was created |
| https://discord.com/developers/docs/topics/gateway-events#invite-delete | Invite to a channel was deleted |
| https://discord.com/developers/docs/topics/gateway-events#message-create | Message was created |
| https://discord.com/developers/docs/topics/gateway-events#message-update | Message was edited |
| https://discord.com/developers/docs/topics/gateway-events#message-delete | Message was deleted |
| https://discord.com/developers/docs/topics/gateway-events#message-delete-bulk | Multiple messages were deleted at once |
| https://discord.com/developers/docs/topics/gateway-events#message-reaction-add | User reacted to a message |
| https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove | User removed a reaction from a message |
| https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-all | All reactions were explicitly removed from a message |
| https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-emoji | All reactions for a given emoji were explicitly removed from a message |
| https://discord.com/developers/docs/topics/gateway-events#presence-update | User was updated |
| https://discord.com/developers/docs/topics/gateway-events#stage-instance-create | Stage instance was created |
| https://discord.com/developers/docs/topics/gateway-events#stage-instance-update | Stage instance was updated |
| https://discord.com/developers/docs/topics/gateway-events#stage-instance-delete | Stage instance was deleted or closed |
| https://discord.com/developers/docs/topics/gateway-events#typing-start | User started typing in a channel |
| https://discord.com/developers/docs/topics/gateway-events#user-update | Properties about the user changed |
| https://discord.com/developers/docs/topics/gateway-events#voice-state-update | Someone joined, left, or moved a voice channel |
| https://discord.com/developers/docs/topics/gateway-events#voice-server-update | Guild's voice server was updated |
| https://discord.com/developers/docs/topics/gateway-events#webhooks-update | Guild channel webhook was created, update, or deleted |