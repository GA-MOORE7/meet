Feature: Show/Hide Event Details
    Scenario: Initially, the events are hidden
        Given the user is viewing the list of events
        When no action is taken on the event
        Then event should be hidden by default

    Scenario: Users can access an event to view its details
        Given the user is viewing the list of events
        When the user clicks on the ‘Details’ button of an event
        Then the detailed information about the event is displayed

    Scenario: Users can collapse an event to hide its details
        Given a user has accessed an event to view its details
        When a user clicks on the ‘Hide Details’ button
        Then the event details should be hidden again