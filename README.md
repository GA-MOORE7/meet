MeetUniversity: A Meet App

Objective:

Build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

Context:

Serverless and PWAs are both considered to be the future of web development, with benefits like:

Serverless Advantages:

No backend maintenance
easy to scale
always available
no cost for idle time

PWA Advantages:

Instant loading
offline support
push notifications
“add to home screen” prompt
responsive design
and cross-platform compatibility

The Meet app is designed to curate events based on city inputs, with data visualization illuminating event distribution by location and popularity of event genres.

The 5Ws:

Who — The users of your Meet app. They could be you, your friends, your professional network, or your potential employers.
What — A progressive web app with the ability to work offline and a serverless backend developed using a TDD technique.
When — Users of this app will be able to use it whenever they want to view upcoming events for a specific city. Your recruiter will be able to see your code immediately on GitHub.
Where — The server, in this case, is a serverless function hosted by a cloud provider (e.g., AWS). The application itself is also hosted online to make it shareable and installable. It can be used even when the user is offline. As it’s responsive, it displays well on any device.
Why — Serverless is the next generation of cloud infrastructure, PWA provides great user experience and performance, and the TDD technique ensures you have quality code and adequate test coverage. All of these skills, together with data visualization, will distinguish you from other web developers.

User Stories, Scenarios, and Acceptance Criteria

Key Features:

Feature 1: Filter Events by City

SCENARIO 1:
When the user hasn’t searched for a specific city, show upcoming events from all cities. Given the user hasn’t searched for any city; When the user opens the app; Then the user should see a list of upcoming events.

SCENARIO 2:
Users should see a list of suggestions when they search for a city. Given the main page is open; When the user starts typing in the city textbox; Then the user should receive a list of cities (suggestions) that match what they’ve typed.

SCENARIO 3:
Users can select a city from the suggested list. Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing; When the user selects a city (e.g., “Berlin, Germany”) from the list; Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

Feature 2: Show/Hide Event Details

SCENARIO 1:
Initially, the events are hidden. Given the user is viewing the list of events. When no action is taken on the event. Then event should be hidden by default.

SCENARIO 2:
Users can access an event to view its details. Given the user is viewing the list of events. When the user clicks on the ‘Details’ button of an event. Then the detailed information about the event is displayed.

SCENARIO 3:
Users can collapse an event to hide its details. Given a user has accessed an event to view its details. When a user clicks on the ‘Hide Details’ button. Then the event details should be hidden again.

Feature 3: Specify Number of Events

SCENARIO 1:
When the number of events to display has not been set, display all events. Given the user hasn’t filtered events by city. When the user is on the homepage of events. Then the total number of events should be shown.

SCENARIO 2:
When a user has set the number of events to display. Given the user is on the homepage of events. When the user sets a number in the Number of Events textbox. Then the user should see that number of events in the list.

Feature 4: Use the App When Offline

SCENARIO 1:
View cached events when offline. Given the user is offline. When the user visits the events page. Then the cached events can be viewed.

SCENARIO 2:  
Show error for search setting changes when offline. Given the user is offline. When the user changes the search settings. Then an error message appears.

Feature 5: Add an App Shortcut to the Home Screen

SCENARIO 1:
Add app shortcut to home screen. Given the user is on the homepage of the app. When the user clicks on the ‘Add app shortcut to homescreen’ button. Then the app shortcut is added to the home screen.

Feature 6: Display Charts Visualizing Event Details

SCENARIO 1:
Display a chart of upcoming events by city. Given the user is on the events page. When the user looks at the events visualization section. Then the user should see a chart showing the number of upcoming events in each city.

Technical Mandates

Framed in React
Strict adherence to TDD
Google Calendar API with OAuth2
Serverless function calls (preferably AWS Lambda)
GitHub hosting
Full compatibility, inclusive of IE11
Adaptive design (ranging from 1920px to 320px)
Achieves PWA standards as per Lighthouse
Service workers ensure offline functionality
Deployment via GitHub Pages
Object-Oriented Programming (OOP) for alerts
Data visualization tools integrated
Aiming for ≥ 90% test coverage
Performance monitoring via online tools
