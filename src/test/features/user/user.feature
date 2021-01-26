Feature: User management

    Scenario: Retrieve administrator user
        When I search user 'gucvoile'
        Then the user is found
        And his last name is 'voile6'
