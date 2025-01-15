# Checklists

## Overview

Flexible, lightweight checklists are one of Flat's distinctive features. They're more than just a way to break down a topic into tasks — though they certainly are that! They're also:

* a handy way for managers to keep tabs on a topic's progress without imposing extra effort on the team
* a lightweight way to map out operational procedures
* the means to create [flexible topic hierarchies](../finding-and-organizing-topics/flexible-topic-hierarchies.md) for projects, epics, milestones, and other structures

### Key concepts

A checklist is just a list of items to complete. A topic can have as many checklists as you like. Each checklist can contain **simple tasks**, **links to child topics**, or a mix of both.

* A simple **task** is just some text describing a bit of work to be done.
* A **link to a child topic** is a flexible parent-child relationship for representing [topic hierarchies](../finding-and-organizing-topics/flexible-topic-hierarchies.md) like projects, epics, milestones, and other structures. You can link to topics in the same workspace or other workspaces.

Each checklist is associated with a [stage](../workspaces/workflow-stages.md) in the topic's workspace. That provides two benefits:

* It's clear how the checklist fits into the topic's workflow.
* A checklist's progress is shown on the topic's card in the workspace when the topic is in the associated stage.

The example below illustrates these benefits in more detail.

### Example

{% hint style="info" %}
In this example, the team decides to use simple **tasks** to break down their work because they don't need the extra weight of child topics.
{% endhint %}

Imagine a software team building a web application. Let's say they have a workspace with stages called _Design_ ⇒ _Development_ ⇒ _Testing_ ⇒ _Done_. They're going to build a new small feature.

The product manager creates a topic for the new feature in the _Design_ stage.

The designer decides to create a checklist associated with the _Design_ stage to help track the mockups and other visuals they'll need to create. In the workspace, the topic's card shows a small progress bar depicting this checklist's status, so it's visible at a glance to the product manager how design is coming along.

When the designer is done, they move the topic to the _Development_ stage.

The developer decides to create two checklists associated with the _Development_ stage, one to help them track changes they'll need to make in the application's database, and another to help them track changes to the application's UI. In the workspace, the topic's card is now in the _Development_ stage, so it shows a small progress bar depicting these two _Development_-related checklists (but not the _Design_ checklist). Now it's visible at a glance to the product manager how development is coming along.

When the developer is done, they move the topic to the _Testing_ stage.

Finally, the tester decides to create a checklist associated with the _Testing_ stage containing their test plan. Now that the topic is in the _Testing_ stage, in the workspace its card shows a small progress bar depicting the _Testing_ checklist.

{% hint style="success" %}
Throughout the topic's life cycle, the product manager was able to see at a glance in the workspace how the topic was progressing, and they didn't need to impose any extra effort on the team, pester them for updates, or wait for the next team meeting.
{% endhint %}

## Step-by-step

### Creating a checklist

To add a checklist to a topic, visit the topic's page, then, in the page's central content area, click the checkbox icon on the palette in the bottom left corner.

### Adding and removing tasks

To add a task to a checklist, just click into the checklist and start typing into the input box. Hit <mark style="color:orange;background-color:yellow;">`Enter`</mark> when you're done.

To remove a task, hover over the task in the checklist, click the vertical ellipsis button on the right, then click _Delete_.

### Attaching and detaching child topics

To attach a child topic to a checklist, click into the checklist to open the input box, then type <mark style="color:orange;background-color:yellow;">`#`</mark> to bring up a search popup where you can search for the child topic by ID or text.

To detach a child topic, hover over the topic in the checklist, click the vertical ellipsis button on the right, then click _Detach child topic_. The child topic itself will still exist, but it will no longer be a part of the checklist.

_Learn more:_ [flexible-topic-hierarchies.md](../finding-and-organizing-topics/flexible-topic-hierarchies.md "mention")

### Editing the name and stage association

While viewing a checklist on a topic's page, click on the checklist's name to modify it. Use the dropdown next to the checklist's name to pick which [stage](../workspaces/workflow-stages.md) the checklist should be associated with.

### Changing the order of a topic's checklists

To change the order of a topic's checklists, visit the topic's page, hover over the checklist's name, then use the drag handle to the left to drag and drop the checklist to a different position.

{% hint style="info" %}
The drag handle won't appear when a topic has only one checklist, because there's only one possible "order"!
{% endhint %}

### Deleting a checklist

Only empty checklists can be deleted. To delete a checklist, just remove each item.
