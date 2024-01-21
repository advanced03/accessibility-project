Feature: User Registration

    Scenario: Successful Registration
        Given a valid registration form
        When the user submits the registration form
        Then the registration should be successful

    Scenario: Registration with Invalid Input
        Given an invalid registration form
        When the user submits the registration form
        Then an error message should be displayed