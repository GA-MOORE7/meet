Feature: Specify Number of Events
    Scenario: When the number of events to display has not been set, display all events
        Given the user hasn’t filtered events by city
        When the user is on the homepage of events
        Then the total number of events should be shown

    Scenario: When a user has set the number of events to display
        Given the user is on the homepage of events
        When the user sets a number in the Number of Events textbox
        Then the user should see that number of events in the list