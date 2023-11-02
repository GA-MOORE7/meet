import { loadFeature, defineFeature } from "jest-cucumber";
import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    // Scenario 1
    test('When the number of events to display has not been set, display all events', 
    ({ given, when, then }) => {

        let AppComponent;
        let eventList;
        given('the user hasn’t filtered events by city', () => {
            AppComponent = render(<App />);
        });

        when('the user is on the homepage of events', async () => {

            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
              eventList = within(AppDOM).queryAllByRole('listitem');
              expect(eventList[0]).toBeTruthy();
            });

        });

        then('the total number of events should be shown', () => {
            expect(eventList.length).toEqual(32);
        });
    });

    // Scenario 2
    test('When a user has set the number of events to display', ({ given, when, then }) => {
        
        let AppComponent;
        given('the user is on the homepage of events', async () => {

            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
        });

        when('the user sets a number in the Number of Events textbox', async () => {        

            const button = AppComponent.queryByTestId('numberOfEventsInput');
            await userEvent.type(button, '{backspace}{backspace}10');

        });

        then('the user should see that number of events in the list', () => {

            const AppDOM = AppComponent.container.firstChild;
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList.length).toEqual(10);

        });
    });
});