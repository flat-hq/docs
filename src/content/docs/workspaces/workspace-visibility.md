# Workspace visibility

## Overview

By default, it's a good idea to keep workspaces accessible to everyone in your organization. It's great for eliminating silos and for fostering collaboration. But there are sometimes good reasons why not everyone in your organization should have access to a workspace. For example:

* Workspaces with sensitive or confidential information, like HR, legal, financial, or client matters
* Personal workspaces just for yourself
* Limiting the access of people who aren't core members of your team, like interns, third-party contractors, etc.

Flat gives you two ways to control who can access which workspaces:

* Workspace visibility: public versus private
* User roles: normal users versus guest users

### Workspace visibility: public versus private

When you create a workspace, you'll be asked to choose a visibility setting: public or private.

Public workspaces are the default. They're visible to:

* All normal users in your organization (users with the **Member** or **Admin** role)
* Guest users (users with the **Guest** role) who are members of the workspace

Private workspaces are more restrictive. They're only visible to users who've been explicitly made members of the workspace, regardless of their role. Use them for sensitive or confidential information, and for your own personal workspaces.

{% hint style="info" %}
When a workspace is marked private, it really is private! Even organization **Admins** won't see it unless they've been added as a workspace member.
{% endhint %}

{% hint style="info" %}
Learn more about managing team member roles in [managing-team-members.md](../setup/managing-team-members.md "mention").
{% endhint %}

### User roles: normal users versus guest users

Most users on your team will probably be "normal" users: users with the **Member** or **Admin** role. They can access all public workspaces, plus private workspaces they're members of.

There's another role that's more restrictive: the **Guest** role. Unlike normal users, guest users _can't_ access public workspaces by default. They can _only_ access workspaces they've been made members of. Use guest users for people who aren't core members of your team, like interns, third-party contractors, etc.

{% hint style="info" %}
Learn more about managing team member roles in [managing-team-members.md](../setup/managing-team-members.md "mention").
{% endhint %}

## Step-by-step

### Changing a workspace's visibility

To change a workspace's visibility, visit the workspace's page, then click the workspace's name to open the _Workspace setup_ dialog. In the _Visibility_ tab, you can set the workspace's visibility to public or private.

{% hint style="warning" %}
You can change a public workspace to private, but you can't make a private workspace public. Also, topics in a private workspace can't be moved to another workspace. That ensures topics and conversations in a private workspace remain private!
{% endhint %}

### Viewing workspace members

To see which users in your organization are members of a workspace, visit the workspace's page, then click the workspace's name to open the _Workspace setup_ dialog. The _Members_ tab lists all of the workspace's members.

### Adding a workspace member

To add a user as a workspace member, visit the workspace's page, then click the workspace's name to open the _Workspace setup_ dialog. In the _Members_ tab, you can search for the user to add.

### Removing a workspace member

To remove a user as a workspace member, visit the workspace's page, then click the workspace's name to open the _Workspace setup_ dialog. In the _Members_ tab, find the user you want to remove and click _Remove_.
