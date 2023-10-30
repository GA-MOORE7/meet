import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showAndHideEventsDetails.feature');

defineFeature(feature, (test) => {

     //SCENARIO 1
    test('Initially, the events are hidden', ({ given, when, then }) => {
        let AppComponent;
        given('the user is viewing the list of events', () => {
            AppComponent = render(<App />);
        });

        when('no action is taken on the event', async () => {

            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
    
            await waitFor(() => {
              const EventListItems =
                within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });

        });

        then('event should be hidden by default', () => {

            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();

        });
    });

     //SCENARIO 2
    test('Users can access an event to view its details', ({ given, when, then }) => {

        let AppComponent;
        given('the user is viewing the list of events', async () => {

            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });

        });

        when('the user clicks on the ‘Details’ button of an event', async () => {

            const button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);

        });

        then('the detailed information about the event is displayed', () => {

            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();

        });
    });

     //SCENARIO 3
    test('Users can collapse an event to hide its details', ({ given, when, then }) => {
        
        let AppComponent;
        let button;
        given('a user has accessed an event to view its details', async () => {

            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;

            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });

            button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);

            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).toBeInTheDocument();
        });

        when('a user clicks on the ‘Hide Details’ button', async () => {
            await userEvent.click(button);
        });

        then('the event details should be hidden again', () => {

            const EventDOM = AppComponent.container.firstChild;
            const details = EventDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument();

        });
    });
});